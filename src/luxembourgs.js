// Люксембурги: императорская и чешская линия 1308–1437 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/luxembourgs/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    luxembourgs: {
      id: 'luxembourgs', name: 'Люксембурги', heading: 'Династия Люксембургов', period: '1308–1437', country: 'Чехия · Священная Римская империя',
      intro: 'Пять правителей имперско-чешской линии — от Генриха VII до Сигизмунда.',
      members: [
        { id: 'lux_henry_vii', name: 'Генрих VII', born: 'ок. 1275', died: 1313, title: 'Король римлян; император Священной Римской империи', reign: 'Король: 1308–1313 · император: 1312–1313', generation: 0,
          bio: 'Первый император Люксембургского дома. Его итальянский поход завершился смертью от малярии.', children: ['lux_john'] },
        { id: 'lux_john', name: 'Иоанн', born: 1296, died: 1346, title: 'Король Чехии', reign: 'Правление: 1310–1346', generation: 1, nickname: 'Слепой',
          bio: 'Сын Генриха VII. Получил чешский престол браком с Елизаветой Пржемысловной; погиб при Креси.', father: 'lux_henry_vii', children: ['lux_charles_iv'] },
        { id: 'lux_charles_iv', name: 'Карл IV', born: 1316, died: 1378, title: 'Король Чехии; император Священной Римской империи', reign: 'Чехия: 1346–1378 · император: 1355–1378', generation: 2, nickname: 'Отец отечества',
          bio: 'Сын Иоанна. Основал Карлов университет, издал Золотую буллу и превратил Прагу в имперскую столицу.', father: 'lux_john', children: ['lux_wenceslaus_iv', 'lux_sigismund'] },
        { id: 'lux_wenceslaus_iv', name: 'Вацлав IV', born: 1361, died: 1419, title: 'Король Чехии; король римлян', reign: 'Чехия: 1378–1419 · король римлян: 1378–1400', generation: 3, nickname: 'Ленивый',
          bio: 'Сын Карла IV. Был низложен германскими курфюрстами и столкнулся с восстаниями в Чехии.', father: 'lux_charles_iv' },
        { id: 'lux_sigismund', name: 'Сигизмунд', born: 1368, died: 1437, title: 'Король Венгрии и Чехии; император', reign: 'Венгрия: 1387–1437 · Чехия: 1419–1437 · император: 1433–1437', generation: 3,
          bio: 'Сын Карла IV. Организовал Констанцский собор и стал последним мужским представителем династии.', father: 'lux_charles_iv' }
      ].map(member)
    }
  });
})();
