// Династия Цин: императоры Китая 1644–1912 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/qing/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    qing: {
      id: 'qing', name: 'Цин', heading: 'Династия Цин', period: '1644–1912', country: 'Китай',
      intro: 'Десять императоров — от Шуньчжи до Сюаньтуна. Период указан с вступления Цин в Пекин.',
      members: [
        { id: 'qing_shunzhi', name: 'Шуньчжи', born: 1638, died: 1661, title: 'Император Цин', reign: 'Правление: 1644–1661', generation: 0,
          bio: 'Первый император Цин в Пекине. Утвердил маньчжурскую власть над Китаем.', children: ['qing_kangxi'] },
        { id: 'qing_kangxi', name: 'Канси', born: 1654, died: 1722, title: 'Император Цин', reign: 'Правление: 1661–1722', generation: 1,
          bio: 'Сын Шуньчжи. Правил шестьдесят один год и укрепил империю.', father: 'qing_shunzhi', children: ['qing_yongzheng'] },
        { id: 'qing_yongzheng', name: 'Юнчжэн', born: 1678, died: 1735, title: 'Император Цин', reign: 'Правление: 1722–1735', generation: 2,
          bio: 'Сын Канси. Проводил административные и финансовые реформы.', father: 'qing_kangxi', children: ['qing_qianlong'] },
        { id: 'qing_qianlong', name: 'Цяньлун', born: 1711, died: 1799, title: 'Император Цин', reign: 'Правление: 1735–1796', generation: 3,
          bio: 'Сын Юнчжэна. При нём империя достигла наибольшей территории.', father: 'qing_yongzheng', children: ['qing_jiaqing'] },
        { id: 'qing_jiaqing', name: 'Цзяцин', born: 1760, died: 1820, title: 'Император Цин', reign: 'Правление: 1796–1820', generation: 4,
          bio: 'Сын Цяньлуна. Боролся с коррупцией и внутренними восстаниями.', father: 'qing_qianlong', children: ['qing_daoguang'] },
        { id: 'qing_daoguang', name: 'Даогуан', born: 1782, died: 1850, title: 'Император Цин', reign: 'Правление: 1820–1850', generation: 5,
          bio: 'Сын Цзяцина. Его правление включало Первую опиумную войну.', father: 'qing_jiaqing', children: ['qing_xianfeng'] },
        { id: 'qing_xianfeng', name: 'Сяньфэн', born: 1831, died: 1861, title: 'Император Цин', reign: 'Правление: 1850–1861', generation: 6,
          bio: 'Сын Даогуана. Правил во время Тайпинского восстания и Второй опиумной войны.', father: 'qing_daoguang', children: ['qing_tongzhi'] },
        { id: 'qing_tongzhi', name: 'Тунчжи', born: 1856, died: 1875, title: 'Император Цин', reign: 'Правление: 1861–1875', generation: 7,
          bio: 'Сын Сяньфэна. Наследовал ребёнком и умер молодым.', father: 'qing_xianfeng' },
        { id: 'qing_guangxu', name: 'Гуансюй', born: 1871, died: 1908, title: 'Император Цин', reign: 'Правление: 1875–1908', generation: 7,
          bio: 'Двоюродный брат Тунчжи. Правил под контролем Цыси; реформы 1898 года были подавлены.' },
        { id: 'qing_xuantong', name: 'Сюаньтун', born: 1906, died: 1967, title: 'Последний император Китая', reign: 'Правление: 1908–1912', generation: 8,
          bio: 'Племянник Гуансюя. Известен как Пу И; отрёкся во время Синьхайской революции.' }
      ].map(member)
    }
  });
})();
