// Ганноверская династия: британские монархи и два наследника для связи поколений.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/hanovers/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    hanovers: {
      id: 'hanovers', name: 'Ганноверская', heading: 'Ганноверская династия', period: '1714–1901', country: 'Великобритания · Ганновер',
      intro: 'Шесть британских монархов и два принца, связывающие поколения, — от Георга I до Виктории.',
      members: [
        { id: 'hanover_george_i', name: 'Георг I', born: 1660, died: 1727, title: 'Король Великобритании; курфюрст Ганновера', reign: 'Великобритания: 1714–1727', generation: 0,
          bio: 'Первый британский монарх Ганноверского дома. Наследовал Анне благодаря происхождению от Елизаветы Стюарт.', children: ['hanover_george_ii'] },
        { id: 'hanover_george_ii', name: 'Георг II', born: 1683, died: 1760, title: 'Король Великобритании; курфюрст Ганновера', reign: 'Правление: 1727–1760', generation: 1,
          bio: 'Сын Георга I. Последний британский король, лично участвовавший в сражении — при Деттингене в 1743 году.', father: 'hanover_george_i', children: ['hanover_frederick'] },
        { id: 'hanover_frederick', name: 'Фредерик', born: 1707, died: 1751, title: 'Принц Уэльский', reign: 'Принц Уэльский: 1729–1751 · королём не был', generation: 2,
          bio: 'Сын Георга II. Умер раньше отца, поэтому престол перешёл к его сыну Георгу III.', father: 'hanover_george_ii', children: ['hanover_george_iii'] },
        { id: 'hanover_george_iii', name: 'Георг III', born: 1738, died: 1820, title: 'Король Великобритании; с 1814 года король Ганновера', reign: 'Правление: 1760–1820', generation: 3, nickname: 'Безумный',
          bio: 'Внук Георга II. Его долгое правление включало потерю американских колоний и войны с революционной Францией и Наполеоном.', father: 'hanover_frederick', children: ['hanover_george_iv', 'hanover_william_iv', 'hanover_edward'] },
        { id: 'hanover_george_iv', name: 'Георг IV', born: 1762, died: 1830, title: 'Король Великобритании и Ганновера', reign: 'Правление: 1820–1830 · регент с 1811', generation: 4,
          bio: 'Старший сын Георга III. Был регентом во время болезни отца, известен расточительностью и покровительством искусствам.', father: 'hanover_george_iii' },
        { id: 'hanover_william_iv', name: 'Вильгельм IV', born: 1765, died: 1837, title: 'Король Великобритании и Ганновера', reign: 'Правление: 1830–1837', generation: 4, nickname: 'Моряк',
          bio: 'Сын Георга III. До престола служил в флоте; при нём был принят Великий акт о реформе 1832 года.', father: 'hanover_george_iii' },
        { id: 'hanover_edward', name: 'Эдуард', born: 1767, died: 1820, title: 'Герцог Кентский', reign: 'Герцог с 1799 · королём не был', generation: 4,
          bio: 'Четвёртый сын Георга III и отец королевы Виктории.', father: 'hanover_george_iii', children: ['hanover_victoria'] },
        { id: 'hanover_victoria', name: 'Виктория', born: 1819, died: 1901, title: 'Королева Великобритании; императрица Индии', reign: 'Правление: 1837–1901', generation: 5, nickname: 'Бабушка Европы',
          bio: 'Дочь Эдуарда Кентского. Её долгое правление дало название викторианской эпохе; с её смертью завершилась британская линия Ганноверов.', father: 'hanover_edward' }
      ].map(member)
    }
  });
})();
