// Тюдоры: монархи Англии, включая оспариваемое правление Джейн Грей.
(() => {
  'use strict';

  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return {
      ...data,
      initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/tudors/${data.id}.webp?v=1`,
      photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения',
      photoLicense: image.license || 'См. источник',
      photoSource: image.source,
      nickname: data.nickname || null,
      father: data.father || null,
      mother: null,
      spouse: null,
      children: data.children || []
    };
  }

  Object.assign(window.DYNASTIES, {
    tudors: {
      id: 'tudors', name: 'Тюдоры', heading: 'Династия Тюдоров', period: '1485–1603', country: 'Англия · Ирландия',
      intro: 'Шесть монархов — от Генриха VII до Елизаветы I. Джейн Грей включена как провозглашённая королева, хотя её права и девятидневное правление оспариваются.',
      members: [
        { id: 'tudor_henry_vii', name: 'Генрих VII', born: 1457, died: 1509, title: 'Король Англии', reign: 'Правление: 1485–1509', generation: 0,
          bio: 'Победил Ричарда III при Босворте и основал династию. Браком с Елизаветой Йоркской объединил враждовавшие ветви.', children: ['tudor_henry_viii'] },
        { id: 'tudor_henry_viii', name: 'Генрих VIII', born: 1491, died: 1547, title: 'Король Англии и Ирландии', reign: 'Правление: 1509–1547', generation: 1,
          bio: 'Сын Генриха VII. Разрыв с Римом и роспуск монастырей изменили английскую церковь и государство.', father: 'tudor_henry_vii', children: ['tudor_edward_vi', 'tudor_mary_i', 'tudor_elizabeth_i'] },
        { id: 'tudor_edward_vi', name: 'Эдуард VI', born: 1537, died: 1553, title: 'Король Англии и Ирландии', reign: 'Правление: 1547–1553', generation: 2,
          bio: 'Сын Генриха VIII и Джейн Сеймур. Наследовал ребёнком; при нём продолжилось протестантское преобразование церкви.', father: 'tudor_henry_viii' },
        { id: 'tudor_jane', name: 'Джейн Грей', born: 'ок. 1537', died: 1554, title: 'Провозглашённая королева Англии', reign: 'Правление: 10–19 июля 1553 · оспаривается', generation: 2, nickname: 'Девять дней',
          bio: 'Праправнучка Генриха VII. Была провозглашена королевой после смерти Эдуарда VI, но быстро потеряла власть в пользу Марии.' },
        { id: 'tudor_mary_i', name: 'Мария I', born: 1516, died: 1558, title: 'Королева Англии и Ирландии', reign: 'Правление: 1553–1558', generation: 2, nickname: 'Кровавая',
          bio: 'Дочь Генриха VIII и Екатерины Арагонской. Восстанавливала католичество; её правление сопровождалось казнями протестантов.', father: 'tudor_henry_viii' },
        { id: 'tudor_elizabeth_i', name: 'Елизавета I', born: 1533, died: 1603, title: 'Королева Англии и Ирландии', reign: 'Правление: 1558–1603', generation: 2, nickname: 'Королева-девственница',
          bio: 'Дочь Генриха VIII и Анны Болейн. Её эпоха связана с укреплением Англии, победой над Испанской армадой и расцветом культуры.', father: 'tudor_henry_viii' }
      ].map(member)
    }
  });
})();
