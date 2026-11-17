// Неманичи: правители Сербии 1166–1371 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/nemanjic/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    nemanjic: {
      id: 'nemanjic', name: 'Неманичи', heading: 'Династия Неманичей', period: '1166–1371', country: 'Сербия',
      intro: 'Одиннадцать правителей сербской линии — от Стефана Немании до Уроша V.',
      members: [
        { id: 'nem_nemanja', name: 'Стефан Неманя', born: 'ок. 1113', died: 1199, title: 'Великий жупан Сербии', reign: 'Правление: 1166–1196', generation: 0,
          bio: 'Основатель династии. Объединил сербские земли и отрёкся в пользу сына Стефана.', children: ['nem_stefan'] },
        { id: 'nem_stefan', name: 'Стефан', born: 'ок. 1165', died: 1228, title: 'Король Сербии', reign: 'Жупан: 1196–1217 · король: 1217–1228', generation: 1, nickname: 'Первенчанный',
          bio: 'Сын Немании. Получил королевскую корону и добился автокефалии сербской церкви.', father: 'nem_nemanja', children: ['nem_radoslav', 'nem_vladislav', 'nem_uros_i'] },
        { id: 'nem_radoslav', name: 'Радослав', born: 'ок. 1192', died: 'после 1235', title: 'Король Сербии', reign: 'Правление: 1228–1234', generation: 2,
          bio: 'Сын Стефана Первенчанного. Потерял поддержку знати и был отстранён от власти.', father: 'nem_stefan' },
        { id: 'nem_vladislav', name: 'Владислав', born: 'ок. 1198', died: 'после 1267', title: 'Король Сербии', reign: 'Правление: 1234–1243', generation: 2,
          bio: 'Сын Стефана Первенчанного. Его правление завершилось монгольским вторжением и передачей власти брату.', father: 'nem_stefan' },
        { id: 'nem_uros_i', name: 'Урош I', born: 'ок. 1223', died: 1277, title: 'Король Сербии', reign: 'Правление: 1243–1276', generation: 2, nickname: 'Великий',
          bio: 'Сын Стефана Первенчанного. При нём развивались рудники и укреплялось государство.', father: 'nem_stefan', children: ['nem_dragutin', 'nem_milutin'] },
        { id: 'nem_dragutin', name: 'Драгутин', born: 'ок. 1253', died: 1316, title: 'Король Сербии; позднее Срема', reign: 'Сербия: 1276–1282', generation: 3,
          bio: 'Старший сын Уроша I. После падения с коня передал престол брату Милутину.', father: 'nem_uros_i' },
        { id: 'nem_milutin', name: 'Милутин', born: 'ок. 1253', died: 1321, title: 'Король Сербии', reign: 'Правление: 1282–1321', generation: 3,
          bio: 'Сын Уроша I. Расширил территорию на юг за счёт Византии и строил церкви.', father: 'nem_uros_i', children: ['nem_constantine', 'nem_decanski'] },
        { id: 'nem_constantine', name: 'Константин', born: 'ок. 1282', died: 1322, title: 'Соперник за сербский престол', reign: 'Правление: 1321–1322', generation: 4,
          bio: 'Сын Милутина. Боролся за власть со сводным братом Стефаном Дечанским и погиб.', father: 'nem_milutin' },
        { id: 'nem_decanski', name: 'Стефан Дечанский', born: 'ок. 1276', died: 1331, title: 'Король Сербии', reign: 'Правление: 1321–1331', generation: 4,
          bio: 'Сын Милутин. Победил болгар при Велбужде и основал монастырь Высокие Дечаны.', father: 'nem_milutin', children: ['nem_dusan'] },
        { id: 'nem_dusan', name: 'Стефан Душан', born: 1308, died: 1355, title: 'Король и император Сербии', reign: 'Король: 1331–1346 · император: 1346–1355', generation: 5, nickname: 'Могучий',
          bio: 'Сын Стефана Дечанского. Создал наиболее обширное сербское государство и издал законник.', father: 'nem_decanski', children: ['nem_uros_v'] },
        { id: 'nem_uros_v', name: 'Урош V', born: 1337, died: 1371, title: 'Последний император Неманичей', reign: 'Правление: 1355–1371', generation: 6, nickname: 'Слабый',
          bio: 'Сын Душана. Наследовал ребёнком; после его смерти империя окончательно распалась.', father: 'nem_dusan' }
      ].map(member)
    }
  });
})();
