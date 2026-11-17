// Династия Мин: императоры Китая 1368–1644 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/ming/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    ming: {
      id: 'ming', name: 'Мин', heading: 'Династия Мин', period: '1368–1644', country: 'Китай',
      intro: 'Шестнадцать императоров — от Хунъу до Чунчжэнь. Второе правление Чжэнтуна после плена отмечено отдельно.',
      members: [
        { id: 'ming_hongwu', name: 'Хунъу', born: 1328, died: 1398, title: 'Основатель династии Мин', reign: 'Правление: 1368–1398', generation: 0, bio: 'Сверг Юань и восстановил китайскую централизованную монархию.', children: ['ming_yongle'] },
        { id: 'ming_jianwen', name: 'Цзяньвэнь', born: 1377, died: 'неизвестно', title: 'Император Мин', reign: 'Правление: 1398–1402', generation: 1, bio: 'Внук Хунъу. Был свергнут дядей Юнлэ.' },
        { id: 'ming_yongle', name: 'Юнлэ', born: 1360, died: 1424, title: 'Император Мин', reign: 'Правление: 1402–1424', generation: 1, bio: 'Сын Хунъу. Перенёс столицу в Пекин и строил Запретный город.', father: 'ming_hongwu', children: ['ming_hongxi'] },
        { id: 'ming_hongxi', name: 'Хунси', born: 1378, died: 1425, title: 'Император Мин', reign: 'Правление: 1424–1425', generation: 2, bio: 'Сын Юнлэ. Правил недолго.', father: 'ming_yongle', children: ['ming_xuande'] },
        { id: 'ming_xuande', name: 'Сюаньдэ', born: 1399, died: 1435, title: 'Император Мин', reign: 'Правление: 1425–1435', generation: 3, bio: 'Сын Хунси. Его эпоха отмечена относительной стабильностью.', father: 'ming_hongxi', children: ['ming_zhengtong', 'ming_jingtai'] },
        { id: 'ming_zhengtong', name: 'Чжэнтун', born: 1427, died: 1464, title: 'Император Мин', reign: 'Правление: 1435–1449 · 1457–1464', generation: 4, bio: 'Сын Сюаньдэ. Попал в плен и вернул престол после Чжэнтунского переворота.', father: 'ming_xuande', children: ['ming_chenghua'] },
        { id: 'ming_jingtai', name: 'Цзинтай', born: 1428, died: 1457, title: 'Император Мин', reign: 'Правление: 1449–1457', generation: 4, bio: 'Сын Сюаньдэ. Занял престол во время плена брата.', father: 'ming_xuande' },
        { id: 'ming_chenghua', name: 'Чэнхуа', born: 1447, died: 1487, title: 'Император Мин', reign: 'Правление: 1464–1487', generation: 5, bio: 'Сын Чжэнтуна.', father: 'ming_zhengtong', children: ['ming_hongzhi'] },
        { id: 'ming_hongzhi', name: 'Хунчжи', born: 1470, died: 1505, title: 'Император Мин', reign: 'Правление: 1487–1505', generation: 6, bio: 'Сын Чэнхуа. Известен умеренным правлением.', father: 'ming_chenghua', children: ['ming_zhengde'] },
        { id: 'ming_zhengde', name: 'Чжэндэ', born: 1491, died: 1521, title: 'Император Мин', reign: 'Правление: 1505–1521', generation: 7, bio: 'Сын Хунчжи. Умер без наследника.', father: 'ming_hongzhi' },
        { id: 'ming_jiajing', name: 'Цзяцзин', born: 1507, died: 1567, title: 'Император Мин', reign: 'Правление: 1521–1567', generation: 7, bio: 'Двоюродный брат Чжэндэ. Его правление отмечено ритуальными спорами.', children: ['ming_longqing'] },
        { id: 'ming_longqing', name: 'Лунцин', born: 1537, died: 1572, title: 'Император Мин', reign: 'Правление: 1567–1572', generation: 8, bio: 'Сын Цзяцзина. Открыл порты для внешней торговли.', father: 'ming_jiajing', children: ['ming_wanli'] },
        { id: 'ming_wanli', name: 'Ваньли', born: 1563, died: 1620, title: 'Император Мин', reign: 'Правление: 1572–1620', generation: 9, bio: 'Сын Лунцина. Самый долгоправящий император династии.', father: 'ming_longqing', children: ['ming_taichang'] },
        { id: 'ming_taichang', name: 'Тайчан', born: 1582, died: 1620, title: 'Император Мин', reign: 'Правление: 1620 · 29 дней', generation: 10, bio: 'Сын Ваньли. Умер внезапно после короткого правления.', father: 'ming_wanli', children: ['ming_tianqi', 'ming_chongzhen'] },
        { id: 'ming_tianqi', name: 'Тяньци', born: 1605, died: 1627, title: 'Император Мин', reign: 'Правление: 1620–1627', generation: 11, bio: 'Сын Тайчана. При нём усилился Вэй Чжунсянь.', father: 'ming_taichang' },
        { id: 'ming_chongzhen', name: 'Чунчжэнь', born: 1611, died: 1644, title: 'Последний император Мин', reign: 'Правление: 1627–1644', generation: 11, bio: 'Сын Тайчана. Покончил с собой при падении Пекина.', father: 'ming_taichang' }
      ].map(member)
    }
  });
})();
