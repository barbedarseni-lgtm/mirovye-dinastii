// Великие Моголы: падишахи Индии 1526–1857 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/mughals/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    mughals: {
      id: 'mughals', name: 'Великие Моголы', heading: 'Династия Великих Моголов', period: '1526–1857', country: 'Индия',
      intro: 'Девятнадцать падишахов — от Бабура до Бахадур-шаха II. Краткие правления эпохи распада включены.',
      members: [
        { id: 'mug_babur', name: 'Бабур', born: 1483, died: 1530, title: 'Основатель империи', reign: '1526–1530', generation: 0, bio: 'Победил при Панипате и основал династию.', children: ['mug_humayun'] },
        { id: 'mug_humayun', name: 'Хумаюн', born: 1508, died: 1556, title: 'Падишах', reign: '1530–1540 · 1555–1556', generation: 1, bio: 'Потерял и вернул престол.', father: 'mug_babur', children: ['mug_akbar'] },
        { id: 'mug_akbar', name: 'Акбар', born: 1542, died: 1605, title: 'Падишах', reign: '1556–1605', generation: 2, nickname: 'Великий', bio: 'Расширил империю и провёл административные реформы.', father: 'mug_humayun', children: ['mug_jahangir'] },
        { id: 'mug_jahangir', name: 'Джахангир', born: 1569, died: 1627, title: 'Падишах', reign: '1605–1627', generation: 3, bio: 'Сын Акбара. Покровительствовал живописи.', father: 'mug_akbar', children: ['mug_shah_jahan'] },
        { id: 'mug_shah_jahan', name: 'Шах Джахан', born: 1592, died: 1666, title: 'Падишах', reign: '1628–1658', generation: 4, bio: 'Построил Тадж-Махал.', father: 'mug_jahangir', children: ['mug_aurangzeb'] },
        { id: 'mug_aurangzeb', name: 'Аурангзеб', born: 1618, died: 1707, title: 'Падишах', reign: '1658–1707', generation: 5, nickname: 'Аламгир', bio: 'Расширил империю на юг, но истощил её войнами.', father: 'mug_shah_jahan', children: ['mug_shah_alam_i'] },
        { id: 'mug_shah_alam_i', name: 'Шах Алам I', born: 1643, died: 1712, title: 'Падишах', reign: '1707–1712', generation: 6, bio: 'Старший сын Аурангзеба.', father: 'mug_aurangzeb', children: ['mug_jahandar'] },
        { id: 'mug_jahandar', name: 'Джахандар Шах', born: 1661, died: 1713, title: 'Падишах', reign: '1712–1713', generation: 7, bio: 'Был свергнут племянником.', father: 'mug_shah_alam_i' },
        { id: 'mug_farrukhsiyar', name: 'Фаррухсияр', born: 1683, died: 1719, title: 'Падишах', reign: '1713–1719', generation: 8, bio: 'Правил под контролем саййидов.' },
        { id: 'mug_rafi_darajat', name: 'Рафи уд-Дараджат', born: 1699, died: 1719, title: 'Падишах', reign: '1719', generation: 9, bio: 'Кратко правил после Фаррухсияра.' },
        { id: 'mug_rafi_daula', name: 'Рафи уд-Даула', born: 1696, died: 1719, title: 'Падишах', reign: '1719', generation: 9, bio: 'Также известен как Шах Джахан II.' },
        { id: 'mug_muhammad_shah', name: 'Мухаммад Шах', born: 1702, died: 1748, title: 'Падишах', reign: '1719–1748', generation: 10, bio: 'Пережил вторжение Надир-шаха.' },
        { id: 'mug_muhammad_ibrahim', name: 'Мухаммад Ибрагим', born: 1703, died: 1746, title: 'Соперник за престол', reign: '1720', generation: 10, bio: 'Кратко был провозглашён падишахом.' },
        { id: 'mug_ahmad_shah', name: 'Ахмад Шах', born: 1725, died: 1775, title: 'Падишах', reign: '1748–1754', generation: 11, bio: 'Потерял реальную власть.' },
        { id: 'mug_alamgir_ii', name: 'Аламгир II', born: 1699, died: 1759, title: 'Падишах', reign: '1754–1759', generation: 11, bio: 'Был убит своим визирем.' },
        { id: 'mug_shah_jahan_iii', name: 'Шах Джахан III', born: 1711, died: 1772, title: 'Падишах', reign: '1759–1760', generation: 12, bio: 'Краткое правление.' },
        { id: 'mug_shah_alam_ii', name: 'Шах Алам II', born: 1728, died: 1806, title: 'Падишах', reign: '1760–1806', generation: 12, bio: 'Правил в период британской экспансии.' },
        { id: 'mug_akbar_ii', name: 'Акбар II', born: 1760, died: 1837, title: 'Падишах', reign: '1806–1837', generation: 13, bio: 'Номинальный монарх под британским контролем.' },
        { id: 'mug_bahadur_ii', name: 'Бахадур Шах II', born: 1775, died: 1862, title: 'Последний падишах', reign: '1837–1857', generation: 14, bio: 'Был низложен после восстания сипаев.' }
      ].map(member)
    }
  });
})();
