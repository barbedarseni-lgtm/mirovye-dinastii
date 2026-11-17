// Гогенцоллерны: короли Пруссии и императоры Германии.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/hohenzollerns/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    hohenzollerns: {
      id: 'hohenzollerns', name: 'Гогенцоллерны', heading: 'Династия Гогенцоллернов', period: '1701–1918', country: 'Пруссия · Германия',
      intro: 'Девять правителей прусской королевской и германской императорской линии и принц Август Вильгельм для связи поколений.',
      members: [
        { id: 'hohen_frederick_i', name: 'Фридрих I', born: 1657, died: 1713, title: 'Король в Пруссии', reign: 'Правление: 1701–1713', generation: 0,
          bio: 'Первый прусский король. Получил королевский титул после соглашения с императором Леопольдом I.', children: ['hohen_frederick_william_i'] },
        { id: 'hohen_frederick_william_i', name: 'Фридрих Вильгельм I', born: 1688, died: 1740, title: 'Король Пруссии', reign: 'Правление: 1713–1740', generation: 1, nickname: 'Солдатский король',
          bio: 'Сын Фридриха I. Укрепил армию и финансы, оставив сыну мощное военное государство.', father: 'hohen_frederick_i', children: ['hohen_frederick_ii', 'hohen_augustus_william'] },
        { id: 'hohen_frederick_ii', name: 'Фридрих II', born: 1712, died: 1786, title: 'Король Пруссии', reign: 'Правление: 1740–1786', generation: 2, nickname: 'Великий',
          bio: 'Сын Фридриха Вильгельма I. Полководец Семилетней войны, писатель и покровитель философов.', father: 'hohen_frederick_william_i' },
        { id: 'hohen_augustus_william', name: 'Август Вильгельм', born: 1722, died: 1758, title: 'Принц Прусский', reign: 'Королём не был', generation: 2,
          bio: 'Младший сын Фридриха Вильгельма I и отец следующего короля, Фридриха Вильгельма II.', father: 'hohen_frederick_william_i', children: ['hohen_frederick_william_ii'] },
        { id: 'hohen_frederick_william_ii', name: 'Фридрих Вильгельм II', born: 1744, died: 1797, title: 'Король Пруссии', reign: 'Правление: 1786–1797', generation: 3,
          bio: 'Сын Августа Вильгельма и племянник Фридриха II. При нём Пруссия участвовала в войне с революционной Францией и разделах Польши.', father: 'hohen_augustus_william', children: ['hohen_frederick_william_iii'] },
        { id: 'hohen_frederick_william_iii', name: 'Фридрих Вильгельм III', born: 1770, died: 1840, title: 'Король Пруссии', reign: 'Правление: 1797–1840', generation: 4,
          bio: 'Сын Фридриха Вильгельма II. Правил в эпоху наполеоновских войн и реформ прусского государства.', father: 'hohen_frederick_william_ii', children: ['hohen_frederick_william_iv', 'hohen_wilhelm_i'] },
        { id: 'hohen_frederick_william_iv', name: 'Фридрих Вильгельм IV', born: 1795, died: 1861, title: 'Король Пруссии', reign: 'Правление: 1840–1861', generation: 5,
          bio: 'Старший сын Фридриха Вильгельма III. В 1849 году отказался от императорской короны Франкфуртского парламента.', father: 'hohen_frederick_william_iii' },
        { id: 'hohen_wilhelm_i', name: 'Вильгельм I', born: 1797, died: 1888, title: 'Король Пруссии; германский император', reign: 'Король: 1861–1888 · император: 1871–1888', generation: 5,
          bio: 'Младший сын Фридриха Вильгельма III. Вместе с Бисмарком завершил объединение Германии.', father: 'hohen_frederick_william_iii', children: ['hohen_frederick_iii'] },
        { id: 'hohen_frederick_iii', name: 'Фридрих III', born: 1831, died: 1888, title: 'Германский император; король Пруссии', reign: 'Правление: 9 марта — 15 июня 1888', generation: 6,
          bio: 'Сын Вильгельма I. Правил девяносто девять дней и умер от рака гортани.', father: 'hohen_wilhelm_i', children: ['hohen_wilhelm_ii'] },
        { id: 'hohen_wilhelm_ii', name: 'Вильгельм II', born: 1859, died: 1941, title: 'Последний германский император; король Пруссии', reign: 'Правление: 1888–1918', generation: 7,
          bio: 'Сын Фридриха III. Отрешился от престола в конце Первой мировой войны и провёл остаток жизни в изгнании.', father: 'hohen_frederick_iii' }
      ].map(member)
    }
  });
})();
