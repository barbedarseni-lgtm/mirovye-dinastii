// Багратиони: правители единого Грузинского царства до разделения.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/bagrationi/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    bagrationi: {
      id: 'bagrationi', name: 'Багратиони', heading: 'Династия Багратиони', period: '1008–1490', country: 'Грузия',
      intro: 'Двадцать три правителя единого Грузинского царства — от Баграта III до Константина II. Последующие картлийские и кахетинские ветви не включены.',
      members: [
        { id: 'bag_bagrat_iii', name: 'Баграт III', born: 'ок. 960', died: 1014, title: 'Первый царь единой Грузии', reign: 'Правление: 1008–1014', generation: 0, bio: 'Объединил Абхазское и Иберийское царства.', children: ['bag_george_i'] },
        { id: 'bag_george_i', name: 'Георгий I', born: 'ок. 1002', died: 1027, title: 'Царь Грузии', reign: 'Правление: 1014–1027', generation: 1, bio: 'Сын Баграта III. Вёл войны с Византией и сельджуками.', father: 'bag_bagrat_iii', children: ['bag_bagrat_iv'] },
        { id: 'bag_bagrat_iv', name: 'Баграт IV', born: 1018, died: 1072, title: 'Царь Грузии', reign: 'Правление: 1027–1072', generation: 2, bio: 'Сын Георгия I. Укреплял страну в условиях давления сельджуков.', father: 'bag_george_i', children: ['bag_george_ii'] },
        { id: 'bag_george_ii', name: 'Георгий II', born: 'ок. 1054', died: 1112, title: 'Царь Грузии', reign: 'Правление: 1072–1089', generation: 3, bio: 'Сын Баграта IV. Отрёкся в пользу сына Давида.', father: 'bag_bagrat_iv', children: ['bag_david_iv'] },
        { id: 'bag_david_iv', name: 'Давид IV', born: 1073, died: 1125, title: 'Царь Грузии', reign: 'Правление: 1089–1125', generation: 4, nickname: 'Строитель', bio: 'Сын Георгия II. Освободил страну от сельджуков и победил в Дидгорской битве.', father: 'bag_george_ii', children: ['bag_demetrius_i'] },
        { id: 'bag_demetrius_i', name: 'Деметре I', born: 1093, died: 1156, title: 'Царь Грузии', reign: 'Правление: 1125–1154 · 1155', generation: 5, bio: 'Сын Давида IV. Продолжал укрепление царства.', father: 'bag_david_iv', children: ['bag_david_v', 'bag_george_iii'] },
        { id: 'bag_david_v', name: 'Давид V', born: 'ок. 1113', died: 1155, title: 'Царь Грузии', reign: 'Правление: 1154–1155', generation: 6, bio: 'Сын Деметре I. Был свергнут после короткого правления.', father: 'bag_demetrius_i' },
        { id: 'bag_george_iii', name: 'Георгий III', born: 'ок. 1170', died: 1184, title: 'Царь Грузии', reign: 'Правление: 1156–1184', generation: 6, bio: 'Сын Деметре I. Успешно сопротивлялся соседним державам.', father: 'bag_demetrius_i', children: ['bag_tamar'] },
        { id: 'bag_tamar', name: 'Тамара', born: 'ок. 1160', died: 1213, title: 'Царица Грузии', reign: 'Правление: 1184–1213', generation: 7, nickname: 'Великая', bio: 'Дочь Георгия III. При ней Грузия достигла наибольшего могущества.', father: 'bag_george_iii', children: ['bag_george_iv', 'bag_rusudan'] },
        { id: 'bag_george_iv', name: 'Георгий IV Лаша', born: 1191, died: 1223, title: 'Царь Грузии', reign: 'Правление: 1213–1223', generation: 8, nickname: 'Лаша', bio: 'Сын Тамары. Погиб после столкновения с хорезмийцами.', mother: 'bag_tamar' },
        { id: 'bag_rusudan', name: 'Русудан', born: 'ок. 1194', died: 1245, title: 'Царица Грузии', reign: 'Правление: 1223–1245', generation: 8, bio: 'Дочь Тамары. Правила в годы монгольского завоевания.', mother: 'bag_tamar', children: ['bag_david_vi'] },
        { id: 'bag_david_vi', name: 'Давид VI Нарин', born: 1225, died: 1293, title: 'Царь Грузии', reign: 'Правление: 1245–1293', generation: 9, bio: 'Сын Русудан. Правил при монгольской зависимости.', mother: 'bag_rusudan', children: ['bag_vakhtang_ii'] },
        { id: 'bag_vakhtang_ii', name: 'Вахтанг II', born: 1250, died: 1292, title: 'Царь Грузии', reign: 'Правление: 1289–1292', generation: 10, bio: 'Сын Давида VI. Правил восточной Грузией.', father: 'bag_david_vi', children: ['bag_david_viii'] },
        { id: 'bag_david_viii', name: 'Давид VIII', born: 1273, died: 1311, title: 'Царь Грузии', reign: 'Правление: 1293–1311', generation: 11, bio: 'Сын Вахтанга II. Вёл борьбу за восстановление единства страны.', father: 'bag_vakhtang_ii' },
        { id: 'bag_george_v', name: 'Георгий V', born: 'ок. 1286', died: 1346, title: 'Царь Грузии', reign: 'Правление: 1314–1346', generation: 11, nickname: 'Блистательный', bio: 'Восстановил силу царства и ослабил монгольскую зависимость.', children: ['bag_david_ix'] },
        { id: 'bag_david_ix', name: 'Давид IX', born: 'ок. 1313', died: 1360, title: 'Царь Грузии', reign: 'Правление: 1346–1360', generation: 12, bio: 'Сын Георгия V. Правил в годы Чёрной смерти.', father: 'bag_george_v', children: ['bag_bagrat_v'] },
        { id: 'bag_bagrat_v', name: 'Баграт V', born: 'ок. 1330', died: 1393, title: 'Царь Грузии', reign: 'Правление: 1360–1393', generation: 13, nickname: 'Великий', bio: 'Сын Давида IX. Столкнулся с нашествиями Тимура.', father: 'bag_david_ix', children: ['bag_george_vii', 'bag_constantine_i'] },
        { id: 'bag_george_vii', name: 'Георгий VII', born: 'ок. 1360', died: 1407, title: 'Царь Грузии', reign: 'Правление: 1393–1407', generation: 14, bio: 'Сын Баграта V. Продолжал войны с Тимуром.', father: 'bag_bagrat_v' },
        { id: 'bag_constantine_i', name: 'Константин I', born: 'ок. 1369', died: 1412, title: 'Царь Грузии', reign: 'Правление: 1407–1412', generation: 14, bio: 'Сын Баграта V. Пытался восстановить страну после разрушений.', father: 'bag_bagrat_v', children: ['bag_alexander_i'] },
        { id: 'bag_alexander_i', name: 'Александр I', born: 'ок. 1386', died: 1442, title: 'Царь Грузии', reign: 'Правление: 1412–1442', generation: 15, nickname: 'Великий', bio: 'Сын Константина I. Последний правитель относительно стабильной единой Грузии.', father: 'bag_constantine_i', children: ['bag_vakhtang_iv', 'bag_george_viii'] },
        { id: 'bag_vakhtang_iv', name: 'Вахтанг IV', born: 'ок. 1413', died: 1446, title: 'Царь Грузии', reign: 'Правление: 1442–1446', generation: 16, bio: 'Сын Александра I. При нём усилилась раздробленность.', father: 'bag_alexander_i' },
        { id: 'bag_george_viii', name: 'Георгий VIII', born: 1417, died: 1476, title: 'Царь Грузии', reign: 'Правление: 1446–1466', generation: 16, bio: 'Сын Александра I. Его правление отмечено распадом царства.', father: 'bag_alexander_i' },
        { id: 'bag_constantine_ii', name: 'Константин II', born: 'ок. 1447', died: 1505, title: 'Царь Грузии; затем Картли', reign: 'Грузия: 1478–1490 · Картли до 1505', generation: 16, bio: 'Последний царь формально единой Грузии перед окончательным разделением.' }
      ].map(member)
    }
  });
})();
