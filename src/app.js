(() => {
  'use strict';

  Object.values(window.DYNASTIES).forEach((dynasty) => {
    dynasty.members.forEach((person) => {
      const scholarship = window.NICKNAME_SCHOLARSHIP?.[person.id];
      if (!scholarship) return;
      person.nicknameNote = scholarship.note;
      person.nicknameSource = scholarship.source || '';
      person.nicknameSourceLabel = scholarship.sourceLabel || '';
      person.nicknamePrimarySource = scholarship.primary || '';
      person.nicknamePrimarySourceLabel = scholarship.primaryLabel || '';
      person.nicknamePrimarySourceNote = scholarship.primaryNote || '';
    });
  });

  const dynastyScreen = document.getElementById('dynastyScreen');
  const treeScreen = document.getElementById('treeScreen');
  const treeScroll = document.getElementById('treeScroll');
  const treeCanvas = document.getElementById('treeCanvas');
  const treeGenerations = document.getElementById('treeGenerations');
  const treeConnections = document.getElementById('treeConnections');
  const backButton = document.getElementById('backButton');
  const homeButton = document.getElementById('homeButton');
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const modal = document.getElementById('personModal');
  const modalDialog = document.getElementById('modalDialog');
  const modalClose = document.getElementById('modalClose');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const dynastyEntries = Object.values(window.DYNASTIES);
  const collectionIds = new Set(['vikings']);
  const dynastyCollections = dynastyEntries.filter((dynasty) => collectionIds.has(dynasty.id));
  const actualDynasties = dynastyEntries.filter((dynasty) => !collectionIds.has(dynasty.id));
  const yearValues = actualDynasties.flatMap((dynasty) => dynasty.members.flatMap((person) => [person.born, person.died]
    .map((value) => {
      const text = String(value ?? '');
      const match = text.match(/(?:^|[^0-9])(\d{3,4})(?![0-9])/);
      if (!match) return null;
      const year = Number(match[1]);
      return /до\s+н\.?\s*э\.?/i.test(text) ? -year : year;
    })
    .filter((year) => year != null)));

  function formatCentury(year) {
    const century = Math.floor((Math.abs(year) - 1) / 100) + 1;
    return year < 0 ? `${century} в. до н. э.` : `${century} в.`;
  }
  function updateHeroStats() {
    const minYear = Math.min(...yearValues);
    const maxYear = Math.max(...yearValues);
    document.getElementById('dynastyStat').textContent = actualDynasties.length;
    document.getElementById('figureStat').textContent = actualDynasties.reduce((sum, dynasty) => sum + dynasty.members.length, 0);
    document.getElementById('periodStat').textContent = `${formatCentury(minYear)}–${formatCentury(maxYear)}`;
    document.getElementById('heroDynastyCountText').textContent = `${actualDynasties.length} династий и отдельная подборка викингов`;
  }

  let activeDynastyCard = null;
  let currentDynastyId = 'romanovs';
  let lastFocusedElement = null;
  let drawFrame = 0;

  function updateThemeControl() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeLabel.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#292422' : '#f7f6f4';
  }

  function toggleTheme() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    if (isDark) {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = 'dark';
    }
    try {
      localStorage.setItem('dynasties-theme', isDark ? 'light' : 'dark');
    } catch (_) { /* Сайт работает и без сохранения настройки. */ }
    updateThemeControl();
    scheduleConnections();
  }

  function portraitImage(person, isModal = false) {
    const image = document.createElement('img');
    image.src = person.photo;
    image.className = 'person__photo';
    image.alt = isModal ? `Историческое изображение: ${person.name}` : '';
    image.loading = isModal ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.draggable = false;
    return image;
  }

  function personButton(person) {
    const button = document.createElement('button');
    const nicknameText = person.nickname ? `«${person.nickname}»` : 'Без прозвища';
    button.type = 'button';
    button.className = `person ${person.nickname ? 'person--nicknamed' : 'person--unnamed'}`;
    button.dataset.personId = person.id;
    button.setAttribute('aria-label', `Открыть карточку: ${person.name}, ${person.born}–${person.died}, ${nicknameText}`);
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'personModal');

    const portrait = document.createElement('span');
    portrait.className = 'person__portrait';
    portrait.setAttribute('aria-hidden', 'true');
    if (person.photo) {
      portrait.appendChild(portraitImage(person));
    } else {
      portrait.textContent = person.initials;
    }

    const name = document.createElement('span');
    name.className = 'person__name';
    name.textContent = person.name;
    const life = document.createElement('span');
    life.className = 'person__life';
    life.textContent = `${person.born}–${person.died}`;
    const nickname = document.createElement('span');
    nickname.className = `person__nickname${person.nickname ? '' : ' person__nickname--none'}`;
    nickname.textContent = nicknameText;
    const more = document.createElement('span');
    more.className = 'person__more';
    more.textContent = person.nickname ? 'Происхождение прозвища →' : 'Подробнее →';

    button.append(portrait, name, life, nickname, more);
    return button;
  }

  function renderTree(dynasty) {
    treeGenerations.replaceChildren();
    const isCollection = collectionIds.has(dynasty.id);
    treeGenerations.classList.toggle('collection-gallery', isCollection);
    if (isCollection) {
      dynasty.members.forEach((person) => treeGenerations.appendChild(personButton(person)));
      return;
    }
    const generations = new Map();
    dynasty.members.forEach((person) => {
      if (!generations.has(person.generation)) generations.set(person.generation, []);
      generations.get(person.generation).push(person);
    });

    [...generations.keys()].sort((a, b) => a - b).forEach((generationNumber) => {
      const section = document.createElement('section');
      section.className = 'generation';
      section.setAttribute('aria-label', `Поколение ${generationNumber + 1}`);
      const label = document.createElement('h2');
      label.className = 'generation__label';
      label.textContent = `${generationNumber + 1} поколение`;
      const members = document.createElement('div');
      members.className = 'generation__members';
      generations.get(generationNumber).forEach((person) => members.appendChild(personButton(person)));
      section.append(label, members);
      treeGenerations.appendChild(section);
    });
  }

  function drawConnections() {
    drawFrame = 0;
    if (treeScreen.hidden) return;
    const dynasty = window.DYNASTIES[currentDynastyId];
    if (!dynasty) return;
    if (collectionIds.has(dynasty.id)) {
      treeConnections.replaceChildren();
      return;
    }
    const memberMap = new Map(dynasty.members.map((person) => [person.id, person]));
    const canvasRect = treeCanvas.getBoundingClientRect();
    // Абсолютный SVG сам входит в scroll-размеры древа и не должен влиять на их расчёт.
    const width = treeCanvas.offsetWidth;
    const height = treeCanvas.offsetHeight;
    treeConnections.setAttribute('width', width);
    treeConnections.setAttribute('height', height);
    treeConnections.setAttribute('viewBox', `0 0 ${width} ${height}`);
    treeConnections.replaceChildren();

    dynasty.members.forEach((person) => {
      ['father', 'mother'].forEach((parentKey) => {
        const parentId = person[parentKey];
        if (!parentId || !memberMap.has(parentId)) return;
        const parentNode = treeGenerations.querySelector(`[data-person-id="${parentId}"]`);
        const childNode = treeGenerations.querySelector(`[data-person-id="${person.id}"]`);
        if (!parentNode || !childNode) return;

        const parentRect = parentNode.getBoundingClientRect();
        const childRect = childNode.getBoundingClientRect();
        const startX = parentRect.left + parentRect.width / 2 - canvasRect.left;
        const startY = parentRect.bottom - canvasRect.top;
        const endX = childRect.left + childRect.width / 2 - canvasRect.left;
        const endY = childRect.top - canvasRect.top;
        const middleY = startY + Math.max(12, (endY - startY) / 2);

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${startX} ${startY} V ${middleY} H ${endX} V ${endY}`);
        treeConnections.appendChild(path);
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', endX);
        dot.setAttribute('cy', endY - 2);
        dot.setAttribute('r', 2.5);
        treeConnections.appendChild(dot);
      });
    });
  }

  function scheduleConnections() {
    if (drawFrame) cancelAnimationFrame(drawFrame);
    drawFrame = requestAnimationFrame(() => requestAnimationFrame(drawConnections));
  }

  function showTree(dynastyId, sourceCard) {
    const dynasty = window.DYNASTIES[dynastyId];
    if (!dynasty) return;
    currentDynastyId = dynastyId;
    activeDynastyCard = sourceCard || document.querySelector(`[data-dynasty="${dynastyId}"]`);
    renderTree(dynasty);
    document.getElementById('treeTitle').textContent = dynasty.heading || `Дом ${dynasty.name}`;
    const isCollection = dynasty.id === 'vikings';
    treeScroll.classList.toggle('tree-scroll--collection', isCollection);
    treeCanvas.classList.toggle('tree-canvas--collection', isCollection);
    document.querySelector('.tree-legend').hidden = isCollection;
    document.querySelector('.tree-heading .kicker').textContent = isCollection ? 'Галерея прозвищ' : 'Родословное древо';
    backButton.setAttribute('aria-label', isCollection ? 'Назад к каталогу' : 'Назад к династиям');
    backButton.lastChild.textContent = isCollection ? 'Назад к каталогу' : 'Назад к династиям';
    document.querySelector('.tree-intro__hint').hidden = isCollection;
    document.getElementById('treeScroll').setAttribute('aria-label', isCollection
      ? 'Подборка: Викинги. Группы персон не обозначают родственные связи.'
      : `Древо: ${dynasty.name}. На небольшом экране прокручивайте древо по горизонтали.`);
    const meta = document.getElementById('treeMeta');
    meta.replaceChildren();
    [dynasty.period, dynasty.country, `${dynasty.members.length} фигур`].forEach((text) => {
      const item = document.createElement('span');
      item.textContent = text;
      meta.appendChild(item);
    });
    document.getElementById('treeIntroText').textContent = dynasty.intro;
    dynastyScreen.hidden = true;
    treeScreen.hidden = false;
    treeScroll.scrollLeft = Math.max(0, (treeCanvas.offsetWidth - treeScroll.clientWidth) / 2);
    document.title = `${dynasty.name} — Мировые династии правления`;
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    backButton.focus({ preventScroll: true });
    scheduleConnections();
  }

  function showDynasties(returnFocus = true) {
    treeScreen.hidden = true;
    dynastyScreen.hidden = false;
    document.title = 'Мировые династии правления';
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    if (returnFocus && activeDynastyCard) activeDynastyCard.focus({ preventScroll: true });
  }

  function openPerson(personId, focusElement = null) {
    const dynasty = window.DYNASTIES[currentDynastyId];
    const person = dynasty?.members.find((item) => item.id === personId);
    if (!person) return;
    lastFocusedElement = focusElement || document.activeElement;

    const modalPortrait = document.getElementById('modalPortrait');
    modalPortrait.replaceChildren();
    if (person.photo) {
      modalPortrait.appendChild(portraitImage(person, true));
    } else {
      modalPortrait.textContent = person.initials;
    }
    document.getElementById('modalReign').textContent = person.reign;
    document.getElementById('modalName').textContent = person.name;
    document.getElementById('modalLife').textContent = `Годы жизни: ${person.born}–${person.died}`;
    document.getElementById('modalTitle').textContent = person.title;
    document.getElementById('modalBio').textContent = person.bio;
    document.getElementById('modalNickname').textContent = person.nickname || 'Не подтверждено';
    document.getElementById('modalNicknameLabel').textContent = person.nickname
      ? 'Устоявшееся прозвище'
      : 'Сведения о прозвище';
    document.getElementById('modalNicknameNote').textContent = person.nickname
      ? person.nicknameNote
      : 'В проверенных источниках не удалось подтвердить устоявшееся историческое прозвище. Это не означает, что его никогда не было.';

    function fillSource(elementId, url, label) {
      const link = document.getElementById(elementId);
      link.hidden = !url;
      link.removeAttribute('href');
      link.textContent = '';
      link.removeAttribute('aria-label');
      if (!url) return;
      link.href = url;
      link.textContent = `${label} ↗`;
      link.setAttribute('aria-label', `${label}. Откроется в новой вкладке`);
    }

    const primaryBlock = document.getElementById('modalPrimaryBlock');
    primaryBlock.hidden = !person.nicknamePrimarySource;
    fillSource('modalPrimarySource', person.nicknamePrimarySource, person.nicknamePrimarySourceLabel);
    document.getElementById('modalPrimarySourceNote').textContent = person.nicknamePrimarySourceNote || '';

    const hasResearch = person.nicknameSource && person.nicknameSource !== person.nicknamePrimarySource;
    document.getElementById('modalResearchBlock').hidden = !hasResearch;
    fillSource('modalNicknameSource', hasResearch ? person.nicknameSource : '', person.nicknameSourceLabel);

    document.getElementById('modalPhotoMeta').textContent = person.photo
      ? `${person.photoKind ? `${person.photoKind}. ` : ''}${person.photoArtist}. ${person.photoLicense}.`
      : '';
    fillSource('modalPhotoSource', person.photoSource, 'Источник изображения и лицензия');

    modal.hidden = false;
    document.body.classList.add('modal-open');
    modalDialog.scrollTop = 0;
    modalClose.focus();
  }

  function closePerson() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function normalizeCatalogText(value) {
    // NBSP и другие юникод-пробелы приводим к обычному пробелу, ё → е,
    // диакритика снимается, регистр — нижний.
    return String(value || '')
      .replace(/\s/g, ' ')
      .toLocaleLowerCase('ru')
      .replaceAll('ё', 'е')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function setupCatalog() {
    const catalog = document.getElementById('dynastyCatalog');
    const search = document.getElementById('dynastySearch');
    const clearSearch = document.getElementById('clearDynastySearch');
    const searchStatus = document.getElementById('catalogSearchStatus');
    const alphabet = document.getElementById('alphabetIndex');
    if (!catalog || !search || !clearSearch || !alphabet) return;

    const sourceCards = [...catalog.querySelectorAll(':scope > [data-dynasty]')];
    const catalogLabel = catalog.querySelector(':scope > .dynasty-grid__label');
     const futureCard = catalog.querySelector(':scope > .dynasty-card--future');
    const countries = new Map();
    const countryOrder = new Intl.Collator('ru', { sensitivity: 'base' });

    sourceCards.forEach((card) => {
      const names = (card.dataset.countries || 'Прочие').split('·').map((item) => item.trim()).filter(Boolean);
      const title = card.querySelector('.dynasty-card__title')?.textContent.trim() || '';
      const countryNames = names.length ? names : ['Прочие'];
      // Индекс поиска: только название династии и связанные страны (без описаний/дат/имён).
      const searchFields = [normalizeCatalogText(title), ...countryNames.map(normalizeCatalogText)];
      countryNames.forEach((country) => {
        if (!countries.has(country)) countries.set(country, []);
        countries.get(country).push({ card, title, id: card.dataset.dynasty, searchFields });
      });
    });

    catalog.replaceChildren();
    if (catalogLabel) catalog.append(catalogLabel);
    const sections = new Map();
    [...countries.keys()].sort(countryOrder.compare).forEach((country, index) => {
      const slug = `country-${index}`;
      const section = document.createElement('section');
      section.className = 'country-section';
      section.dataset.country = country;
      section.id = slug;
      const heading = document.createElement('h3');
      const toggle = document.createElement('button');
      toggle.className = 'country-section__toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', `${slug}-content`);
      toggle.innerHTML = `<span>${country}</span><span class="country-section__count"></span><span class="country-section__chevron" aria-hidden="true">⌄</span>`;
      heading.appendChild(toggle);
      const content = document.createElement('div');
      content.className = 'country-section__content';
      content.id = `${slug}-content`;
      content.hidden = true;
      const grid = document.createElement('div');
      grid.className = 'country-section__grid';
      content.appendChild(grid);
      section.append(heading, content);
      catalog.appendChild(section);
      sections.set(country, { section, toggle, content, grid, records: countries.get(country).sort((a, b) => countryOrder.compare(a.title, b.title)) });
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        content.hidden = expanded;
      });
    });

    if (futureCard) catalog.appendChild(futureCard);

    let queryActive = false;
    const alphabetCollator = new Intl.Collator('ru', { sensitivity: 'base' });

    function rebuildAlphabet(letters) {
      alphabet.replaceChildren();
      [...letters].sort(alphabetCollator.compare).forEach((letter) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.letter = letter;
        button.textContent = letter;
        button.setAttribute('aria-label', `Перейти к династиям на «${letter}»`);
        button.addEventListener('click', () => {
          const first = [...sections.values()]
            .flatMap(({ grid }) => [...grid.querySelectorAll('.dynasty-card')])
            .find((card) => normalizeCatalogText(card.querySelector('.dynasty-card__title')?.textContent).charAt(0).toUpperCase() === letter);
          first?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
          first?.focus({ preventScroll: true });
        });
        alphabet.appendChild(button);
      });
    }

    function renderCatalog() {
      const query = normalizeCatalogText(search.value.trim());
      const wasQueryActive = queryActive;
      queryActive = Boolean(query);
      document.querySelector('.collection-callout').hidden = queryActive || Boolean(document.getElementById('personSearch')?.value.trim());
      const uniqueMatches = new Set();
      const visibleLetters = new Set();
      // Совпадение с полем (название или страна): короткий запрос — по началу,
      // длинный — подстрокой. Короткие запросы не попадают в середину («ро»≠Каролинги).
      const fieldMatches = (field, q) => (q.length < 3 ? field.startsWith(q) : field.includes(q));
      // Совпадает ли страна секции с запросом (тогда показываем все её династии).
      const countryMatchesQuery = (country) => query && fieldMatches(normalizeCatalogText(country), query);
      const countryEntries = [...sections.values()];
      countryEntries.forEach(({ section, toggle, content, grid, records }) => {
        grid.replaceChildren();
        const country = section.dataset.country;
        const matches = records.filter(({ title, searchFields, id }) => {
           if (!query) return true;
          const nameField = normalizeCatalogText(title);
          const nameHit = fieldMatches(nameField, query);
          // Страна учитывается только если запрос совпал с названием этой страны (а не с чужой),
          // иначе мультистрановые династии протекали бы в посторонние секции.
          const countryHit = countryMatchesQuery(country) && searchFields.some((field) => field.includes(query));
          return nameHit || countryHit;
        });
        matches.forEach(({ card, title, id }) => {
          grid.appendChild(card.cloneNode(true));
          uniqueMatches.add(id);
          visibleLetters.add(normalizeCatalogText(title).charAt(0).toUpperCase());
        });
        section.hidden = matches.length === 0;
        section.querySelector('.country-section__count').textContent = `${matches.length}`;
        if (query) {
          // Во время активного поиска все секции с результатами раскрыты.
          toggle.setAttribute('aria-expanded', String(matches.length > 0));
          content.hidden = matches.length === 0;
        } else if (wasQueryActive) {
          // Переход от непустого запроса к пустому: детерминированный сброс —
          // все секции закрыты (ручное раскрытие при пустом поиске не трогаем,
          // потому что при пустом неактивном поиске состояние не сбрасывается).
          toggle.setAttribute('aria-expanded', 'false');
          content.hidden = true;
        }
      });
      clearSearch.hidden = !search.value;
      if (searchStatus) searchStatus.textContent = query
        ? (uniqueMatches.size ? `Найдено династий: ${uniqueMatches.size}` : 'Ничего не найдено. Попробуйте другое название или страну.')
        : `Династий в каталоге: ${sourceCards.length}`;
      // Указатель виден только при активном поиске с результатами.
      const showAlphabet = queryActive && uniqueMatches.size > 0;
      alphabet.hidden = !showAlphabet;
      if (showAlphabet) rebuildAlphabet(visibleLetters);
    }

    search.addEventListener('input', renderCatalog);
    clearSearch.addEventListener('click', () => { search.value = ''; renderCatalog(); search.focus(); });
    renderCatalog();

    // Поиск по правителям
    const personSearch = document.getElementById('personSearch');
    const clearPersonSearch = document.getElementById('clearPersonSearch');
    const personSearchResults = document.getElementById('personSearchResults');
    const personSearchStatus = document.getElementById('personSearchStatus');

    if (personSearch && clearPersonSearch && personSearchResults && personSearchStatus) {
      let currentFocusIndex = -1;
      const MAX_PERSON_RESULTS = 8;
      const personCollator = new Intl.Collator('ru', { sensitivity: 'base' });

      // «Николай 2» → «николай ii»: в данных порядковые — римскими цифрами,
      // а нормализованный текст всегда в нижнем регистре.
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

      // Ранг релевантности совпадения (чем меньше, тем выше):
      // 1 — точное совпадение полного имени или прозвища;
      // 2 — имя/прозвище начинается с запроса;
      // 3 — начало отдельного слова (имя, фамилия, римская цифра);
      // 4 — совпадение внутри слова (только для запросов длиной 3+ букв).
      // Многословный запрос («иван грозный», «николай 2») разбивается на слова:
      // каждое слово должно совпасть с одним из полей (имя или прозвище),
      // ранг — лучший из частичных рангов. Однословный работает как раньше.
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

      personSearch.addEventListener('input', () => {
        clearPersonSearch.hidden = !personSearch.value;
        document.querySelector('.collection-callout').hidden = Boolean(personSearch.value.trim() || search.value.trim());
        const query = normalizeCatalogText(personSearch.value.trim());
        if (!query) {
          personSearchResults.hidden = true;
          personSearch.setAttribute('aria-expanded', 'false');
          personSearchStatus.textContent = '';
          return;
        }

        // Собираем все совпадения с рейтингом
        const matches = [];
        const seenPersons = new Set();
        for (const dynasty of actualDynasties) {
          for (const person of dynasty.members) {
            // Дубликат — это одно и то же лицо в нескольких династиях
            // (или двойная вставка человека в древо). В пределах одной династии
            // полные тёзки с разными прозвищами остаются отдельными строками.
            const personKey = `${person.id}·${dynasty.id}`;
            if (seenPersons.has(personKey)) continue;
            seenPersons.add(personKey);
            const nameNorm = normalizeCatalogText(person.name);
            const nicknameNorm = person.nickname ? normalizeCatalogText(person.nickname) : '';
            const rank = personMatchRank(person, person.nickname, query);
            if (rank != null) {
              matches.push({ person, dynasty, type: rank === 1 ? 'exact' : rank === 2 ? 'starts' : rank === 3 ? 'word-start' : 'contains', rank });
            }
          }
        }

        // Сортировка: сначала по рангу, затем по алфавиту/порядку появления
        matches.sort((a, b) => {
          if (a.rank !== b.rank) return a.rank - b.rank;
          return personCollator.compare(a.person.name, b.person.name) || personCollator.compare(a.dynasty.name, b.dynasty.name);
        });

        // Ограничиваем список
        const limitedMatches = matches.slice(0, MAX_PERSON_RESULTS);

        if (limitedMatches.length === 0) {
          personSearchResults.hidden = true;
          personSearch.setAttribute('aria-expanded', 'false');
          personSearchStatus.textContent = 'Ничего не найдено';
          return;
        }

        // Создаём варианты
        personSearchResults.replaceChildren();
        limitedMatches.forEach(({ person, dynasty, type }, index) => {
          const option = document.createElement('div');
          option.className = 'person-search__option';
          option.setAttribute('role', 'option');
          option.setAttribute('aria-selected', 'false');
          option.dataset.index = index;
          const displayName = limitedMatches[index].type === 'exact' ? `${person.name} (${person.nickname ? `«${person.nickname}»` : 'Нет прозвища'})` : limitedMatches[index].type === 'starts' ? (person.nickname ? `${person.name} «${person.nickname}»` : person.name) : person.name;
          const metaText = person.reign || `${person.born}–${person.died}`;
          option.innerHTML = `
            <span class="person-search__option__name">${displayName}</span>
            <span class="person-search__option__meta">${dynasty.name} (${metaText})</span>
          `;
          option.addEventListener('click', () => {
            currentFocusIndex = -1;
            personSearchResults.hidden = true;
            personSearch.setAttribute('aria-expanded', 'false');
            personSearchResults.setAttribute('aria-expanded', 'false');
            showTree(dynasty.id);
            // Фокус при закрытии карточки вернётся на кнопку человека в древе,
            // а не на скрытый пункт выдачи поиска.
            const personNode = treeGenerations.querySelector(`[data-person-id="${person.id}"]`);
            openPerson(person.id, personNode);
          });
          personSearchResults.appendChild(option);
        });

        personSearchResults.hidden = false;
        personSearchResults.setAttribute('aria-expanded', 'true');
        personSearch.setAttribute('aria-expanded', 'true');
        personSearchStatus.textContent = matches.length > limitedMatches.length
          ? `Показано ${limitedMatches.length} из ${matches.length}`
          : `Найдено: ${matches.length}`;
        currentFocusIndex = -1;
      });

      // Клавиатурная навигация
      personSearch.addEventListener('keydown', (event) => {
        if (personSearchResults.hidden) return;

        const options = [...personSearchResults.querySelectorAll('.person-search__option')];
        if (event.key === 'Escape') {
          personSearchResults.hidden = true;
          personSearch.setAttribute('aria-expanded', 'false');
          event.preventDefault();
          return;
        }
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          currentFocusIndex = Math.min(currentFocusIndex + 1, options.length - 1);
          updateFocus(options);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          currentFocusIndex = Math.max(currentFocusIndex - 1, 0);
          updateFocus(options);
        } else if (event.key === 'Enter' && currentFocusIndex >= 0) {
          event.preventDefault();
          options[currentFocusIndex].click();
        }
      });

      function updateFocus(options) {
        options.forEach((opt, i) => {
          opt.setAttribute('aria-selected', String(i === currentFocusIndex));
          if (i === currentFocusIndex) {
            opt.scrollIntoView({ block: 'nearest' });
          }
        });
      }

      clearPersonSearch.addEventListener('click', () => {
        personSearch.value = '';
        clearPersonSearch.hidden = true;
        personSearchResults.hidden = true;
        personSearch.setAttribute('aria-expanded', 'false');
        personSearchStatus.textContent = '';
        document.querySelector('.collection-callout').hidden = Boolean(search.value.trim());
        personSearch.focus();
      });
    }
  }

    updateHeroStats();
    setupCatalog();
  document.addEventListener('click', (event) => {
    const card = event.target.closest('[data-dynasty]');
    if (card && card.dataset.dynasty) showTree(card.dataset.dynasty, card);
  });
  backButton.addEventListener('click', () => showDynasties());
  homeButton.addEventListener('click', () => showDynasties(false));
  themeToggle.addEventListener('click', toggleTheme);
  treeGenerations.addEventListener('click', (event) => {
    const node = event.target.closest('[data-person-id]');
    if (node) openPerson(node.dataset.personId);
  });
  treeGenerations.addEventListener('load', scheduleConnections, true);
  modalClose.addEventListener('click', closePerson);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closePerson();
  });
  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closePerson();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...modalDialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
      .filter((element) => !element.hidden && element.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !modalDialog.contains(document.activeElement))) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
  window.addEventListener('resize', scheduleConnections, { passive: true });
  if ('ResizeObserver' in window) {
    new ResizeObserver(scheduleConnections).observe(treeScroll);
  }

  updateThemeControl();
})();
