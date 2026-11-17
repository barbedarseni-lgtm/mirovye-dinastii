// Афшариды: правители Ирана 1736–1796 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/afsharids/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: null, mother: null, spouse: null, children: [] };
  }
  Object.assign(window.DYNASTIES, {
    afsharids: {
      id: 'afsharids', name: 'Афшариды', heading: 'Династия Афшаридов', period: '1736–1796', country: 'Иран',
      intro: 'Четыре шаха — от Надир-шаха до Шахроха. Короткие правления после убийства Надира и повторное возвращение Шахроха отмечены отдельно.',
      members: [
        { id: 'afsh_nader', name: 'Надир Шах', born: 1688, died: 1747, title: 'Шах Ирана', reign: 'Правление: 1736–1747', generation: 0,
          bio: 'Основатель династии. Изгнал афганцев, разбил османов и вторгся в Индию.' },
        { id: 'afsh_adel', name: 'Адель Шах', born: 'ок. 1719', died: 1748, title: 'Шах Ирана', reign: 'Правление: 1747–1748', generation: 1,
          bio: 'Племянник Надира. Захватил власть после убийства дяди, но был низложен.' },
        { id: 'afsh_ebrahim', name: 'Эбрахим Шах', born: 'ок. 1725', died: 1749, title: 'Шах Ирана', reign: 'Правление: 1748', generation: 1,
          bio: 'Брат Адель-шаха. Недолго правил в борьбе за власть.' },
        { id: 'afsh_shahrokh', name: 'Шахрох', born: 1734, died: 1796, title: 'Последний шах Афшаридов', reign: 'Правление: 1748–1796 · с перерывами', generation: 2,
          bio: 'Внук Надира. Неоднократно терял и возвращал власть в Хорасане.' }
      ].map(member)
    }
  });
})();
