// Стюарты: монархи объединённых английской и шотландской корон.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/stuarts/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    stuarts: {
      id: 'stuarts', name: 'Стюарты', heading: 'Династия Стюартов', period: '1603–1714', country: 'Англия · Шотландия',
      intro: 'Шесть монархов английской и шотландской ветвей — от Якова I до Анны. Период Английской республики 1649–1660 годов отмечен в карточках.',
      members: [
        { id: 'stuart_james_i', name: 'Яков I', born: 1566, died: 1625, title: 'Король Англии и Шотландии', reign: 'Англия: 1603–1625 · Шотландия: 1567–1625', generation: 0, nickname: 'Мудрейший дурак',
          bio: 'Сын Марии Стюарт. Унаследовал английский престол после Елизаветы I и объединил под одним монархом две короны.', children: ['stuart_charles_i'] },
        { id: 'stuart_charles_i', name: 'Карл I', born: 1600, died: 1649, title: 'Король Англии, Шотландии и Ирландии', reign: 'Правление: 1625–1649', generation: 1,
          bio: 'Сын Якова I. Конфликт с парламентом привёл к гражданским войнам, пленению и казни короля в 1649 году.', father: 'stuart_james_i', children: ['stuart_charles_ii', 'stuart_james_ii'] },
        { id: 'stuart_charles_ii', name: 'Карл II', born: 1630, died: 1685, title: 'Король Англии, Шотландии и Ирландии', reign: 'Правление: 1660–1685 · провозглашён в Шотландии в 1649', generation: 2, nickname: 'Весёлый монарх',
          bio: 'Сын Карла I. Вернулся из изгнания при Реставрации 1660 года после одиннадцати лет республики.', father: 'stuart_charles_i' },
        { id: 'stuart_james_ii', name: 'Яков II', born: 1633, died: 1701, title: 'Король Англии и Шотландии', reign: 'Правление: 1685–1688', generation: 2,
          bio: 'Сын Карла I. Его католическая политика и рождение наследника ускорили Славную революцию и потерю престола.', father: 'stuart_charles_i', children: ['stuart_mary_ii', 'stuart_anne'] },
        { id: 'stuart_mary_ii', name: 'Мария II', born: 1662, died: 1694, title: 'Королева Англии, Шотландии и Ирландии', reign: 'Правление: 1689–1694 · вместе с Вильгельмом III', generation: 3,
          bio: 'Дочь Якова II. Правила совместно с мужем Вильгельмом Оранским после Славной революции.', father: 'stuart_james_ii' },
        { id: 'stuart_anne', name: 'Анна', born: 1665, died: 1714, title: 'Королева Англии и Шотландии; с 1707 года Великобритании', reign: 'Правление: 1702–1714', generation: 3, nickname: 'Добрая королева',
          bio: 'Дочь Якова II и последняя монархиня Стюартов. В 1707 году при ней образовалось королевство Великобритания.', father: 'stuart_james_ii' }
      ].map(member)
    }
  });
})();
