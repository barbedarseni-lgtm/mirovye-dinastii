// Династия Сун: императоры Северной и Южной Сун.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/song/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    song: {
      id: 'song', name: 'Сун', heading: 'Династия Сун', period: '960–1279', country: 'Китай',
      intro: 'Восемнадцать императоров — от Тайцзу до Вэйбина. Северная и Южная Сун указаны в датах правления.',
      members: [
        { id: 'song_taizu', name: 'Тайцзу', born: 927, died: 976, title: 'Основатель Сун', reign: 'Правление: 960–976', generation: 0, bio: 'Основал династию и объединил большую часть Китая.', children: ['song_taizong'] },
        { id: 'song_taizong', name: 'Тайцзун', born: 939, died: 997, title: 'Император Сун', reign: 'Правление: 976–997', generation: 1, bio: 'Брат Тайцзу. Укрепил центральную администрацию.', children: ['song_zhenzong'] },
        { id: 'song_zhenzong', name: 'Чжэньцзун', born: 968, died: 1022, title: 'Император Сун', reign: 'Правление: 997–1022', generation: 2, bio: 'Сын Тайцзуна. Заключил Шаньюаньский мир с Ляо.', father: 'song_taizong', children: ['song_renzong'] },
        { id: 'song_renzong', name: 'Жэньцзун', born: 1010, died: 1063, title: 'Император Сун', reign: 'Правление: 1022–1063', generation: 3, bio: 'Сын Чжэньцзуна. Его долгое правление отмечено культурным расцветом.', father: 'song_zhenzong' },
        { id: 'song_yingzong', name: 'Инцзун', born: 1032, died: 1067, title: 'Император Сун', reign: 'Правление: 1063–1067', generation: 4, bio: 'Приёмный сын Жэньцзуна. Правил недолго.', children: ['song_shenzong'] },
        { id: 'song_shenzong', name: 'Шэньцзун', born: 1048, died: 1085, title: 'Император Сун', reign: 'Правление: 1067–1085', generation: 5, bio: 'Сын Инцзуна. Поддержал реформы Ван Аньши.', father: 'song_yingzong', children: ['song_zhezong'] },
        { id: 'song_zhezong', name: 'Чжэцзун', born: 1077, died: 1100, title: 'Император Сун', reign: 'Правление: 1085–1100', generation: 6, bio: 'Сын Шэньцзуна. Наследовал ребёнком.', father: 'song_shenzong' },
        { id: 'song_huizong', name: 'Хуэйцзун', born: 1082, died: 1135, title: 'Император Сун', reign: 'Правление: 1100–1126', generation: 6, bio: 'Брат Чжэцзуна. Художник и каллиграф; был взят в плен.', children: ['song_qinzong'] },
        { id: 'song_qinzong', name: 'Циньцзун', born: 1100, died: 1161, title: 'Император Сун', reign: 'Правление: 1126–1127', generation: 7, bio: 'Сын Хуэйцзуна. Капитулировал перед Цзинь и попал в плен.', father: 'song_huizong' },
        { id: 'song_gaozong', name: 'Гаоцзун', born: 1107, died: 1187, title: 'Основатель Южной Сун', reign: 'Правление: 1127–1162', generation: 7, bio: 'Сын Хуэйцзуна. Восстановил династию на юге.', children: ['song_xiaozong'] },
        { id: 'song_xiaozong', name: 'Сяоцзун', born: 1127, died: 1194, title: 'Император Южной Сун', reign: 'Правление: 1162–1189', generation: 8, bio: 'Приёмный сын Гаоцзуна. Стремился вернуть север.', father: 'song_gaozong', children: ['song_guangzong'] },
        { id: 'song_guangzong', name: 'Гуанцзун', born: 1147, died: 1200, title: 'Император Южной Сун', reign: 'Правление: 1189–1194', generation: 9, bio: 'Сын Сяоцзуна. Отрёкся в пользу сына.', father: 'song_xiaozong', children: ['song_ningzong'] },
        { id: 'song_ningzong', name: 'Нинцзун', born: 1168, died: 1224, title: 'Император Южной Сун', reign: 'Правление: 1194–1224', generation: 10, bio: 'Сын Гуанцзуна. Вёл войны с Цзинь.', father: 'song_guangzong', children: ['song_lizong'] },
        { id: 'song_lizong', name: 'Лицзун', born: 1205, died: 1264, title: 'Император Южной Сун', reign: 'Правление: 1224–1264', generation: 11, bio: 'Потомок Тайцзуна. Его правление совпало с усилением монголов.', children: ['song_duzong'] },
        { id: 'song_duzong', name: 'Дуцзун', born: 1240, died: 1274, title: 'Император Южной Сун', reign: 'Правление: 1264–1274', generation: 12, bio: 'Племянник Лицзуна. Правил перед монгольским завоеванием.', children: ['song_gongdi'] },
        { id: 'song_gongdi', name: 'Гун-ди', born: 1271, died: 1323, title: 'Император Южной Сун', reign: 'Правление: 1274–1276', generation: 13, bio: 'Сын Дуцзуна. Капитулировал перед монголами.', father: 'song_duzong' },
        { id: 'song_duanzong', name: 'Дуаньцзун', born: 1269, died: 1278, title: 'Император Южной Сун', reign: 'Правление: 1276–1278', generation: 13, bio: 'Брат Гун-ди. Умер в бегстве от монголов.', children: [] },
        { id: 'song_weibing', name: 'Вэйбин', born: 1272, died: 1279, title: 'Последний император Сун', reign: 'Правление: 1278–1279', generation: 13, bio: 'Младший брат Дуаньцзуна. Погиб в морском сражении при Ямэнь.', children: [] }
      ].map(member)
    }
  });
})();
