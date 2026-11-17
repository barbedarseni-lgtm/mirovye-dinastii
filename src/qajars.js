// Каджары: шахи Ирана 1789–1925 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/qajars/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    qajars: {
      id: 'qajars', name: 'Каджары', heading: 'Династия Каджаров', period: '1789–1925', country: 'Иран',
      intro: 'Семь шахов — от Ага Мохаммад-хана до Ахмад-шаха. Наследование шло через разные ветви, а не только от отца к сыну.',
      members: [
        { id: 'qaj_agha', name: 'Ага Мохаммад Хан', born: 1742, died: 1797, title: 'Основатель Каджарской державы', reign: 'Правление: 1789–1797', generation: 0,
          bio: 'Объединил Иран после периода распада и выбрал Тегеран столицей.' },
        { id: 'qaj_fath_ali', name: 'Фатх Али Шах', born: 1772, died: 1834, title: 'Шах Ирана', reign: 'Правление: 1797–1834', generation: 1,
          bio: 'Племянник Ага Мохаммад-хана. Его правление включало войны с Россией.' },
        { id: 'qaj_mohammad', name: 'Мохаммад Шах', born: 1808, died: 1848, title: 'Шах Ирана', reign: 'Правление: 1834–1848', generation: 2,
          bio: 'Внук Фатх Али Шаха. Правил в условиях давления европейских держав.', children: ['qaj_naser'] },
        { id: 'qaj_naser', name: 'Насер ад-Дин Шах', born: 1831, died: 1896, title: 'Шах Ирана', reign: 'Правление: 1848–1896', generation: 3,
          bio: 'Сын Мохаммад-шаха. Его долгое правление связано с модернизацией и иностранными концессиями.', father: 'qaj_mohammad', children: ['qaj_mozaffar'] },
        { id: 'qaj_mozaffar', name: 'Мозафар ад-Дин Шах', born: 1853, died: 1907, title: 'Шах Ирана', reign: 'Правление: 1896–1907', generation: 4,
          bio: 'Сын Насер ад-Дина. В 1906 году согласился на конституцию.', father: 'qaj_naser', children: ['qaj_mohammad_ali'] },
        { id: 'qaj_mohammad_ali', name: 'Мохаммад Али Шах', born: 1872, died: 1925, title: 'Шах Ирана', reign: 'Правление: 1907–1909', generation: 5,
          bio: 'Сын Мозафар ад-Дина. Пытался ограничить конституционное движение и был свергнут.', father: 'qaj_mozaffar', children: ['qaj_ahmad'] },
        { id: 'qaj_ahmad', name: 'Ахмад Шах', born: 1898, died: 1930, title: 'Последний шах Каджаров', reign: 'Правление: 1909–1925', generation: 6,
          bio: 'Сын Мохаммада Али. Был отстранён от власти в 1925 году, когда Реза-хан основал Пахлави.', father: 'qaj_mohammad_ali' }
      ].map(member)
    }
  });
})();
