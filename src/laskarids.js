// Ласкариды: императоры Никейской империи 1205–1261 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/laskarids/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    laskarids: {
      id: 'laskarids', name: 'Ласкариды', heading: 'Династия Ласкаридов', period: '1205–1261', country: 'Никейская империя',
      intro: 'Четыре императора — от Феодора I до Иоанна IV. При них Никейское государство сохранило византийское наследие до возвращения Константинополя.',
      members: [
        { id: 'las_theodore_i', name: 'Феодор I', born: 'ок. 1175', died: 1221, title: 'Император Никеи', reign: 'Правление: 1205–1221', generation: 0,
          bio: 'Зять Алексея III. Организовал никейское государство после падения Константинополя.' },
        { id: 'las_john_iii', name: 'Иоанн III', born: 1192, died: 1254, title: 'Император Никеи', reign: 'Правление: 1222–1254', generation: 1,
          bio: 'Зять Феодора I. Расширил территорию и подготовил восстановление Византии.', children: ['las_theodore_ii'] },
        { id: 'las_theodore_ii', name: 'Феодор II', born: 1222, died: 1258, title: 'Император Никеи', reign: 'Правление: 1254–1258', generation: 2,
          bio: 'Сын Иоанна III. Писатель и богослов, продолжал укрепление армии.', father: 'las_john_iii', children: ['las_john_iv'] },
        { id: 'las_john_iv', name: 'Иоанн IV', born: 1250, died: 'ок. 1305', title: 'Последний император Никеи', reign: 'Правление: 1258–1261', generation: 3,
          bio: 'Сын Феодора II. Наследовал ребёнком и был отстранён Михаилом VIII Палеологом.', father: 'las_theodore_ii' }
      ].map(member)
    }
  });
})();
