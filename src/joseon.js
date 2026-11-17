// Чосон: правители Кореи 1392–1910 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/joseon/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    joseon: {
      id: 'joseon', name: 'Чосон', heading: 'Династия Чосон', period: '1392–1910', country: 'Корея',
      intro: 'Двадцать семь правителей — от Тэджо до Сунджона. Включены короткие правления и период японского протектората.',
      members: [
        { id: 'jos_taejo', name: 'Тэджо', born: 1335, died: 1408, title: 'Основатель Чосон', reign: 'Правление: 1392–1398', generation: 0, bio: 'Основал династию и перенёс столицу в Сеул.', children: ['jos_taejong'] },
        { id: 'jos_jeongjong', name: 'Чонджон', born: 1357, died: 1419, title: 'Король Чосон', reign: 'Правление: 1398–1400', generation: 1, bio: 'Сын Тэджо. Отрёкся в пользу брата.', children: [] },
        { id: 'jos_taejong', name: 'Тэджон', born: 1367, died: 1422, title: 'Король Чосон', reign: 'Правление: 1400–1418', generation: 1, bio: 'Сын Тэджо. Укрепил королевскую власть.', children: ['jos_sejong'] },
        { id: 'jos_sejong', name: 'Седжон', born: 1397, died: 1450, title: 'Король Чосон', reign: 'Правление: 1418–1450', generation: 2, nickname: 'Великий', bio: 'Сын Тэджона. При нём был создан хангыль.', father: 'jos_taejong', children: ['jos_munjong', 'jos_sejo'] },
        { id: 'jos_munjong', name: 'Мунджон', born: 1414, died: 1452, title: 'Король Чосон', reign: 'Правление: 1450–1452', generation: 3, bio: 'Старший сын Седжона. Правил недолго.', father: 'jos_sejong', children: ['jos_danjong'] },
        { id: 'jos_danjong', name: 'Данжон', born: 1441, died: 1457, title: 'Король Чосон', reign: 'Правление: 1452–1455', generation: 4, bio: 'Сын Мунджона. Был свергнут дядей Седжо.', father: 'jos_munjong' },
        { id: 'jos_sejo', name: 'Седжо', born: 1417, died: 1468, title: 'Король Чосон', reign: 'Правление: 1455–1468', generation: 3, bio: 'Сын Седжона. Захватил престол и укрепил армию.', father: 'jos_sejong', children: ['jos_yejong'] },
        { id: 'jos_yejong', name: 'Йеджон', born: 1450, died: 1469, title: 'Король Чосон', reign: 'Правление: 1468–1469', generation: 4, bio: 'Сын Седжо. Умер молодым.', father: 'jos_sejo', children: ['jos_seongjong'] },
        { id: 'jos_seongjong', name: 'Сонджон', born: 1457, died: 1494, title: 'Король Чосон', reign: 'Правление: 1469–1494', generation: 5, bio: 'Сын Йеджона. Завершил основные своды законов.', father: 'jos_yejong', children: ['jos_yeonsan', 'jos_jungjong'] },
        { id: 'jos_yeonsan', name: 'Ёнсангун', born: 1476, died: 1506, title: 'Король Чосон', reign: 'Правление: 1494–1506', generation: 6, bio: 'Сын Сонджона. Был свергнут.', father: 'jos_seongjong' },
        { id: 'jos_jungjong', name: 'Чунджон', born: 1488, died: 1544, title: 'Король Чосон', reign: 'Правление: 1506–1544', generation: 6, bio: 'Сын Сонджона. Пришёл к власти после свержения брата.', father: 'jos_seongjong', children: ['jos_injong'] },
        { id: 'jos_injong', name: 'Инджон', born: 1515, died: 1545, title: 'Король Чосон', reign: 'Правление: 1544–1545', generation: 7, bio: 'Сын Чунджона. Правил меньше года.', father: 'jos_jungjong', children: ['jos_myeongjong'] },
        { id: 'jos_myeongjong', name: 'Мёнджон', born: 1534, died: 1567, title: 'Король Чосон', reign: 'Правление: 1545–1567', generation: 8, bio: 'Сын Инджона. При нём влияние внешней родни росло.', father: 'jos_injong', children: ['jos_seonjo'] },
        { id: 'jos_seonjo', name: 'Сонджо', born: 1552, died: 1608, title: 'Король Чосон', reign: 'Правление: 1567–1608', generation: 9, bio: 'Сын Мёнджона. Его правление включало Имджинскую войну.', father: 'jos_myeongjong', children: ['jos_gwanghae', 'jos_injo'] },
        { id: 'jos_gwanghae', name: 'Кванхэгун', born: 1575, died: 1641, title: 'Король Чосон', reign: 'Правление: 1608–1623', generation: 10, bio: 'Сын Сонджо. Был свергнут.', father: 'jos_seonjo' },
        { id: 'jos_injo', name: 'Инджо', born: 1595, died: 1649, title: 'Король Чосон', reign: 'Правление: 1623–1649', generation: 10, bio: 'Племянник Сонджо. Пережил вторжения Маньчжоу.', children: ['jos_hyojong'] },
        { id: 'jos_hyojong', name: 'Хёджон', born: 1619, died: 1659, title: 'Король Чосон', reign: 'Правление: 1649–1659', generation: 11, bio: 'Сын Инджо. Проводил антиманьчжурскую политику.', father: 'jos_injo', children: ['jos_hyeonjong'] },
        { id: 'jos_hyeonjong', name: 'Хёнджон', born: 1641, died: 1674, title: 'Король Чосон', reign: 'Правление: 1659–1674', generation: 12, bio: 'Сын Хёджона. Правил в условиях фракционной борьбы.', father: 'jos_hyojong', children: ['jos_sukjong'] },
        { id: 'jos_sukjong', name: 'Сукджон', born: 1661, died: 1720, title: 'Король Чосон', reign: 'Правление: 1674–1720', generation: 13, bio: 'Сын Хёнджона. Долгое правление при фракционной политике.', father: 'jos_hyeonjong', children: ['jos_gyeongjong', 'jos_yeongjo'] },
        { id: 'jos_gyeongjong', name: 'Кёнджон', born: 1688, died: 1724, title: 'Король Чосон', reign: 'Правление: 1720–1724', generation: 14, bio: 'Старший сын Сукджона.', father: 'jos_sukjong' },
        { id: 'jos_yeongjo', name: 'Ёнджо', born: 1694, died: 1776, title: 'Король Чосон', reign: 'Правление: 1724–1776', generation: 14, bio: 'Сын Сукджона. Правил пятьдесят два года.', father: 'jos_sukjong', children: ['jos_jeongjo'] },
        { id: 'jos_jeongjo', name: 'Чонджо', born: 1752, died: 1800, title: 'Король Чосон', reign: 'Правление: 1776–1800', generation: 15, bio: 'Внук Ёнджо. Поддерживал реформы и сирхак.', father: 'jos_yeongjo', children: ['jos_sunjo'] },
        { id: 'jos_sunjo', name: 'Сунджо', born: 1790, died: 1834, title: 'Король Чосон', reign: 'Правление: 1800–1834', generation: 16, bio: 'Сын Чонджо. Правил под влиянием родни.', father: 'jos_jeongjo', children: ['jos_heonjong'] },
        { id: 'jos_heonjong', name: 'Хонджон', born: 1827, died: 1849, title: 'Король Чосон', reign: 'Правление: 1834–1849', generation: 17, bio: 'Внук Сунджо. Умер молодым.', children: ['jos_cheoljong'] },
        { id: 'jos_cheoljong', name: 'Чхольджон', born: 1831, died: 1864, title: 'Король Чосон', reign: 'Правление: 1849–1864', generation: 18, bio: 'Потомок Ёнджо. Его правление отмечено коррупцией и волнениями.', children: ['jos_gojong'] },
        { id: 'jos_gojong', name: 'Коджон', born: 1852, died: 1919, title: 'Король Чосон; император Корейской империи', reign: 'Король: 1864–1897 · император: 1897–1907', generation: 19, bio: 'Потомок дальней ветви. Провозгласил империю, но был отстранён Японией.', children: ['jos_sunjong'] },
        { id: 'jos_sunjong', name: 'Сунджон', born: 1874, died: 1926, title: 'Последний император Кореи', reign: 'Правление: 1907–1910', generation: 20, bio: 'Сын Коджона. Последний монарх Чосон перед аннексией.', father: 'jos_gojong' }
      ].map(member)
    }
  });
})();
