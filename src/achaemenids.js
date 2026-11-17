// Ахемениды: цари Персидской державы 559–330 годов до н. э.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/achaemenids/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    achaemenids: {
      id: 'achaemenids', name: 'Ахемениды', heading: 'Династия Ахеменидов', period: '559–330 до н. э.', country: 'Персия',
      intro: 'Тринадцать царей — от Кира Великого до Дария III. Краткое правление Бардии включает спор о его личности.',
      members: [
        { id: 'ach_cyrus', name: 'Кир II', born: 'ок. 600 до н. э.', died: '530 до н. э.', title: 'Основатель Персидской державы', reign: 'Правление: 559–530 до н. э.', generation: 0, nickname: 'Великий', bio: 'Объединил персов и мидян, завоевал Вавилон.', children: ['ach_cambyses', 'ach_bardiya'] },
        { id: 'ach_cambyses', name: 'Камбис II', born: 'ок. 560 до н. э.', died: '522 до н. э.', title: 'Царь Персии', reign: 'Правление: 530–522 до н. э.', generation: 1, bio: 'Сын Кира II. Завоевал Египет.', father: 'ach_cyrus' },
        { id: 'ach_bardiya', name: 'Бардия', born: 'ок. 550 до н. э.', died: '522 до н. э.', title: 'Царь Персии', reign: 'Правление: 522 до н. э.', generation: 1, nickname: 'Смердис', bio: 'Сын Кира II либо самозванец — источники расходятся.', father: 'ach_cyrus' },
        { id: 'ach_darius_i', name: 'Дарий I', born: 'ок. 550 до н. э.', died: '486 до н. э.', title: 'Царь Персии', reign: 'Правление: 522–486 до н. э.', generation: 2, nickname: 'Великий', bio: 'Реорганизовал державу и начал войны с греками.', children: ['ach_xerxes_i'] },
        { id: 'ach_xerxes_i', name: 'Ксеркс I', born: 'ок. 519 до н. э.', died: '465 до н. э.', title: 'Царь Персии', reign: 'Правление: 486–465 до н. э.', generation: 3, bio: 'Сын Дария I. Возглавил вторжение в Грецию.', father: 'ach_darius_i', children: ['ach_artaxerxes_i'] },
        { id: 'ach_artaxerxes_i', name: 'Артаксеркс I', born: 'ок. 500 до н. э.', died: '424 до н. э.', title: 'Царь Персии', reign: 'Правление: 465–424 до н. э.', generation: 4, nickname: 'Долгорукий', bio: 'Сын Ксеркса I. Его правление известно греческим и библейским источникам.', father: 'ach_xerxes_i', children: ['ach_xerxes_ii', 'ach_sogdianus', 'ach_darius_ii'] },
        { id: 'ach_xerxes_ii', name: 'Ксеркс II', born: 'ок. 445 до н. э.', died: '424 до н. э.', title: 'Царь Персии', reign: 'Правление: 424 до н. э. · 45 дней', generation: 5, bio: 'Сын Артаксеркса I. Был убит в борьбе за престол.', father: 'ach_artaxerxes_i' },
        { id: 'ach_sogdianus', name: 'Согдиан', born: 'ок. 440 до н. э.', died: '424 до н. э.', title: 'Царь Персии', reign: 'Правление: 424–423 до н. э.', generation: 5, bio: 'Сын Артаксеркса I. Недолго удерживал власть.', father: 'ach_artaxerxes_i' },
        { id: 'ach_darius_ii', name: 'Дарий II', born: 'ок. 475 до н. э.', died: '404 до н. э.', title: 'Царь Персии', reign: 'Правление: 424–404 до н. э.', generation: 5, bio: 'Сын Артаксеркса I. Правил при сильном влиянии Парисатиды.', father: 'ach_artaxerxes_i', children: ['ach_artaxerxes_ii'] },
        { id: 'ach_artaxerxes_ii', name: 'Артаксеркс II', born: 'ок. 445 до н. э.', died: '358 до н. э.', title: 'Царь Персии', reign: 'Правление: 404–358 до н. э.', generation: 6, nickname: 'Мнемон', bio: 'Сын Дария II. Победил брата Кира Младшего при Кунаксе.', father: 'ach_darius_ii', children: ['ach_artaxerxes_iii'] },
        { id: 'ach_artaxerxes_iii', name: 'Артаксеркс III', born: 'ок. 425 до н. э.', died: '338 до н. э.', title: 'Царь Персии', reign: 'Правление: 358–338 до н. э.', generation: 7, bio: 'Сын Артаксеркса II. Восстановил контроль над Египтом.', father: 'ach_artaxerxes_ii', children: ['ach_arses'] },
        { id: 'ach_arses', name: 'Арсес', born: 'ок. 360 до н. э.', died: '336 до н. э.', title: 'Царь Персии', reign: 'Правление: 338–336 до н. э.', generation: 8, bio: 'Сын Артаксеркса III. Был убит в дворцовой борьбе.', father: 'ach_artaxerxes_iii' },
        { id: 'ach_darius_iii', name: 'Дарий III', born: 'ок. 380 до н. э.', died: '330 до н. э.', title: 'Последний царь Ахеменидов', reign: 'Правление: 336–330 до н. э.', generation: 9, bio: 'Был разбит Александром Великим и убит в бегстве.' }
      ].map(member)
    }
  });
})();
