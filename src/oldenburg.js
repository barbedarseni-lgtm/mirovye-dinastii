// Ольденбургская династия: датская королевская линия 1448–1863 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/oldenburg/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    oldenburg: {
      id: 'oldenburg', name: 'Ольденбургская', heading: 'Ольденбургская династия', period: '1448–1863', country: 'Дания · Норвегия',
      intro: 'Шестнадцать датских королей и наследственный принц Фредерик для связи Фредерика VI с Кристианом VIII. Глюксбурги представлены отдельно.',
      members: [
        { id: 'old_christian_i', name: 'Кристиан I', born: 1426, died: 1481, title: 'Король Дании, Норвегии и Швеции', reign: 'Дания: 1448–1481 · Норвегия: 1450–1481 · Швеция: 1457–1464', generation: 0, bio: 'Основатель датской линии Ольденбургов и Кальмарской унии.', children: ['old_hans', 'old_frederick_i'] },
        { id: 'old_hans', name: 'Ханс', born: 1455, died: 1513, title: 'Король Дании и Норвегии', reign: 'Дания: 1481–1513 · Швеция: 1497–1501', generation: 1, bio: 'Сын Кристиана I. Ненадолго восстановил власть союзного короля в Швеции.', father: 'old_christian_i', children: ['old_christian_ii'] },
        { id: 'old_christian_ii', name: 'Кристиан II', born: 1481, died: 1559, title: 'Король Дании и Норвегии', reign: 'Дания: 1513–1523 · Швеция: 1520–1521', generation: 2, nickname: 'Северный Нерон', bio: 'Сын Ханса. Стокгольмская кровавая баня и свержение в Дании завершили его правление.', father: 'old_hans' },
        { id: 'old_frederick_i', name: 'Фредерик I', born: 1471, died: 1533, title: 'Король Дании и Норвегии', reign: 'Правление: 1523–1533', generation: 1, bio: 'Сын Кристиана I. Занял престол после свержения племянника Кристиана II.', father: 'old_christian_i', children: ['old_christian_iii'] },
        { id: 'old_christian_iii', name: 'Кристиан III', born: 1503, died: 1559, title: 'Король Дании и Норвегии', reign: 'Правление: 1536–1559', generation: 2, bio: 'Сын Фредерика I. После гражданской войны провёл лютеранскую реформацию.', father: 'old_frederick_i', children: ['old_frederick_ii'] },
        { id: 'old_frederick_ii', name: 'Фредерик II', born: 1534, died: 1588, title: 'Король Дании и Норвегии', reign: 'Правление: 1559–1588', generation: 3, bio: 'Сын Кристиана III. Вёл Северную семилетнюю войну и поддерживал науку.', father: 'old_christian_iii', children: ['old_christian_iv'] },
        { id: 'old_christian_iv', name: 'Кристиан IV', born: 1577, died: 1648, title: 'Король Дании и Норвегии', reign: 'Правление: 1588–1648', generation: 4, bio: 'Сын Фредерика II. Его долгое правление известно строительством и участием в Тридцатилетней войне.', father: 'old_frederick_ii', children: ['old_frederick_iii'] },
        { id: 'old_frederick_iii', name: 'Фредерик III', born: 1609, died: 1670, title: 'Король Дании и Норвегии', reign: 'Правление: 1648–1670', generation: 5, bio: 'Сын Кристиана IV. После войн со Швецией ввёл наследственную абсолютную монархию.', father: 'old_christian_iv', children: ['old_christian_v'] },
        { id: 'old_christian_v', name: 'Кристиан V', born: 1646, died: 1699, title: 'Король Дании и Норвегии', reign: 'Правление: 1670–1699', generation: 6, bio: 'Сын Фредерика III. Принял Датский законник 1683 года.', father: 'old_frederick_iii', children: ['old_frederick_iv'] },
        { id: 'old_frederick_iv', name: 'Фредерик IV', born: 1671, died: 1730, title: 'Король Дании и Норвегии', reign: 'Правление: 1699–1730', generation: 7, bio: 'Сын Кристиана V. Правил во время Северной войны.', father: 'old_christian_v', children: ['old_christian_vi'] },
        { id: 'old_christian_vi', name: 'Кристиан VI', born: 1699, died: 1746, title: 'Король Дании и Норвегии', reign: 'Правление: 1730–1746', generation: 8, bio: 'Сын Фредерика IV. Его двор отличался пиетизмом и строгими нравами.', father: 'old_frederick_iv', children: ['old_frederick_v'] },
        { id: 'old_frederick_v', name: 'Фредерик V', born: 1723, died: 1766, title: 'Король Дании и Норвегии', reign: 'Правление: 1746–1766', generation: 9, bio: 'Сын Кристиана VI. Эпоха его правления связана с развитием торговли и искусств.', father: 'old_christian_vi', children: ['old_christian_vii', 'old_frederick_heir'] },
        { id: 'old_christian_vii', name: 'Кристиан VII', born: 1749, died: 1808, title: 'Король Дании и Норвегии', reign: 'Правление: 1766–1808', generation: 10, bio: 'Сын Фредерика V. Из-за болезни фактическая власть неоднократно переходила к регентам.', father: 'old_frederick_v', children: ['old_frederick_vi'] },
        { id: 'old_frederick_heir', name: 'Фредерик', born: 1753, died: 1805, title: 'Наследственный принц Дании', reign: 'Королём не был', generation: 10, bio: 'Младший сын Фредерика V. Был регентом при племяннике Фредерике VI и отцом будущего короля Кристиана VIII.', father: 'old_frederick_v', children: ['old_christian_viii'] },
        { id: 'old_frederick_vi', name: 'Фредерик VI', born: 1768, died: 1839, title: 'Король Дании; до 1814 года и Норвегии', reign: 'Дания: 1808–1839 · Норвегия: 1808–1814', generation: 11, bio: 'Сын Кристиана VII. После наполеоновских войн уступил Норвегию Швеции.', father: 'old_christian_vii' },
        { id: 'old_christian_viii', name: 'Кристиан VIII', born: 1786, died: 1848, title: 'Король Дании', reign: 'Дания: 1839–1848 · Норвегия: 1814', generation: 11, bio: 'Сын наследственного принца Фредерика. Ненадолго был королём Норвегии в 1814 году.', father: 'old_frederick_heir', children: ['old_frederick_vii'] },
        { id: 'old_frederick_vii', name: 'Фредерик VII', born: 1808, died: 1863, title: 'Последний датский король старшей линии Ольденбургов', reign: 'Правление: 1848–1863', generation: 12, bio: 'Сын Кристиана VIII. Принял конституцию 1849 года и умер без наследников.', father: 'old_christian_viii' }
      ].map(member)
    }
  });
})();
