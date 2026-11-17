// Занды: правители Ирана 1751–1794 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/zands/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: null, mother: null, spouse: null, children: [] };
  }
  Object.assign(window.DYNASTIES, {
    zands: {
      id: 'zands', name: 'Занды', heading: 'Династия Зандов', period: '1751–1794', country: 'Иран',
      intro: 'Девять правителей — от Карим-хана до Лотф Али-хана. Борьба за власть после 1779 года привела к частой смене правителей.',
      members: [
        { id: 'zand_karim', name: 'Карим Хан', born: 1705, died: 1779, title: 'Вакил и фактический правитель Ирана', reign: 'Правление: 1751–1779', generation: 0, bio: 'Основатель державы Зандов. Установил относительный мир и развивал Шираз.' },
        { id: 'zand_abol_fath', name: 'Аболь Фатх Хан', born: 'ок. 1755', died: 1787, title: 'Соправитель Ирана', reign: 'Правление: 1779', generation: 1, bio: 'Был провозглашён после смерти Карим-хана.' },
        { id: 'zand_mohammad_ali', name: 'Мохаммад Али Хан', born: 'ок. 1760', died: 1779, title: 'Соправитель Ирана', reign: 'Правление: 1779', generation: 1, bio: 'Правил недолго в борьбе придворных фракций.' },
        { id: 'zand_zaki', name: 'Заки Хан', born: 'неизвестно', died: 1779, title: 'Фактический правитель Ирана', reign: 'Правление: 1779', generation: 1, bio: 'Быстро захватил власть и был убит своими людьми.' },
        { id: 'zand_sadeq', name: 'Садек Хан', born: 'неизвестно', died: 1782, title: 'Правитель Ирана', reign: 'Правление: 1779–1781', generation: 1, bio: 'Удерживал власть после убийства Заки-хана.' },
        { id: 'zand_ali_morad', name: 'Али Морад Хан', born: 'ок. 1720', died: 1785, title: 'Правитель Ирана', reign: 'Правление: 1781–1785', generation: 1, bio: 'Вёл войны с родственниками и Каджарами.' },
        { id: 'zand_jafar', name: 'Джафар Хан', born: 'неизвестно', died: 1789, title: 'Правитель Ирана', reign: 'Правление: 1785–1789', generation: 1, bio: 'Правил в период продолжающейся гражданской войны.' },
        { id: 'zand_sayed_morad', name: 'Сайед Морад Хан', born: 'неизвестно', died: 1789, title: 'Правитель Ирана', reign: 'Правление: 1789', generation: 1, bio: 'Кратко занимал престол перед Лотф Али-ханом.' },
        { id: 'zand_lotf_ali', name: 'Лотф Али Хан', born: 1769, died: 1794, title: 'Последний правитель Зандов', reign: 'Правление: 1789–1794', generation: 2, bio: 'Сопротивлялся Каджарам, но был пленён и убит.' }
      ].map(member)
    }
  });
})();
