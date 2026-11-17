// Ягеллоны: польско-литовская королевская линия 1386–1572 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/jagiellons/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    jagiellons: {
      id: 'jagiellons', name: 'Ягеллоны', heading: 'Династия Ягеллонов', period: '1386–1572', country: 'Польша · Литва',
      intro: 'Семь королей польско-литовской линии — от Владислава II Ягайло до Сигизмунда II Августа.',
      members: [
        { id: 'jag_wladyslaw_ii', name: 'Владислав II Ягайло', born: 'ок. 1352', died: 1434, title: 'Великий князь Литовский; король Польши', reign: 'Польша: 1386–1434 · Литва: 1377–1434', generation: 0,
          bio: 'Основатель польской линии Ягеллонов. Крёвская уния и брак с Ядвигой связали Польшу и Литву.', children: ['jag_wladyslaw_iii', 'jag_casimir_iv'] },
        { id: 'jag_wladyslaw_iii', name: 'Владислав III', born: 1424, died: 1444, title: 'Король Польши и Венгрии', reign: 'Польша: 1434–1444 · Венгрия: 1440–1444', generation: 1, nickname: 'Варненский',
          bio: 'Сын Ягайло. Погиб в битве с османами при Варне во время крестового похода.', father: 'jag_wladyslaw_ii' },
        { id: 'jag_casimir_iv', name: 'Казимир IV', born: 1427, died: 1492, title: 'Король Польши; великий князь Литовский', reign: 'Правление: 1447–1492', generation: 1,
          bio: 'Сын Ягайло. После Тринадцатилетней войны закрепил победу над Тевтонским орденом.', father: 'jag_wladyslaw_ii', children: ['jag_john_i', 'jag_alexander', 'jag_sigismund_i'] },
        { id: 'jag_john_i', name: 'Ян I Ольбрахт', born: 1459, died: 1501, title: 'Король Польши', reign: 'Правление: 1492–1501', generation: 2,
          bio: 'Сын Казимира IV. Его правление завершилось неудачным походом против османов.', father: 'jag_casimir_iv' },
        { id: 'jag_alexander', name: 'Александр', born: 1461, died: 1506, title: 'Король Польши; великий князь Литовский', reign: 'Литва: 1492–1506 · Польша: 1501–1506', generation: 2,
          bio: 'Сын Казимира IV. Наследовал брату Яну и сохранял польско-литовскую уния.', father: 'jag_casimir_iv' },
        { id: 'jag_sigismund_i', name: 'Сигизмунд I', born: 1467, died: 1548, title: 'Король Польши; великий князь Литовский', reign: 'Правление: 1506–1548', generation: 2, nickname: 'Старый',
          bio: 'Сын Казимира IV. Его правление связано с расцветом польского Возрождения и секуляризацией Пруссии.', father: 'jag_casimir_iv', children: ['jag_sigismund_ii'] },
        { id: 'jag_sigismund_ii', name: 'Сигизмунд II Август', born: 1520, died: 1572, title: 'Последний Ягеллон на польском престоле', reign: 'Правление: 1548–1572', generation: 3, nickname: 'Август',
          bio: 'Сын Сигизмунда I. При нём в 1569 году была заключена Люблинская уния, создавшая Речь Посполитую.', father: 'jag_sigismund_i' }
      ].map(member)
    }
  });
})();
