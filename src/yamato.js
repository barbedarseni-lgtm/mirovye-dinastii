// Императорский дом Японии: современные императоры от Мэйдзи.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/yamato/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческая фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    yamato: {
      id: 'yamato', name: 'Ямато', heading: 'Императорский дом Японии', period: '1867 — настоящее время', country: 'Япония',
      intro: 'Пять императоров современной эпохи — от Мэйдзи до Рэйва. Легендарные ранние правители в это древо не включены.',
      members: [
        { id: 'yam_meiji', name: 'Мэйдзи', born: 1852, died: 1912, title: 'Император Японии', reign: 'Правление: 1867–1912', generation: 0,
          bio: 'При нём Япония модернизировалась и стала промышленной державой.', children: ['yam_taisho'] },
        { id: 'yam_taisho', name: 'Тайсё', born: 1879, died: 1926, title: 'Император Японии', reign: 'Правление: 1912–1926', generation: 1,
          bio: 'Сын Мэйдзи. Его эпоха связана с либерализацией общества и участием в Первой мировой войне.', father: 'yam_meiji', children: ['yam_showa'] },
        { id: 'yam_showa', name: 'Сёва', born: 1901, died: 1989, title: 'Император Японии', reign: 'Правление: 1926–1989', generation: 2,
          bio: 'Сын Тайсё. Самый долгоправящий японский император современности; эпоха включала войну и восстановление.', father: 'yam_taisho', children: ['yam_heisei'] },
        { id: 'yam_heisei', name: 'Хэйсэй', born: 1933, died: '', title: 'Император Японии', reign: 'Правление: 1989–2019', generation: 3,
          bio: 'Сын Сёва. Отрёкся в 2019 году — первый случай за два столетия.', father: 'yam_showa', children: ['yam_reiwa'] },
        { id: 'yam_reiwa', name: 'Рэйва', born: 1960, died: '', title: 'Император Японии', reign: 'Правление: с 1 мая 2019', generation: 4,
          bio: 'Сын Хэйсэй. Наследовал престол после отречения отца.', father: 'yam_heisei' }
      ].map(member)
    }
  });
})();
