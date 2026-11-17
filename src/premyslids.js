// Пржемысловичи: короли Чехии, включая первое ненаследственное коронование Владислава II.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/premyslids/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    premyslids: {
      id: 'premyslids', name: 'Пржемысловичи', heading: 'Пржемысловичи', period: '1158–1306', country: 'Чехия',
      intro: 'Шесть чешских королей — от Владислава II до Вацлава III. Более ранняя княжеская линия в это королевское древо не включена.',
      members: [
        { id: 'prem_vladislav_ii', name: 'Владислав II', born: 'ок. 1110', died: 1174, title: 'Князь и король Чехии', reign: 'Князь: 1140–1172 · король: 1158–1172', generation: 0,
          bio: 'Первый чешский правитель, получивший королевскую корону от Фридриха Барбароссы. Позднее отрёкся.', children: ['prem_ottokar_i'] },
        { id: 'prem_ottokar_i', name: 'Пржемысл Отакар I', born: 'ок. 1155', died: 1230, title: 'Король Чехии', reign: 'Правление: 1198–1230 · с перерывами до наследственного признания', generation: 1,
          bio: 'Сын Владислава II. Добился признания чешской короны наследственной.', father: 'prem_vladislav_ii', children: ['prem_wenceslaus_i'] },
        { id: 'prem_wenceslaus_i', name: 'Вацлав I', born: 1205, died: 1253, title: 'Король Чехии', reign: 'Правление: 1230–1253', generation: 2, nickname: 'Одноногий',
          bio: 'Сын Пржемысла Отакара I. Укреплял королевство и привлекал немецких поселенцев.', father: 'prem_ottokar_i', children: ['prem_ottokar_ii'] },
        { id: 'prem_ottokar_ii', name: 'Пржемысл Отакар II', born: 1233, died: 1278, title: 'Король Чехии', reign: 'Правление: 1253–1278', generation: 3, nickname: 'Железный и Золотой',
          bio: 'Сын Вацлава I. Расширил владения до Адриатики, но погиб в битве на Моравском поле.', father: 'prem_wenceslaus_i', children: ['prem_wenceslaus_ii'] },
        { id: 'prem_wenceslaus_ii', name: 'Вацлав II', born: 1271, died: 1305, title: 'Король Чехии и Польши', reign: 'Чехия: 1278–1305 · Польша: 1300–1305', generation: 4,
          bio: 'Сын Пржемысла Отакара II. Укрепил королевство после регентства и получил польскую корону.', father: 'prem_ottokar_ii', children: ['prem_wenceslaus_iii'] },
        { id: 'prem_wenceslaus_iii', name: 'Вацлав III', born: 1289, died: 1306, title: 'Последний король мужской линии Пржемысловичей', reign: 'Чехия: 1305–1306 · Венгрия: 1301–1305', generation: 5,
          bio: 'Сын Вацлава II. Был убит в Оломоуце; с его смертью прекратилась мужская линия династии.', father: 'prem_wenceslaus_ii' }
      ].map(member)
    }
  });
})();
