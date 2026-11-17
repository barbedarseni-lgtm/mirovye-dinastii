// Османы: султаны 1299–1922 годов и последний халиф.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/ottomans/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или фотография',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    ottomans: {
      id: 'ottomans', name: 'Османы', heading: 'Династия Османов', period: '1299–1924', country: 'Османская империя',
      intro: 'Тридцать шесть султанов и последний халиф — от Османа I до Абдул-Меджида II. Повторные правления и короткое правление Мурада V включены.',
      members: [
        { id: 'ott_osman_i', name: 'Осман I', born: 1258, died: 1323, title: 'Основатель Османского государства', reign: '1299–1323', generation: 0, bio: 'Основал династию.', children: ['ott_orhan'] },
        { id: 'ott_orhan', name: 'Орхан', born: 1281, died: 1362, title: 'Султан', reign: '1323–1362', generation: 1, bio: 'Расширил владения в Анатолии и Европе.', father: 'ott_osman_i', children: ['ott_murad_i'] },
        { id: 'ott_murad_i', name: 'Мурад I', born: 1326, died: 1389, title: 'Султан', reign: '1362–1389', generation: 2, bio: 'Закрепился на Балканах.', father: 'ott_orhan', children: ['ott_bayezid_i'] },
        { id: 'ott_bayezid_i', name: 'Баязид I', born: 1360, died: 1403, title: 'Султан', reign: '1389–1402', generation: 3, bio: 'Попал в плен к Тимуру.', father: 'ott_murad_i', children: ['ott_mehmed_i'] },
        { id: 'ott_mehmed_i', name: 'Мехмед I', born: 1389, died: 1421, title: 'Султан', reign: '1413–1421', generation: 4, bio: 'Восстановил единство после междуцарствия.', father: 'ott_bayezid_i', children: ['ott_murad_ii'] },
        { id: 'ott_murad_ii', name: 'Мурад II', born: 1404, died: 1451, title: 'Султан', reign: '1421–1444 · 1446–1451', generation: 5, bio: 'Дважды правил и победил крестоносцев при Варне.', father: 'ott_mehmed_i', children: ['ott_mehmed_ii'] },
        { id: 'ott_mehmed_ii', name: 'Мехмед II', born: 1432, died: 1481, title: 'Султан', reign: '1451–1481', generation: 6, nickname: 'Завоеватель', bio: 'Завоевал Константинополь.', father: 'ott_murad_ii', children: ['ott_bayezid_ii'] },
        { id: 'ott_bayezid_ii', name: 'Баязид II', born: 1447, died: 1512, title: 'Султан', reign: '1481–1512', generation: 7, bio: 'Укреплял флот и принял изгнанных евреев.', father: 'ott_mehmed_ii', children: ['ott_selim_i'] },
        { id: 'ott_selim_i', name: 'Селим I', born: 1470, died: 1520, title: 'Султан', reign: '1512–1520', generation: 8, nickname: 'Грозный', bio: 'Завоевал Сирию и Египет.', father: 'ott_bayezid_ii', children: ['ott_suleiman_i'] },
        { id: 'ott_suleiman_i', name: 'Сулейман I', born: 1494, died: 1566, title: 'Султан', reign: '1520–1566', generation: 9, nickname: 'Великолепный', bio: 'При нём империя достигла наибольшего могущества.', father: 'ott_selim_i', children: ['ott_selim_ii'] },
        { id: 'ott_selim_ii', name: 'Селим II', born: 1524, died: 1574, title: 'Султан', reign: '1566–1574', generation: 10, bio: 'Сын Сулеймана I.', father: 'ott_suleiman_i', children: ['ott_murad_iii'] },
        { id: 'ott_murad_iii', name: 'Мурад III', born: 1546, died: 1595, title: 'Султан', reign: '1574–1595', generation: 11, bio: 'Правил при влиянии гарема.', father: 'ott_selim_ii', children: ['ott_mehmed_iii'] },
        { id: 'ott_mehmed_iii', name: 'Мехмед III', born: 1566, died: 1603, title: 'Султан', reign: '1595–1603', generation: 12, bio: 'Последний султан, лично участвовавший в походе.', father: 'ott_murad_iii', children: ['ott_ahmed_i', 'ott_mustafa_i'] },
        { id: 'ott_ahmed_i', name: 'Ахмед I', born: 1590, died: 1617, title: 'Султан', reign: '1603–1617', generation: 13, bio: 'Построил Голубую мечеть.', father: 'ott_mehmed_iii', children: ['ott_osman_ii', 'ott_murad_iv', 'ott_ibrahim'] },
        { id: 'ott_mustafa_i', name: 'Мустафа I', born: 1591, died: 1639, title: 'Султан', reign: '1617–1618 · 1622–1623', generation: 13, bio: 'Дважды занимал престол.', father: 'ott_mehmed_iii' },
        { id: 'ott_osman_ii', name: 'Осман II', born: 1604, died: 1622, title: 'Султан', reign: '1618–1622', generation: 14, bio: 'Был убит янычарами.', father: 'ott_ahmed_i' },
        { id: 'ott_murad_iv', name: 'Мурад IV', born: 1612, died: 1640, title: 'Султан', reign: '1623–1640', generation: 14, bio: 'Вернул Багдад.', father: 'ott_ahmed_i' },
        { id: 'ott_ibrahim', name: 'Ибрахим', born: 1615, died: 1648, title: 'Султан', reign: '1640–1648', generation: 14, bio: 'Был свергнут и убит.', father: 'ott_ahmed_i', children: ['ott_mehmed_iv'] },
        { id: 'ott_mehmed_iv', name: 'Мехмед IV', born: 1642, died: 1693, title: 'Султан', reign: '1648–1687', generation: 15, bio: 'Его правление завершилось после Венской войны.', father: 'ott_ibrahim', children: ['ott_mustafa_ii', 'ott_ahmed_iii'] },
        { id: 'ott_suleiman_ii', name: 'Сулейман II', born: 1642, died: 1691, title: 'Султан', reign: '1687–1691', generation: 15, bio: 'Брат Мехмеда IV.' },
        { id: 'ott_ahmed_ii', name: 'Ахмед II', born: 1643, died: 1695, title: 'Султан', reign: '1691–1695', generation: 15, bio: 'Продолжал войну с Австрией.' },
        { id: 'ott_mustafa_ii', name: 'Мустафа II', born: 1664, died: 1703, title: 'Султан', reign: '1695–1703', generation: 16, bio: 'Заключил Карловицкий мир.', father: 'ott_mehmed_iv' },
        { id: 'ott_ahmed_iii', name: 'Ахмед III', born: 1673, died: 1736, title: 'Султан', reign: '1703–1730', generation: 16, bio: 'Его эпоха известна как эпоха тюльпанов.', father: 'ott_mehmed_iv', children: ['ott_mahmud_i'] },
        { id: 'ott_mahmud_i', name: 'Махмуд I', born: 1696, died: 1754, title: 'Султан', reign: '1730–1754', generation: 17, bio: 'Вёл войны с Австрией и Персией.', father: 'ott_ahmed_iii' },
        { id: 'ott_osman_iii', name: 'Осман III', born: 1699, died: 1757, title: 'Султан', reign: '1754–1757', generation: 17, bio: 'Правил недолго.' },
        { id: 'ott_mustafa_iii', name: 'Мустафа III', born: 1717, died: 1774, title: 'Султан', reign: '1757–1774', generation: 17, bio: 'Проводил военные реформы.' },
        { id: 'ott_abdulhamid_i', name: 'Абдулхамид I', born: 1725, died: 1789, title: 'Султан', reign: '1774–1789', generation: 18, bio: 'Подписал Кючук-Кайнарджийский мир.' },
        { id: 'ott_selim_iii', name: 'Селим III', born: 1761, died: 1808, title: 'Султан', reign: '1789–1807', generation: 19, bio: 'Начал реформу Нового порядка.' },
        { id: 'ott_mustafa_iv', name: 'Мустафа IV', born: 1779, died: 1808, title: 'Султан', reign: '1807–1808', generation: 19, bio: 'Кратко правил после свержения Селима III.' },
        { id: 'ott_mahmud_ii', name: 'Махмуд II', born: 1785, died: 1839, title: 'Султан', reign: '1808–1839', generation: 19, bio: 'Уничтожил янычарский корпус.', children: ['ott_abdulmecid_i', 'ott_abdulaziz'] },
        { id: 'ott_abdulmecid_i', name: 'Абдул-Меджид I', born: 1823, died: 1861, title: 'Султан', reign: '1839–1861', generation: 20, bio: 'Проводил Танзимат.', father: 'ott_mahmud_ii', children: ['ott_murad_v', 'ott_abdulhamid_ii', 'ott_mehmed_v', 'ott_mehmed_vi'] },
        { id: 'ott_abdulaziz', name: 'Абдул-Азиз', born: 1830, died: 1876, title: 'Султан', reign: '1861–1876', generation: 20, bio: 'Был свергнут во время кризиса.', father: 'ott_mahmud_ii' },
        { id: 'ott_murad_v', name: 'Мурад V', born: 1840, died: 1904, title: 'Султан', reign: '1876 · 93 дня', generation: 21, bio: 'Был низложен по состоянию здоровья.', father: 'ott_abdulmecid_i' },
        { id: 'ott_abdulhamid_ii', name: 'Абдулхамид II', born: 1842, died: 1918, title: 'Султан', reign: '1876–1909', generation: 21, nickname: 'Кровавый султан', bio: 'Правил авторитарно и был свергнут младотурками.', father: 'ott_abdulmecid_i' },
        { id: 'ott_mehmed_v', name: 'Мехмед V', born: 1844, died: 1918, title: 'Султан', reign: '1909–1918', generation: 21, bio: 'Правил во время Первой мировой войны.', father: 'ott_abdulmecid_i' },
        { id: 'ott_mehmed_vi', name: 'Мехмед VI', born: 1861, died: 1926, title: 'Последний османский султан', reign: '1918–1922', generation: 21, bio: 'Покинул страну после упразднения султаната.', father: 'ott_abdulmecid_i' },
        { id: 'ott_abdulmecid_ii', name: 'Абдул-Меджид II', born: 1868, died: 1944, title: 'Последний османский халиф', reign: 'Халиф: 1922–1924', generation: 22, bio: 'Последний халиф династии; султаном не был.' }
      ].map(member)
    }
  });
})();
