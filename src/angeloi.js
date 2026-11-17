// Ангелы: византийские императоры 1185–1204 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/angeloi/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    angeloi: {
      id: 'angeloi', name: 'Ангелы', heading: 'Династия Ангелов', period: '1185–1204', country: 'Византия',
      intro: 'Три императора — Исаак II, Алексей III и Алексей IV. Их правление завершилось падением Константинополя во время Четвёртого крестового похода.',
      members: [
        { id: 'ang_isaac_ii', name: 'Исаак II', born: 1156, died: 1204, title: 'Византийский император', reign: 'Правление: 1185–1195 · 1203–1204', generation: 0,
          bio: 'Сверг Андроника I. Позднее был ослеплён братом и ненадолго возвращён на престол крестоносцами.', children: ['ang_alexios_iv'] },
        { id: 'ang_alexios_iii', name: 'Алексей III', born: 'ок. 1153', died: 1211, title: 'Византийский император', reign: 'Правление: 1195–1203', generation: 0,
          bio: 'Брат Исаака II. Сверг его, но бежал из столицы при приближении крестоносцев.' },
        { id: 'ang_alexios_iv', name: 'Алексей IV', born: 'ок. 1182', died: 1204, title: 'Византийский император', reign: 'Правление: 1203–1204 · вместе с отцом', generation: 1,
          bio: 'Сын Исаака II. Обратился за помощью к крестоносцам, но был свергнут и убит.', father: 'ang_isaac_ii' }
      ].map(member)
    }
  });
})();
