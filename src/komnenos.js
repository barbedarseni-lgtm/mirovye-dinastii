// Комнины: византийские императоры 1057–1185 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/komnenos/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    komnenos: {
      id: 'komnenos', name: 'Комнины', heading: 'Династия Комнинов', period: '1057–1185', country: 'Византия',
      intro: 'Шесть императоров — от Исаака I до Андроника I. Перерыв между двумя периодами правления рода показан в датах.',
      members: [
        { id: 'kom_isaac_i', name: 'Исаак I', born: 'ок. 1007', died: 1061, title: 'Византийский император', reign: 'Правление: 1057–1059', generation: 0,
          bio: 'Первый император Комнинов. Пришёл к власти в результате военного восстания и отрёкся после болезни.' },
        { id: 'kom_alexios_i', name: 'Алексей I', born: 1048, died: 1118, title: 'Византийский император', reign: 'Правление: 1081–1118', generation: 1,
          bio: 'Племянник Исаака I. Восстановил империю после поражений и столкнулся с Первым крестовым походом.', children: ['kom_john_ii'] },
        { id: 'kom_john_ii', name: 'Иоанн II', born: 1087, died: 1143, title: 'Византийский император', reign: 'Правление: 1118–1143', generation: 2, nickname: 'Добрый',
          bio: 'Сын Алексея I. Вёл успешные войны на Балканах и в Малой Азии.', father: 'kom_alexios_i', children: ['kom_manuel_i'] },
        { id: 'kom_manuel_i', name: 'Мануил I', born: 1118, died: 1180, title: 'Византийский император', reign: 'Правление: 1143–1180', generation: 3,
          bio: 'Сын Иоанна II. Проводил активную западную политику, но потерпел поражение при Мириокефалоне.', father: 'kom_john_ii', children: ['kom_alexios_ii'] },
        { id: 'kom_alexios_ii', name: 'Алексей II', born: 1169, died: 1183, title: 'Византийский император', reign: 'Правление: 1180–1183', generation: 4,
          bio: 'Сын Мануила I. Наследовал ребёнком и был убит после захвата власти Андроником.', father: 'kom_manuel_i' },
        { id: 'kom_andronikos_i', name: 'Андроник I', born: 'ок. 1118', died: 1185, title: 'Последний византийский император Комнинов', reign: 'Правление: 1183–1185', generation: 3,
          bio: 'Двоюродный брат Мануила I. Захватил престол, но был свергнут и убит толпой.' }
      ].map(member)
    }
  });
})();
