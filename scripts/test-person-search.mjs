// Проверки поиска по правителям: логика сопоставления в src/app.js + DOM-выдача.
// Запуск: node scripts/test-person-search.mjs
// Для DOM-части нужен установленный Google Chrome или Microsoft Edge (playwright-core).
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const ROOT = new URL('..', import.meta.url);

// --- Загрузка данных династий в песочнице (как это делает build.mjs) ---
const html = await readFile(new URL('index.html', ROOT), 'utf8');
const context = { window: { DYNASTIES: {}, NICKNAME_SCHOLARSHIP: {} } };
vm.createContext(context);
for (const match of html.matchAll(/<script src="\.\/src\/([^"]+)" defer><\/script>/g)) {
  const file = match[1].split('?')[0];
  if (file !== 'app.js') {
    vm.runInContext(await readFile(new URL(`src/${file}`, ROOT), 'utf8'), context);
  }
}
const DYNASTIES = context.window.DYNASTIES;
assert.ok(Object.keys(DYNASTIES).length > 0, 'Данные династий не загрузились');

// --- Копия нормализации и логики сопоставления из src/app.js (держим синхронно) ---
function normalizeCatalogText(value) {
  return String(value || '')
    .replace(/\s/g, ' ')
    .toLocaleLowerCase('ru')
    .replaceAll('ё', 'е')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function arabicToRoman(value) {
  return value.replace(/\d+/g, (digits) => {
    const n = Number(digits);
    if (!Number.isInteger(n) || n < 1 || n > 3999) return digits;
    const thousands = Math.floor(n / 1000);
    const hundreds = Math.floor((n % 1000) / 100);
    const tens = Math.floor((n % 100) / 10);
    const ones = n % 10;
    return ('m'.repeat(thousands) + ['', 'c', 'cc', 'ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'cm'][hundreds]
      + ['', 'x', 'xx', 'xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc'][tens]
      + ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix'][ones]);
  });
}

function fieldWordRank(field, word) {
  if (field === word) return 1;
  if (field.startsWith(word)) return 2;
  if (field.split(/\s+/).some((part) => part.startsWith(word))) return 3;
  if (word.length >= 3 && field.includes(word)) return 4;
  return null;
}

function personMatchRank(person, nickname, q) {
  const nameNorm = normalizeCatalogText(person.name);
  const nickNorm = nickname ? normalizeCatalogText(nickname) : '';
  const fields = nickNorm ? [nameNorm, nickNorm] : [nameNorm];

  const queryWords = arabicToRoman(q).split(/\s+/).filter(Boolean);
  if (queryWords.length > 1) {
    const bestRanks = queryWords.map((word) => {
      const fieldRanks = fields.map((field) => fieldWordRank(field, word)).filter((rank) => rank != null);
      return fieldRanks.length ? Math.min(...fieldRanks) : null;
    });
    if (bestRanks.every((rank) => rank != null)) return Math.min(...bestRanks);
    return null;
  }

  const word = queryWords[0] || q;
  if (nameNorm === q || nickNorm === q) return 1;
  if (nameNorm.startsWith(q) || nickNorm.startsWith(q)) return 2;
  const nameWords = nameNorm.split(/\s+/);
  if (nameWords.some((w) => w.startsWith(word))) return 3;
  if (nickNorm && nickNorm.split(/\s+/).some((w) => w.startsWith(word))) return 3;
  if (word.length >= 3 && (nameNorm.includes(word) || nickNorm.includes(word))) return 4;
  return null;
}

// --- Поиск по всем данным (как в app.js: без дублей id+династия) ---
function search(rawQuery) {
  const query = normalizeCatalogText(rawQuery);
  if (!query) return [];
  const matches = [];
  const seenPersons = new Set();
  for (const dynasty of Object.values(DYNASTIES)) {
    for (const person of dynasty.members) {
      const personKey = `${person.id}·${dynasty.id}`;
      if (seenPersons.has(personKey)) continue;
      seenPersons.add(personKey);
      const rank = personMatchRank(person, person.nickname, query);
      if (rank != null) matches.push({ person, dynasty, rank });
    }
  }
  const collator = new Intl.Collator('ru', { sensitivity: 'base' });
  matches.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return collator.compare(a.person.name, b.person.name) || collator.compare(a.dynasty.name, b.dynasty.name);
  });
  return matches.map(({ person, dynasty, rank }) => ({ id: person.id, label: `${person.name}|${dynasty.name}`, rank }));
}

const labels = (results) => results.map((r) => r.label);
const find = (results, name, dynasty) => results.find((r) => r.label === `${name}|${dynasty}`);

let passed = 0;
function check(title, fn) {
  fn();
  passed += 1;
  console.log(`ok — ${title}`);
}

// 1. Полное имя и прозвище
check('полное имя «Иван Грозный»', () => {
  const r = search('Иван Грозный');
  assert.ok(find(r, 'Иван IV Васильевич', 'Рюриковичи'), JSON.stringify(labels(r)));
});
check('имя + прозвище «Ярослав Мудрый»', () => {
  const r = search('Ярослав Мудрый');
  assert.ok(find(r, 'Ярослав I Владимирович', 'Рюриковичи'));
});
check('имя + второе имя «Иван Калита»', () => {
  const r = search('Иван Калита');
  assert.ok(find(r, 'Иван I Данилович', 'Рюриковичи'));
});
check('имя + часть третьего имени «Пётр Великий»', () => {
  const r = search('Пётр Великий');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('только прозвище «Грозный»', () => {
  const r = search('Грозный');
  assert.ok(find(r, 'Иван IV Васильевич', 'Рюриковичи'));
  assert.ok(find(r, 'Селим I', 'Османы'));
});
check('часть прозвища «Мудрый» → Ярослав', () => {
  const r = search('Мудрый');
  assert.ok(find(r, 'Ярослав I Владимирович', 'Рюриковичи'));
});
check('точное прозвище «Тишайший»', () => {
  const r = search('Тишайший');
  assert.ok(find(r, 'Алексей Михайлович', 'Романовы'));
});
check('часть прозвища «тишай»', () => {
  const r = search('тишай');
  assert.ok(find(r, 'Алексей Михайлович', 'Романовы'));
});

// 2. Части имени
check('часть имени «Грозн»', () => {
  const r = search('Грозн');
  assert.ok(find(r, 'Иван IV Васильевич', 'Рюриковичи'));
});
check('часть отчества «васил»', () => {
  const r = search('васил');
  assert.ok(find(r, 'Иван IV Васильевич', 'Рюриковичи'));
});
check('середина слова «озный» (3+ буквы)', () => {
  const r = search('озный');
  assert.ok(find(r, 'Иван IV Васильевич', 'Рюриковичи'));
});

// 3. Регистр и ё/е
check('верхний регистр «ПЁТР»', () => {
  const r = search('ПЁТР');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('смешанный регистр «пЁтР»', () => {
  const r = search('пЁтР');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('ё в запросе «Пётр» и е в данных', () => {
  const r = search('Пётр');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('е в запросе «Петр» находит «Пётр»', () => {
  const r = search('Петр');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('ё и е дают одинаковую выдачу', () => {
  assert.equal(labels(search('петр')).join('\n'), labels(search('пётр')).join('\n'));
});

// 4. Пробелы
check('лишние пробелы вокруг «  пётр  »', () => {
  const r = search('  пётр  ');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('двойной пробел внутри «Пётр  I»', () => {
  const r = search('Пётр  I');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('двойной пробел внутри «Карл  I  Великий»', () => {
  const r = search('Карл  I  Великий');
  assert.ok(find(r, 'Карл I', 'Каролинги'));
});
check('неразрывный пробел «Иван\u00a0Грозный»', () => {
  const r = search('Иван\u00a0Грозный');
  assert.ok(find(r, 'Иван IV Васильевич', 'Рюриковичи'));
});

// 5. Арабские цифры вместо римских
check('«Николай 2» → Николай II', () => {
  const r = search('Николай 2');
  assert.ok(find(r, 'Николай II Александрович', 'Романовы'));
});
check('«петр 1» → Пётр I', () => {
  const r = search('петр 1');
  assert.ok(find(r, 'Пётр I Великий', 'Романовы'));
});
check('«елизавета 1» → Елизавета I', () => {
  const r = search('елизавета 1');
  assert.ok(find(r, 'Елизавета I', 'Тюдоры'));
});

// 6. Точность и отсутствие ложных срабатываний
check('короткий запрос «Пётр I» не тянет лишних Романовых', () => {
  const r = search('Пётр I');
  const top = labels(r);
  assert.equal(top[0], 'Пётр I Великий|Романовы');
  assert.ok(top.length <= 4, `слишком много: ${top.join(', ')}`);
});
check('«Николай II» — точная персона', () => {
  const r = search('Николай II');
  assert.equal(labels(r)[0], 'Николай II Александрович|Романовы');
});
check('латинская транслитерация не поддерживается и не даёт ложных совпадений', () => {
  assert.deepEqual(search('Nikolai'), []);
  assert.deepEqual(search('Ivan'), []);
});
check('абсолютно бессмысленный запрос ничего не находит', () => {
  assert.deepEqual(search('zzzzq'), []);
});
check('ранжирование: точное прозвище выше частичного', () => {
  const r = search('Мудрый');
  assert.equal(r[0].rank, 1);
});

// 7. Дубликаты в выдаче
check('нет повторов «персона+династия» ни по одному запросу', () => {
  const queries = ['Иван', 'Карл', 'Великий', 'Людовик', 'Фридрих', 'Генрих', 'Петр', 'е'];
  for (const q of queries) {
    const r = search(q);
    assert.equal(new Set(r.map((x) => `${x.id}|${x.label}`)).size, r.length, `дубли по «${q}»: ${labels(r)}`);
  }
});

// 8. Тестовые данные живы: sanity-проверки
check('данные содержат ожидаемых правителей', () => {
  assert.ok(find(search('Тишайший'), 'Алексей Михайлович', 'Романовы'));
  assert.ok(find(search('Карл Великий'), 'Карл I', 'Каролинги'));
});

console.log(`\nУтилитные проверки: ${passed} passed`);

// --- DOM-часть: реальная выдача, открытие результата, отсутствие дублей ---
async function runDomTests() {
  const { existsSync } = await import('node:fs');
  const { chromium } = await import('playwright-core');
  const executablePath = findChromeExecutable();
  if (!executablePath) {
    console.log('DOM-часть пропущена: не найден Chrome/Edge (задайте PLAYWRIGHT_CHROME).');
    return;
  }
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage();
  await page.goto('file:///' + decodeURIComponent(new URL('index.html', ROOT).pathname).replace(/^\/?/, ''));
  await page.waitForTimeout(300);
  const input = page.locator('#personSearch');
  const results = page.locator('#personSearchResults');
  const status = page.locator('#personSearchStatus');

  async function type(q) {
    await input.fill(q);
    await input.dispatchEvent('input');
    await page.waitForTimeout(40);
    const opts = await results.locator('.person-search__option').allTextContents();
    return { visible: !(await results.isHidden()), status: await status.textContent(), opts };
  }

  let domPassed = 0;
  async function domCheck(title, fn) { await fn(); domPassed += 1; console.log(`ok — ${title}`); }

    for (const q of ['Иван Грозный', 'Ярослав Мудрый', 'Пётр  I', 'Николай 2', 'Грозный', 'ПЁТР', 'Nikolai']) {
      const r = await type(q);
      await domCheck(`DOM: выдача по «${q}»`, () => {
        if (q === 'Nikolai') {
          assert.equal(r.visible, false);
          assert.match(r.status, /Ничего не найдено/);
        } else {
          assert.equal(r.visible, true);
          assert.ok(r.opts.length > 0);
        }
      });
    }

  // Открытие результата: древо + карточка
  await type('Ярослав Мудрый');
  await results.locator('.person-search__option').first().click();
  await page.waitForTimeout(250);
  await domCheck('DOM: клик по результату открывает карточку правителя', async () => {
    assert.equal(await page.locator('#personModal').isVisible(), true);
    assert.equal(await page.locator('#modalName').textContent(), 'Ярослав I Владимирович');
    assert.equal(await page.locator('#modalNickname').textContent(), 'Мудрый');
    assert.match(await page.locator('#treeTitle').textContent(), /Рюрик/);
  });
  await page.locator('#modalClose').click();
  await page.waitForTimeout(100);
  await domCheck('DOM: фокус вернулся на кнопку правителя в древе', async () => {
    const focusedId = await page.evaluate(() => document.activeElement?.dataset?.personId || null);
    assert.equal(focusedId, 'yaroslav_i');
  });

  await page.locator('#backButton').click();
  await page.locator('#dynastyScreen').waitFor({ state: 'visible' });

  // Дубли в реальной выдаче
  for (const q of ['Великий', 'Иван', 'Карл']) {
    const r = await type(q);
    await domCheck(`DOM: нет дублей в выдаче по «${q}»`, async () => {
      assert.equal(new Set(r.opts).size, r.opts.length, r.opts.join(' / '));
    });
  }

  console.log(`\nDOM-проверки: ${domPassed} passed`);
  await browser.close();
}

// Вспомогательная функция объявлена до использования в runDomTests.
function findChromeExecutable() {
  const candidates = process.env.PLAYWRIGHT_CHROME
    ? [process.env.PLAYWRIGHT_CHROME]
    : [
        'C:/Program Files/Google/Chrome/Application/chrome.exe',
        'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
        'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
      ];
  return candidates.find((p) => p && existsSync(p));
}
import { existsSync } from 'node:fs';

if (process.argv.includes('--dom') || process.env.PERSON_SEARCH_DOM) {
  await runDomTests();
} else {
  console.log('DOM-часть пропущена (запустите с --dom).');
}
