// Французские Бурбоны: правящие короли, дофины и титулярные претенденты 1792–1830 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/bourbons/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    bourbons: {
      id: 'bourbons', name: 'Бурбоны', heading: 'Французские Бурбоны', period: '1589–1830', country: 'Франция · Наварра',
      intro: 'Четырнадцать представителей старшей французской линии: короли, дофины и титулярные монархи. Орлеанская ветвь Людовика Филиппа I не включена.',
      members: [
        { id: 'bourbon_henry_iv', name: 'Генрих IV', born: 1553, died: 1610, title: 'Король Франции и Наварры', reign: 'Правление: 1589–1610', generation: 0, nickname: 'Великий',
          bio: 'Первый французский король Бурбонов. Завершил религиозные войны и подписал Нантский эдикт.', children: ['bourbon_louis_xiii'] },
        { id: 'bourbon_louis_xiii', name: 'Людовик XIII', born: 1601, died: 1643, title: 'Король Франции и Наварры', reign: 'Правление: 1610–1643', generation: 1, nickname: 'Справедливый',
          bio: 'Сын Генриха IV. При нём кардинал Ришельё укреплял королевскую власть и вёл Францию к участию в Тридцатилетней войне.', father: 'bourbon_henry_iv', children: ['bourbon_louis_xiv'] },
        { id: 'bourbon_louis_xiv', name: 'Людовик XIV', born: 1638, died: 1715, title: 'Король Франции и Наварры', reign: 'Правление: 1643–1715', generation: 2, nickname: 'Король-Солнце',
          bio: 'Сын Людовика XIII. Его долгое правление стало символом абсолютной монархии; при нём был построен Версаль.', father: 'bourbon_louis_xiii', children: ['bourbon_louis_dauphin'] },
        { id: 'bourbon_louis_dauphin', name: 'Людовик', born: 1661, died: 1711, title: 'Великий дофин', reign: 'Дофин с 1661 · королём не был', generation: 3,
          bio: 'Сын Людовика XIV. Умер раньше отца; его потомки продолжили французскую и испанскую линии.', father: 'bourbon_louis_xiv', children: ['bourbon_louis_burgundy'] },
        { id: 'bourbon_louis_burgundy', name: 'Людовик', born: 1682, died: 1712, title: 'Герцог Бургундский; дофин', reign: 'Дофин: 1711–1712 · королём не был', generation: 4,
          bio: 'Внук Людовика XIV и отец Людовика XV. Умер во время эпидемии кори до восхождения на престол.', father: 'bourbon_louis_dauphin', children: ['bourbon_louis_xv'] },
        { id: 'bourbon_louis_xv', name: 'Людовик XV', born: 1710, died: 1774, title: 'Король Франции и Наварры', reign: 'Правление: 1715–1774', generation: 5, nickname: 'Любимый',
          bio: 'Правнук Людовика XIV. Наследовал ребёнком; конец его правления отмечен финансовыми и внешнеполитическими трудностями.', father: 'bourbon_louis_burgundy', children: ['bourbon_louis_ferdinand'] },
        { id: 'bourbon_louis_ferdinand', name: 'Людовик Фердинанд', born: 1729, died: 1765, title: 'Дофин Франции', reign: 'Дофин с 1729 · королём не был', generation: 6,
          bio: 'Сын Людовика XV. Его три сына — Людовик XVI, Людовик XVIII и Карл X — занимали французский престол.', father: 'bourbon_louis_xv', children: ['bourbon_louis_xvi', 'bourbon_louis_xviii', 'bourbon_charles_x'] },
        { id: 'bourbon_louis_xvi', name: 'Людовик XVI', born: 1754, died: 1793, title: 'Король Франции', reign: 'Правление: 1774–1792', generation: 7,
          bio: 'Внук Людовика XV. Созвал Генеральные штаты в 1789 году; после свержения монархии был казнён в 1793-м.', father: 'bourbon_louis_ferdinand', children: ['bourbon_louis_xvii'] },
        { id: 'bourbon_louis_xviii', name: 'Людовик XVIII', born: 1755, died: 1824, title: 'Король Франции', reign: 'Правление: 1814–1815 · 1815–1824', generation: 7,
          bio: 'Брат Людовика XVI. Возвратился на престол после падения Наполеона и принял Хартию 1814 года.', father: 'bourbon_louis_ferdinand' },
        { id: 'bourbon_charles_x', name: 'Карл X', born: 1757, died: 1836, title: 'Король Франции', reign: 'Правление: 1824–1830', generation: 7,
          bio: 'Младший брат Людовика XVI. Его ультрароялистская политика привела к Июльской революции и отречению.', father: 'bourbon_louis_ferdinand', children: ['bourbon_louis_xix', 'bourbon_charles_ferdinand'] },
        { id: 'bourbon_louis_xvii', name: 'Людовик XVII', born: 1785, died: 1795, title: 'Титулярный король Франции', reign: 'Титулярно: 1793–1795 · не правил', generation: 8,
          bio: 'Сын Людовика XVI. Роялисты признали его королём после казни отца, но он умер в заключении ребёнком.', father: 'bourbon_louis_xvi' },
        { id: 'bourbon_louis_xix', name: 'Людовик XIX', born: 1775, died: 1844, title: 'Титулярный король Франции', reign: 'Титулярно: 2 августа 1830 · около 20 минут', generation: 8,
          bio: 'Сын Карла X. Подписал отречение вслед за отцом; его краткий титулярный статус остаётся предметом дискуссии.', father: 'bourbon_charles_x' },
        { id: 'bourbon_charles_ferdinand', name: 'Карл Фердинанд', born: 1778, died: 1820, title: 'Герцог Беррийский', reign: 'Герцог с 1778 · королём не был', generation: 8,
          bio: 'Младший сын Карла X. Его посмертный сын Генрих стал последним претендентом старшей линии.', father: 'bourbon_charles_x', children: ['bourbon_henry_v'] },
        { id: 'bourbon_henry_v', name: 'Генрих V', born: 1820, died: 1883, title: 'Титулярный король Франции', reign: 'Титулярно: 2–9 августа 1830', generation: 9, nickname: 'Чудесное дитя',
          bio: 'Внук Карла X. В детстве был провозглашён королём роялистами, но никогда не правил.', father: 'bourbon_charles_ferdinand' }
      ].map(member)
    }
  });
})();
