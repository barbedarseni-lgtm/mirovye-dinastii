// Птолемеи: правители эллинистического Египта 305–30 годов до н. э.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/ptolemies/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    ptolemies: {
      id: 'ptolemies', name: 'Птолемеи', heading: 'Династия Птолемеев', period: '305–30 до н. э.', country: 'Египет',
      intro: 'Семнадцать правителей — от Птолемея I до Цезариона. Даты до нашей эры и совместные правления указаны отдельно.',
      members: [
        { id: 'pto_i', name: 'Птолемей I', born: 'ок. 367 до н. э.', died: '282 до н. э.', title: 'Царь Египта', reign: 'Правление: 305–282 до н. э.', generation: 0, nickname: 'Спаситель', bio: 'Полководец Александра Великого и основатель династии.', children: ['pto_ii'] },
        { id: 'pto_ii', name: 'Птолемей II', born: '308 до н. э.', died: '246 до н. э.', title: 'Фараон Египта', reign: 'Правление: 285–246 до н. э.', generation: 1, nickname: 'Филадельф', bio: 'Сын Птолемея I. Развивал Александрию и эллинистическую культуру.', father: 'pto_i', children: ['pto_iii'] },
        { id: 'pto_iii', name: 'Птолемей III', born: 'ок. 280 до н. э.', died: '222 до н. э.', title: 'Фараон Египта', reign: 'Правление: 246–222 до н. э.', generation: 2, nickname: 'Эвергет', bio: 'Сын Птолемея II. Расширил влияние Египта в Эгейском море.', father: 'pto_ii', children: ['pto_iv'] },
        { id: 'pto_iv', name: 'Птолемей IV', born: 'ок. 244 до н. э.', died: '204 до н. э.', title: 'Фараон Египта', reign: 'Правление: 222–204 до н. э.', generation: 3, nickname: 'Филопатор', bio: 'Сын Птолемея III. Победил Антиоха III при Рафии.', father: 'pto_iii', children: ['pto_v'] },
        { id: 'pto_v', name: 'Птолемей V', born: '210 до н. э.', died: '180 до н. э.', title: 'Фараон Египта', reign: 'Правление: 204–180 до н. э.', generation: 4, nickname: 'Эпифан', bio: 'Сын Птолемея IV. Розеттский камень содержит указ в его честь.', father: 'pto_iv', children: ['pto_vi', 'pto_viii'] },
        { id: 'pto_vi', name: 'Птолемей VI', born: 'ок. 186 до н. э.', died: '145 до н. э.', title: 'Фараон Египта', reign: 'Правление: 180–145 до н. э. · с перерывом', generation: 5, nickname: 'Филометор', bio: 'Сын Птолемея V. Правил в конфликтах с братом и Селевкидами.', father: 'pto_v', children: ['pto_vii'] },
        { id: 'pto_vii', name: 'Птолемей VII', born: 'ок. 160 до н. э.', died: '145 до н. э.', title: 'Краткий соправитель Египта', reign: 'Правление: 145 до н. э. · статус оспаривается', generation: 6, nickname: 'Неофилопатор', bio: 'Сын Птолемея VI. Его отдельное правление плохо документировано.', father: 'pto_vi' },
        { id: 'pto_viii', name: 'Птолемей VIII', born: 'ок. 182 до н. э.', died: '116 до н. э.', title: 'Фараон Египта', reign: 'Правление: 170–163 · 145–116 до н. э.', generation: 5, nickname: 'Толстый', bio: 'Сын Птолемея V. Неоднократно боролся за власть с родственниками.', father: 'pto_v', children: ['pto_ix', 'pto_x'] },
        { id: 'pto_ix', name: 'Птолемей IX', born: 'ок. 143 до н. э.', died: '81 до н. э.', title: 'Фараон Египта', reign: 'Правление: 116–110 · 107–88 · 81–80 до н. э.', generation: 6, nickname: 'Спаситель', bio: 'Сын Птолемея VIII. Неоднократно возвращался на престол.', father: 'pto_viii', children: ['pto_xii'] },
        { id: 'pto_x', name: 'Птолемей X', born: 'ок. 140 до н. э.', died: '88 до н. э.', title: 'Фараон Египта', reign: 'Правление: 110–107 до н. э. · соправитель до 88', generation: 6, nickname: 'Александр I', bio: 'Сын Птолемея VIII. Правил в борьбе с братом и матерью.', father: 'pto_viii', children: ['pto_xi'] },
        { id: 'pto_xi', name: 'Птолемей XI', born: 'ок. 100 до н. э.', died: '80 до н. э.', title: 'Фараон Египта', reign: 'Правление: 80 до н. э. · 19 дней', generation: 7, nickname: 'Александр II', bio: 'Сын Птолемея X. Был убит после убийства жены Береники III.', father: 'pto_x' },
        { id: 'pto_xii', name: 'Птолемей XII', born: 'ок. 117 до н. э.', died: '51 до н. э.', title: 'Фараон Египта', reign: 'Правление: 80–58 · 55–51 до н. э.', generation: 7, nickname: 'Аулет', bio: 'Сын Птолемея IX. Дважды терял и возвращал власть при поддержке Рима.', father: 'pto_ix', children: ['pto_cleopatra_vii', 'pto_xiii', 'pto_arsinoe_iv', 'pto_xiv'] },
        { id: 'pto_cleopatra_vii', name: 'Клеопатра VII', born: '69 до н. э.', died: '30 до н. э.', title: 'Последняя самостоятельная царица Египта', reign: 'Правление: 51–30 до н. э.', generation: 8, bio: 'Дочь Птолемея XII. Её союзы с Цезарем и Антонием определили судьбу царства.', father: 'pto_xii', children: ['pto_xv'] },
        { id: 'pto_xiii', name: 'Птолемей XIII', born: 'ок. 62 до н. э.', died: '47 до н. э.', title: 'Соправитель Египта', reign: 'Правление: 51–47 до н. э.', generation: 8, bio: 'Сын Птолемея XII. Вёл войну с сестрой Клеопатрой и Цезарем.', father: 'pto_xii' },
        { id: 'pto_arsinoe_iv', name: 'Арсиноя IV', born: 'ок. 68 до н. э.', died: '41 до н. э.', title: 'Соправительница Египта', reign: 'Правление: 48–47 до н. э.', generation: 8, bio: 'Дочь Птолемея XII. Была провозглашена царицей во время Александрийской войны.', father: 'pto_xii' },
        { id: 'pto_xiv', name: 'Птолемей XIV', born: 'ок. 59 до н. э.', died: '44 до н. э.', title: 'Соправитель Египта', reign: 'Правление: 47–44 до н. э.', generation: 8, bio: 'Сын Птолемея XII. Правил вместе с Клеопатрой.', father: 'pto_xii' },
        { id: 'pto_xv', name: 'Птолемей XV Цезарион', born: '47 до н. э.', died: '30 до н. э.', title: 'Последний фараон Египта', reign: 'Соправитель: 44–30 до н. э.', generation: 9, nickname: 'Цезарион', bio: 'Сын Клеопатры VII и Гая Юлия Цезаря. Был убит после победы Октавиана.', mother: 'pto_cleopatra_vii' }
      ].map(member)
    }
  });
})();
