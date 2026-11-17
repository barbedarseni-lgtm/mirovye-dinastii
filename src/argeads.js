// Аргеады: основная исторически подтверждённая линия македонских царей.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/argeads/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    argeads: {
      id: 'argeads', name: 'Аргеады', heading: 'Династия Аргеадов', period: '413–309 до н. э.', country: 'Македония',
      intro: 'Восемь царей поздней исторической линии — от Архелая до Александра IV. Легендарные и плохо документированные ранние правители не включены.',
      members: [
        { id: 'arg_archelaus', name: 'Архелай', born: 'ок. 450 до н. э.', died: '399 до н. э.', title: 'Царь Македонии', reign: 'Правление: 413–399 до н. э.', generation: 0,
          bio: 'Провёл реформы и перенёс столицу в Пеллу.' },
        { id: 'arg_amyntas_iii', name: 'Аминта III', born: 'ок. 420 до н. э.', died: '369 до н. э.', title: 'Царь Македонии', reign: 'Правление: 393–369 до н. э. · с перерывом', generation: 1,
          bio: 'Отстоял царство в борьбе с соседями; отец трёх последующих царей.', children: ['arg_alexander_ii', 'arg_perdiccas_iii', 'arg_philip_ii'] },
        { id: 'arg_alexander_ii', name: 'Александр II', born: 'ок. 395 до н. э.', died: '368 до н. э.', title: 'Царь Македонии', reign: 'Правление: 369–368 до н. э.', generation: 2,
          bio: 'Сын Аминты III. Правил недолго и был убит.', father: 'arg_amyntas_iii' },
        { id: 'arg_perdiccas_iii', name: 'Пердикка III', born: 'ок. 380 до н. э.', died: '359 до н. э.', title: 'Царь Македонии', reign: 'Правление: 365–359 до н. э.', generation: 2,
          bio: 'Сын Аминты III. Погиб в войне с иллирийцами.', father: 'arg_amyntas_iii' },
        { id: 'arg_philip_ii', name: 'Филипп II', born: '382 до н. э.', died: '336 до н. э.', title: 'Царь Македонии', reign: 'Правление: 359–336 до н. э.', generation: 2,
          bio: 'Сын Аминты III. Создал сильную армию и подчинил большую часть Греции.', father: 'arg_amyntas_iii', children: ['arg_alexander_iii', 'arg_philip_iii'] },
        { id: 'arg_alexander_iii', name: 'Александр III', born: '356 до н. э.', died: '323 до н. э.', title: 'Царь Македонии; правитель Персии', reign: 'Правление: 336–323 до н. э.', generation: 3, nickname: 'Великий',
          bio: 'Сын Филиппа II. Завоевал Персидскую державу и дошёл до Индии.', father: 'arg_philip_ii', children: ['arg_alexander_iv'] },
        { id: 'arg_philip_iii', name: 'Филипп III Арридей', born: 'ок. 359 до н. э.', died: '317 до н. э.', title: 'Царь Македонии', reign: 'Правление: 323–317 до н. э.', generation: 3, nickname: 'Арридей',
          bio: 'Сын Филиппа II. Был номинальным соправителем при регентстве.', father: 'arg_philip_ii' },
        { id: 'arg_alexander_iv', name: 'Александр IV', born: '323 до н. э.', died: '309 до н. э.', title: 'Последний царь Аргеадов', reign: 'Правление: 323–309 до н. э. · под регентством', generation: 4,
          bio: 'Сын Александра Великого. Был убит вместе с матерью по приказу Кассандра.', father: 'arg_alexander_iii' }
      ].map(member)
    }
  });
})();
