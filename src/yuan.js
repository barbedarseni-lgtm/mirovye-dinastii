// Династия Юань: императоры Китая 1271–1370 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/yuan/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    yuan: {
      id: 'yuan', name: 'Юань', heading: 'Династия Юань', period: '1271–1370', country: 'Китай · Монголия',
      intro: 'Десять императоров — от Хубилая до Тогон-Тэмура. Повторное правление Туг-Тэмура указано отдельно.',
      members: [
        { id: 'yuan_kublai', name: 'Хубилай', born: 1215, died: 1294, title: 'Основатель династии Юань', reign: 'Правление: 1271–1294', generation: 0,
          bio: 'Внук Чингисхана. Завершил завоевание Сун и основал Юань.', children: ['yuan_temur'] },
        { id: 'yuan_temur', name: 'Тэмур', born: 1265, died: 1307, title: 'Император Юань', reign: 'Правление: 1294–1307', generation: 1,
          bio: 'Внук Хубилая. Сохранил администрацию дедушки.', children: ['yuan_khaishan'] },
        { id: 'yuan_khaishan', name: 'Хайшань', born: 1281, died: 1311, title: 'Император Юань', reign: 'Правление: 1307–1311', generation: 2,
          bio: 'Потомок Тэмура. Провёл финансовые реформы.', children: ['yuan_ayurbarwada'] },
        { id: 'yuan_ayurbarwada', name: 'Аюрбарибада', born: 1285, died: 1320, title: 'Император Юань', reign: 'Правление: 1311–1320', generation: 3,
          bio: 'Неф Хайшаня. Поддерживал китайскую административную традицию.', children: ['yuan_gegeen'] },
        { id: 'yuan_gegeen', name: 'Гэгээн', born: 1302, died: 1323, title: 'Император Юань', reign: 'Правление: 1320–1323', generation: 4,
          bio: 'Сын Аюрбаривады. Был убит заговорщиками.', father: 'yuan_ayurbarwada' },
        { id: 'yuan_yesun', name: 'Йесун-Тэмур', born: 1293, died: 1328, title: 'Император Юань', reign: 'Правление: 1323–1328', generation: 4,
          bio: 'Потомок Хубилая. Пришёл к власти после убийства Гэгээн.', children: ['yuan_tugh'] },
        { id: 'yuan_tugh', name: 'Туг-Тэмур', born: 1304, died: 1332, title: 'Император Юань', reign: 'Правление: 1328–1332', generation: 5,
          bio: 'Сын Хайшаня. Боролся за престол с Кусалой и позднее вернул его.', children: [] },
        { id: 'yuan_kusala', name: 'Кусала', born: 1300, died: 1329, title: 'Император Юань', reign: 'Правление: 1329', generation: 5,
          bio: 'Старший сын Хайшаня. Правил недолго и умер при спорных обстоятельствах.' },
        { id: 'yuan_tugh_second', name: 'Туг-Тэмур (второе правление)', born: 1304, died: 1332, title: 'Император Юань', reign: 'Второе правление: 1329–1332', generation: 5,
          bio: 'Вернулся на престол после смерти Кусалы. Известен покровительством искусствам.', children: ['yuan_toghon'] },
        { id: 'yuan_toghon', name: 'Тогон-Тэмур', born: 1320, died: 1370, title: 'Последний император Юань в Китае', reign: 'Правление: 1333–1370', generation: 6,
          bio: 'Сын Кусалы. Последний монгольский император в Китае до отступления на север.', children: [] }
      ].map(member)
    }
  });
})();
