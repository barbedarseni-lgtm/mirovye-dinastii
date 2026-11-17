// Виндзоры: монархи Великобритании с принятия названия дома в 1917 году.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/windsors/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    windsors: {
      id: 'windsors', name: 'Виндзоры', heading: 'Династия Виндзоров', period: '1917 — настоящее время', country: 'Великобритания',
      intro: 'Пять монархов Виндзорского дома — от Георга V до Карла III. Устойчивых историографических прозвищ у них не подтверждено.',
      members: [
        { id: 'windsor_george_v', name: 'Георг V', born: 1865, died: 1936, title: 'Король Великобритании; император Индии', reign: 'Правление: 1910–1936 · дом Виндзоров с 1917', generation: 0,
          bio: 'Во время Первой мировой войны отказался от немецких титулов и в 1917 году переименовал Саксен-Кобург-Готский дом в Виндзорский.', children: ['windsor_edward_viii', 'windsor_george_vi'] },
        { id: 'windsor_edward_viii', name: 'Эдуард VIII', born: 1894, died: 1972, title: 'Король Великобритании; император Индии', reign: 'Правление: 20 января — 11 декабря 1936', generation: 1,
          bio: 'Старший сын Георга V. Отрёкся от престола, чтобы жениться на Уоллис Симпсон; коронации не было.', father: 'windsor_george_v' },
        { id: 'windsor_george_vi', name: 'Георг VI', born: 1895, died: 1952, title: 'Король Великобритании', reign: 'Правление: 1936–1952', generation: 1,
          bio: 'Младший сын Георга V. Занял престол после отречения брата и оставался символом сопротивления во Второй мировой войне.', father: 'windsor_george_v', children: ['windsor_elizabeth_ii'] },
        { id: 'windsor_elizabeth_ii', name: 'Елизавета II', born: 1926, died: 2022, title: 'Королева Великобритании', reign: 'Правление: 1952–2022', generation: 2,
          bio: 'Дочь Георга VI. Самый долгоправящий британский монарх; её царствование охватило более семидесяти лет.', father: 'windsor_george_vi', children: ['windsor_charles_iii'] },
        { id: 'windsor_charles_iii', name: 'Карл III', born: 1948, died: '', title: 'Король Великобритании', reign: 'Правление: с 8 сентября 2022', generation: 3,
          bio: 'Сын Елизаветы II. Наследовал престол в 2022 году после семидесяти лет в статусе наследника.', mother: 'windsor_elizabeth_ii' }
      ].map(member)
    }
  });
})();
