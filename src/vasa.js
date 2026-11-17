// Ваза: монархи шведской линии 1523–1654 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/vasa/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    vasa: {
      id: 'vasa', name: 'Ваза', heading: 'Династия Ваза', period: '1523–1654', country: 'Швеция',
      intro: 'Семь шведских монархов — от Густава I до Кристины. Польское правление Сигизмунда указано отдельно в его карточке.',
      members: [
        { id: 'vasa_gustav_i', name: 'Густав I', born: 1496, died: 1560, title: 'Король Швеции', reign: 'Правление: 1523–1560', generation: 0,
          bio: 'Основатель династии. Добился независимости Швеции от Кальмарской унии и сделал корону наследственной.', children: ['vasa_eric_xiv', 'vasa_john_iii', 'vasa_charles_ix'] },
        { id: 'vasa_eric_xiv', name: 'Эрик XIV', born: 1533, died: 1577, title: 'Король Швеции', reign: 'Правление: 1560–1568', generation: 1,
          bio: 'Старший сын Густава I. Был свергнут после внутренних конфликтов и убийства нескольких дворян.', father: 'vasa_gustav_i' },
        { id: 'vasa_john_iii', name: 'Юхан III', born: 1537, died: 1592, title: 'Король Швеции', reign: 'Правление: 1568–1592', generation: 1,
          bio: 'Сын Густава I. Вёл войну с Россией и пытался сблизить лютеранскую и католическую обрядность.', father: 'vasa_gustav_i', children: ['vasa_sigismund'] },
        { id: 'vasa_sigismund', name: 'Сигизмунд', born: 1566, died: 1632, title: 'Король Швеции и Польши', reign: 'Швеция: 1592–1599 · Польша: 1587–1632', generation: 2,
          bio: 'Сын Юхана III. Его католичество и связь с Польшей привели к конфликту с дядей Карлом и потере шведского престола.', father: 'vasa_john_iii' },
        { id: 'vasa_charles_ix', name: 'Карл IX', born: 1550, died: 1611, title: 'Король Швеции', reign: 'Регент: 1599–1604 · король: 1604–1611', generation: 1,
          bio: 'Младший сын Густава I. Сверг племянника Сигизмунда и укрепил лютеранскую монархию.', father: 'vasa_gustav_i', children: ['vasa_gustav_ii'] },
        { id: 'vasa_gustav_ii', name: 'Густав II Адольф', born: 1594, died: 1632, title: 'Король Швеции', reign: 'Правление: 1611–1632', generation: 2, nickname: 'Лев Севера',
          bio: 'Сын Карла IX. Выдающийся полководец Тридцатилетней войны; погиб в битве при Лютцене.', father: 'vasa_charles_ix', children: ['vasa_christina'] },
        { id: 'vasa_christina', name: 'Кристина', born: 1626, died: 1689, title: 'Королева Швеции', reign: 'Правление: 1632–1654', generation: 3,
          bio: 'Дочь Густава II Адольфа. Покровительствовала наукам и искусствам, отреклась в 1654 году и приняла католичество.', father: 'vasa_gustav_ii' }
      ].map(member)
    }
  });
})();
