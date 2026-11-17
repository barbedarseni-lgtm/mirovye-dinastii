// Оранско-Нассауская династия: монархи Нидерландов с 1815 года.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/orange-nassau/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    orangeNassau: {
      id: 'orangeNassau', name: 'Оранско-Нассауская', heading: 'Оранско-Нассауская династия', period: '1815 — настоящее время', country: 'Нидерланды',
      intro: 'Семь монархов Нидерландов — от Виллема I до Виллема-Александра. Устойчивых историографических прозвищ у них не подтверждено.',
      members: [
        { id: 'orange_willem_i', name: 'Виллем I', born: 1772, died: 1843, title: 'Король Нидерландов; великий герцог Люксембурга', reign: 'Правление: 1815–1840', generation: 0,
          bio: 'Первый монарх современного Нидерландского королевства после наполеоновских войн. Отрёкся в 1840 году.', children: ['orange_willem_ii'] },
        { id: 'orange_willem_ii', name: 'Виллем II', born: 1792, died: 1849, title: 'Король Нидерландов', reign: 'Правление: 1840–1849', generation: 1,
          bio: 'Сын Виллема I. В революционном 1848 году согласился на конституционную реформу, ограничившую королевскую власть.', father: 'orange_willem_i', children: ['orange_willem_iii'] },
        { id: 'orange_willem_iii', name: 'Виллем III', born: 1817, died: 1890, title: 'Король Нидерландов', reign: 'Правление: 1849–1890', generation: 2,
          bio: 'Сын Виллема II. После его смерти личная уния Нидерландов и Люксембурга прекратилась из-за разных правил наследования.', father: 'orange_willem_ii', children: ['orange_wilhelmina'] },
        { id: 'orange_wilhelmina', name: 'Вильгельмина', born: 1880, died: 1962, title: 'Королева Нидерландов', reign: 'Правление: 1890–1948', generation: 3,
          bio: 'Дочь Виллема III. Наследовала ребёнком, руководила страной в эмиграции во время Второй мировой войны.', father: 'orange_willem_iii', children: ['orange_juliana'] },
        { id: 'orange_juliana', name: 'Юлиана', born: 1909, died: 2004, title: 'Королева Нидерландов', reign: 'Правление: 1948–1980', generation: 4,
          bio: 'Дочь Вильгельмины. Её правление охватывало послевоенное восстановление и деколонизацию Индонезии.', mother: 'orange_wilhelmina', children: ['orange_beatrix'] },
        { id: 'orange_beatrix', name: 'Беатрикс', born: 1938, died: '', title: 'Королева Нидерландов', reign: 'Правление: 1980–2013', generation: 5,
          bio: 'Дочь Юлианы. Отреклась в пользу старшего сына в 2013 году.', mother: 'orange_juliana', children: ['orange_willem_alexander'] },
        { id: 'orange_willem_alexander', name: 'Виллем-Александр', born: 1967, died: '', title: 'Король Нидерландов', reign: 'Правление: с 30 апреля 2013', generation: 6,
          bio: 'Сын Беатрикс. Первый король Нидерландов после более чем столетия правления королев.', mother: 'orange_beatrix' }
      ].map(member)
    }
  });
})();
