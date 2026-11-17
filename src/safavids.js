// Сефевиды: шахи Ирана 1501–1773 годов, включая поздних номинальных правителей.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/safavids/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    safavids: {
      id: 'safavids', name: 'Сефевиды', heading: 'Династия Сефевидов', period: '1501–1773', country: 'Иран',
      intro: 'Тринадцать шахов — от Исмаила I до Исмаила III. Поздние номинальные правители отмечены отдельно.',
      members: [
        { id: 'saf_ismail_i', name: 'Исмаил I', born: 1487, died: 1524, title: 'Основатель Сефевидского государства', reign: 'Правление: 1501–1524', generation: 0, bio: 'Объединил Иран и утвердил шиитский ислам как государственную религию.', children: ['saf_tahmasp_i'] },
        { id: 'saf_tahmasp_i', name: 'Тахмасп I', born: 1514, died: 1576, title: 'Шах Ирана', reign: 'Правление: 1524–1576', generation: 1, bio: 'Сын Исмаила I. Отражал нападения османов и узбеков.', father: 'saf_ismail_i', children: ['saf_ismail_ii', 'saf_mohammad'] },
        { id: 'saf_ismail_ii', name: 'Исмаил II', born: 1537, died: 1577, title: 'Шах Ирана', reign: 'Правление: 1576–1577', generation: 2, bio: 'Сын Тахмаспа I. Правил недолго после долгого заключения.', father: 'saf_tahmasp_i' },
        { id: 'saf_mohammad', name: 'Мохаммад Ходабанда', born: 1532, died: 1595, title: 'Шах Ирана', reign: 'Правление: 1578–1587', generation: 2, nickname: 'Ходабанда', bio: 'Сын Тахмаспа I. Из-за слабого зрения власть делили знать и придворные.', father: 'saf_tahmasp_i', children: ['saf_abbas_i'] },
        { id: 'saf_abbas_i', name: 'Аббас I', born: 1571, died: 1629, title: 'Шах Ирана', reign: 'Правление: 1587–1629', generation: 3, nickname: 'Великий', bio: 'Сын Мохаммада. Реформировал армию и перенёс столицу в Исфахан.', father: 'saf_mohammad', children: ['saf_safi'] },
        { id: 'saf_safi', name: 'Сефи', born: 1611, died: 1642, title: 'Шах Ирана', reign: 'Правление: 1629–1642', generation: 4, bio: 'Внук Аббаса I. Его правление связано с репрессиями при дворе.', father: 'saf_abbas_i', children: ['saf_abbas_ii'] },
        { id: 'saf_abbas_ii', name: 'Аббас II', born: 1632, died: 1666, title: 'Шах Ирана', reign: 'Правление: 1642–1666', generation: 5, bio: 'Сын Сефи. Наследовал ребёнком и вернул Кандагар.', father: 'saf_safi', children: ['saf_suleiman_i'] },
        { id: 'saf_suleiman_i', name: 'Сулейман', born: 1648, died: 1694, title: 'Шах Ирана', reign: 'Правление: 1666–1694', generation: 6, bio: 'Сын Аббаса II. Его правление отмечено экономическими трудностями.', father: 'saf_abbas_ii', children: ['saf_husayn'] },
        { id: 'saf_husayn', name: 'Султан Хусейн', born: 1668, died: 1726, title: 'Шах Ирана', reign: 'Правление: 1694–1722', generation: 7, bio: 'Сын Сулеймана. Капитулировал перед афганцами после осады Исфахана.', father: 'saf_suleiman_i', children: ['saf_tahmasp_ii'] },
        { id: 'saf_tahmasp_ii', name: 'Тахмасп II', born: 1704, died: 1740, title: 'Шах Ирана', reign: 'Правление: 1722–1732', generation: 8, bio: 'Сын Хусейна. Правил при поддержке Надира и был низложен.', father: 'saf_husayn', children: ['saf_abbas_iii'] },
        { id: 'saf_abbas_iii', name: 'Аббас III', born: 1732, died: 1740, title: 'Номинальный шах Ирана', reign: 'Правление: 1732–1736', generation: 9, bio: 'Сын Тахмаспа II. Был марионеткой Надира.', father: 'saf_tahmasp_ii' },
        { id: 'saf_suleiman_ii', name: 'Сулейман II', born: 'ок. 1714', died: 1763, title: 'Номинальный шах Ирана', reign: 'Правление: 1749–1750', generation: 8, bio: 'Был возведён на престол в борьбе за власть.' },
        { id: 'saf_ismail_iii', name: 'Исмаил III', born: 'ок. 1733', died: 1773, title: 'Последний номинальный Сефевидский шах', reign: 'Правление: 1750–1773', generation: 9, bio: 'Номинальный правитель при Карим-хане Занде.' }
      ].map(member)
    }
  });
})();
