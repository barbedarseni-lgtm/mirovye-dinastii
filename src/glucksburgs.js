// Глюксбурги: монархи Дании с 1863 года.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/glucksburgs/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    glucksburgs: {
      id: 'glucksburgs', name: 'Глюксбурги', heading: 'Династия Глюксбургов', period: '1863 — настоящее время', country: 'Дания',
      intro: 'Шесть монархов датской линии Глюксбургов — от Кристиана IX до Фредерика X.',
      members: [
        { id: 'gluck_christian_ix', name: 'Кристиан IX', born: 1818, died: 1906, title: 'Король Дании', reign: 'Правление: 1863–1906', generation: 0, nickname: 'Тесть Европы',
          bio: 'Первый датский король Глюксбургской линии. Его дети и потомки заняли престолы нескольких европейских стран.', children: ['gluck_frederick_viii'] },
        { id: 'gluck_frederick_viii', name: 'Фредерик VIII', born: 1843, died: 1912, title: 'Король Дании', reign: 'Правление: 1906–1912', generation: 1,
          bio: 'Сын Кристиана IX. Наследовал отцу в возрасте шестидесяти двух лет.', father: 'gluck_christian_ix', children: ['gluck_christian_x'] },
        { id: 'gluck_christian_x', name: 'Кристиан X', born: 1870, died: 1947, title: 'Король Дании; до 1918 года король Исландии', reign: 'Дания: 1912–1947 · Исландия: 1918–1944', generation: 2,
          bio: 'Сын Фредерика VIII. Его ежедневные конные выезды стали символом сопротивления во время немецкой оккупации.', father: 'gluck_frederick_viii', children: ['gluck_frederick_ix'] },
        { id: 'gluck_frederick_ix', name: 'Фредерик IX', born: 1899, died: 1972, title: 'Король Дании', reign: 'Правление: 1947–1972', generation: 3,
          bio: 'Сын Кристиана X. При нём в 1953 году женщины получили право наследовать датский престол.', father: 'gluck_christian_x', children: ['gluck_margrethe_ii'] },
        { id: 'gluck_margrethe_ii', name: 'Маргрете II', born: 1940, died: '', title: 'Королева Дании', reign: 'Правление: 1972–2024', generation: 4,
          bio: 'Дочь Фредерика IX. В 2024 году добровольно отреклась в пользу старшего сына.', father: 'gluck_frederick_ix', children: ['gluck_frederik_x'] },
        { id: 'gluck_frederik_x', name: 'Фредерик X', born: 1968, died: '', title: 'Король Дании', reign: 'Правление: с 14 января 2024', generation: 5,
          bio: 'Сын Маргрете II. Наследовал престол после отречения матери.', mother: 'gluck_margrethe_ii' }
      ].map(member)
    }
  });
})();
