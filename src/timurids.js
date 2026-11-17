// Тимуриды: правители империи Тимура и поздние соперники.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/timurids/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    timurids: {
      id: 'timurids', name: 'Тимуриды', heading: 'Династия Тимуридов', period: '1370–1507', country: 'Средняя Азия · Иран',
      intro: 'Восемь правителей — от Тимура до Бади аз-Замана. Параллельные правления после смерти Тимура отмечены отдельно.',
      members: [
        { id: 'tim_timur', name: 'Тимур', born: 1336, died: 1405, title: 'Основатель империи', reign: '1370–1405', generation: 0, nickname: 'Хромой', bio: 'Создал обширную империю со столицей в Самарканде.', children: ['tim_shah_rukh'] },
        { id: 'tim_khalil', name: 'Халиль Султан', born: 1384, died: 1409, title: 'Правитель Самарканда', reign: '1405–1409', generation: 1, bio: 'Внук Тимура. Захватил Самарканд после смерти деда.' },
        { id: 'tim_shah_rukh', name: 'Шах Рух', born: 1377, died: 1447, title: 'Правитель империи Тимуридов', reign: '1405–1447', generation: 1, bio: 'Сын Тимура. Сделал столицей Герат.', father: 'tim_timur', children: ['tim_ulugh_beg'] },
        { id: 'tim_ulugh_beg', name: 'Улугбек', born: 1394, died: 1449, title: 'Правитель Тимуридов', reign: '1447–1449', generation: 2, bio: 'Сын Шах Руха. Астроном и математик.', father: 'tim_shah_rukh' },
        { id: 'tim_abu_said', name: 'Абу Саид', born: 1424, died: 1469, title: 'Правитель Тимуридов', reign: '1451–1469', generation: 3, bio: 'Правнук Тимура. Ненадолго объединил большую часть державы.', children: ['tim_yadgar'] },
        { id: 'tim_yadgar', name: 'Ядгар Мухаммад', born: 1452, died: 1470, title: 'Соперник за престол', reign: '1469–1470', generation: 4, bio: 'Правнук Шах Руха. Недолго удерживал Герат.', father: 'tim_abu_said' },
        { id: 'tim_husayn', name: 'Хусейн Байкара', born: 1438, died: 1506, title: 'Правитель Хорасана', reign: '1469–1506', generation: 4, bio: 'Его правление связано с расцветом Герата.', children: ['tim_badi'] },
        { id: 'tim_badi', name: 'Бади аз-Заман', born: 1468, died: 1514, title: 'Последний правитель Герата', reign: '1506–1507', generation: 5, bio: 'Сын Хусейна Байкары. Потерял Герат под ударами узбеков.', father: 'tim_husayn' }
      ].map(member)
    }
  });
})();
