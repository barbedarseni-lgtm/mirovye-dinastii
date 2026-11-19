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
    const meta = document.getElementById('treeMeta');
    meta.replaceChildren();
    [dynasty.period, dynasty.country, `${dynasty.members.length} фигур`].forEach((text) => {
      const item = document.createElement('span');
      item.textContent = text;
      meta.appendChild(item);
    });
    document.getElementById('treeIntroText').textContent = dynasty.intro;
    treeScroll.setAttribute('aria-label', `Древо: ${dynasty.name}. На небольшом экране прокручивайте древо по горизонтали.`);
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

  function openPerson(personId) {
    const dynasty = window.DYNASTIES[currentDynastyId];
    const person = dynasty?.members.find((item) => item.id === personId);
    if (!person) return;
    lastFocusedElement = document.activeElement;

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
    return String(value || '').toLocaleLowerCase('ru').replaceAll('ё', 'е').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function setupCatalog() {
    const catalog = document.getElementById('dynastyCatalog');
    const search = document.getElementById('dynastySearch');
    const clearSearch = document.getElementById('clearDynastySearch');
    const searchStatus = document.getElementById('catalogSearchStatus');
    const alphabet = document.getElementById('alphabetIndex');
    if (!catalog || !search || !clearSearch || !alphabet) return;

    const sourceCards = [...catalog.querySelectorAll(':scope > [data-dynasty]')];
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
        const matches = records.filter(({ title, searchFields }) => {
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
  }

  setupCatalog();
  document.addEventListener('click', (event) => {
    const card = event.target.closest('[data-dynasty]');
    if (card && card.closest('#dynastyCatalog')) showTree(card.dataset.dynasty, card);
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
