// Бернадоты: короли Швеции с 1818 года и герцог Вестерботтенский для связи поколений.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/bernadottes/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    bernadottes: {
      id: 'bernadottes', name: 'Бернадоты', heading: 'Династия Бернадотов', period: '1818 — настоящее время', country: 'Швеция',
      intro: 'Семь королей Швеции и принц Густав Адольф, связывающий Густава VI Адольфа с нынешним монархом.',
      members: [
        { id: 'bernadotte_charles_xiv', name: 'Карл XIV Юхан', born: 1763, died: 1844, title: 'Король Швеции и Норвегии', reign: 'Правление: 1818–1844', generation: 0,
          bio: 'Бывший французский маршал Жан Батист Бернадот. Избран наследником шведского престола в 1810 году и основал династию.', children: ['bernadotte_oscar_i'] },
        { id: 'bernadotte_oscar_i', name: 'Оскар I', born: 1799, died: 1859, title: 'Король Швеции и Норвегии', reign: 'Правление: 1844–1859', generation: 1,
          bio: 'Сын Карла XIV Юхана и Жозефины Богарне. Поддерживал образование и социальные реформы.', father: 'bernadotte_charles_xiv', children: ['bernadotte_charles_xv', 'bernadotte_oscar_ii'] },
        { id: 'bernadotte_charles_xv', name: 'Карл XV', born: 1826, died: 1872, title: 'Король Швеции и Норвегии', reign: 'Правление: 1859–1872', generation: 2,
          bio: 'Старший сын Оскара I. Его правление связано с либеральными реформами и развитием культуры.', father: 'bernadotte_oscar_i' },
        { id: 'bernadotte_oscar_ii', name: 'Оскар II', born: 1829, died: 1907, title: 'Король Швеции; до 1905 года и Норвегии', reign: 'Швеция: 1872–1907 · Норвегия: 1872–1905', generation: 2,
          bio: 'Младший сын Оскара I. При нём в 1905 году мирно прекратилась шведско-норвежская уния.', father: 'bernadotte_oscar_i', children: ['bernadotte_gustaf_v'] },
        { id: 'bernadotte_gustaf_v', name: 'Густав V', born: 1858, died: 1950, title: 'Король Швеции', reign: 'Правление: 1907–1950', generation: 3,
          bio: 'Сын Оскара II. Его долгое правление охватило обе мировые войны и развитие парламентаризма.', father: 'bernadotte_oscar_ii', children: ['bernadotte_gustaf_vi'] },
        { id: 'bernadotte_gustaf_vi', name: 'Густав VI Адольф', born: 1882, died: 1973, title: 'Король Швеции', reign: 'Правление: 1950–1973', generation: 4,
          bio: 'Сын Густава V. Взошёл на престол в пожилом возрасте; известен интересом к археологии.', father: 'bernadotte_gustaf_v', children: ['bernadotte_gustaf_adolf'] },
        { id: 'bernadotte_gustaf_adolf', name: 'Густав Адольф', born: 1906, died: 1947, title: 'Герцог Вестерботтенский', reign: 'Королём не был', generation: 5,
          bio: 'Сын Густава VI Адольфа. Погиб в авиакатастрофе до восхождения отца на престол; отец Карла XVI Густава.', father: 'bernadotte_gustaf_vi', children: ['bernadotte_carl_xvi'] },
        { id: 'bernadotte_carl_xvi', name: 'Карл XVI Густав', born: 1946, died: '', title: 'Король Швеции', reign: 'Правление: с 15 сентября 1973', generation: 6,
          bio: 'Сын Густава Адольфа. Наследовал деду в 1973 году; первый монарх по новой форме правления 1974 года.', father: 'bernadotte_gustaf_adolf' }
      ].map(member)
    }
  });
})();
