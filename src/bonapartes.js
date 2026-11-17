// Бонапарты: императоры французов и ближайшие родственники для связи линий.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/bonapartes/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    bonapartes: {
      id: 'bonapartes', name: 'Бонапарты', heading: 'Династия Бонапартов', period: '1804–1870', country: 'Франция',
      intro: 'Три французских императора, а также Карло Бонапарте и король Голландии Людовик для связи двух императорских линий.',
      members: [
        { id: 'bonaparte_charles', name: 'Карло Бонапарте', born: 1746, died: 1785, title: 'Корсиканский дворянин', reign: 'Правителем не был', generation: 0,
          bio: 'Отец Наполеона I и Людовика Бонапарта. Его потомки основали две императорские линии дома.', children: ['bonaparte_napoleon_i', 'bonaparte_louis'] },
        { id: 'bonaparte_napoleon_i', name: 'Наполеон I', born: 1769, died: 1821, title: 'Император французов', reign: 'Правление: 1804–1814 · 1815', generation: 1, nickname: 'Маленький капрал',
          bio: 'Сын Карло Бонапарте. Создал Первую империю, провёл гражданские реформы и вёл войны по всей Европе.', father: 'bonaparte_charles', children: ['bonaparte_napoleon_ii'] },
        { id: 'bonaparte_louis', name: 'Людовик', born: 1778, died: 1846, title: 'Король Голландии', reign: 'Правление: 1806–1810', generation: 1,
          bio: 'Сын Карло Бонапарте и брат Наполеона I. Правил Голландией; его сын стал императором Наполеоном III.', father: 'bonaparte_charles', children: ['bonaparte_napoleon_iii'] },
        { id: 'bonaparte_napoleon_ii', name: 'Наполеон II', born: 1811, died: 1832, title: 'Титулярный император французов', reign: 'Титулярно: 1814 · 1815 · императором не правил', generation: 2, nickname: 'Орлёнок',
          bio: 'Сын Наполеона I и Марии Луизы. Провёл большую часть жизни при австрийском дворе и умер в возрасте двадцати одного года.', father: 'bonaparte_napoleon_i' },
        { id: 'bonaparte_napoleon_iii', name: 'Наполеон III', born: 1808, died: 1873, title: 'Президент Франции; император французов', reign: 'Президент: 1848–1852 · император: 1852–1870', generation: 2,
          bio: 'Сын Людовика Бонапарта. Основал Вторую империю; его правление завершилось пленением в войне с Пруссией.', father: 'bonaparte_louis' }
      ].map(member)
    }
  });
})();
