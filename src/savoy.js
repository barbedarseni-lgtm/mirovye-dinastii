// Савойская династия: короли объединённой Италии.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/savoy/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    savoy: {
      id: 'savoy', name: 'Савойская', heading: 'Савойская династия', period: '1861–1946', country: 'Италия',
      intro: 'Четыре короля объединённой Италии — от Виктора Эммануила II до Умберто II.',
      members: [
        { id: 'savoy_victor_ii', name: 'Виктор Эммануил II', born: 1820, died: 1878, title: 'Король Сардинии; первый король Италии', reign: 'Сардиния: 1849–1861 · Италия: 1861–1878', generation: 0, nickname: 'Отец отечества',
          bio: 'Первый король единой Италии. Вместе с Кавуром и Гарибальди сыграл центральную роль в объединении страны.', children: ['savoy_umberto_i'] },
        { id: 'savoy_umberto_i', name: 'Умберто I', born: 1844, died: 1900, title: 'Король Италии', reign: 'Правление: 1878–1900', generation: 1, nickname: 'Добрый',
          bio: 'Сын Виктора Эммануила II. При нём Италия участвовала в колониальной экспансии; погиб от руки анархиста.', father: 'savoy_victor_ii', children: ['savoy_victor_iii'] },
        { id: 'savoy_victor_iii', name: 'Виктор Эммануил III', born: 1869, died: 1947, title: 'Король Италии', reign: 'Правление: 1900–1946', generation: 2,
          bio: 'Сын Умберто I. Правил во время обеих мировых войн и фашистского режима; в 1946 году отрёкся.', father: 'savoy_umberto_i', children: ['savoy_umberto_ii'] },
        { id: 'savoy_umberto_ii', name: 'Умберто II', born: 1904, died: 1983, title: 'Последний король Италии', reign: 'Правление: 9 мая — 13 июня 1946', generation: 3, nickname: 'Майский король',
          bio: 'Сын Виктора Эммануила III. Его короткое правление завершилось референдумом и установлением республики.', father: 'savoy_victor_iii' }
      ].map(member)
    }
  });
})();
