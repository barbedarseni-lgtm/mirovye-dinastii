// Антигониды: правители Македонии 306–168 годов до н. э.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/antigonids/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    antigonids: {
      id: 'antigonids', name: 'Антигониды', heading: 'Династия Антигонидов', period: '306–168 до н. э.', country: 'Македония',
      intro: 'Семь правителей — от Антигона I до Персея. Перерывы в контроле над Македонией указаны в датах.',
      members: [
        { id: 'anti_antigonus_i', name: 'Антигон I', born: 'ок. 382 до н. э.', died: '301 до н. э.', title: 'Царь Антигонидов', reign: 'Правление: 306–301 до н. э.', generation: 0, nickname: 'Одноглазый',
          bio: 'Полководец эпохи диадохов и основатель династии. Погиб при Ипсе.', children: ['anti_demeterius_i'] },
        { id: 'anti_demeterius_i', name: 'Деметрий I', born: '337 до н. э.', died: '283 до н. э.', title: 'Царь Македонии', reign: 'Царский титул: 306–283 · Македония: 294–288 до н. э.', generation: 1, nickname: 'Полиоркет',
          bio: 'Сын Антигона I. Известен осадой Родоса и нестабильным правлением.', father: 'anti_antigonus_i', children: ['anti_antigonus_ii'] },
        { id: 'anti_antigonus_ii', name: 'Антигон II', born: 'ок. 319 до н. э.', died: '239 до н. э.', title: 'Царь Македонии', reign: 'Правление: 276–239 до н. э.', generation: 2, nickname: 'Гонат',
          bio: 'Сын Деметрия I. Укрепил власть Антигонидов над Македонией.', father: 'anti_demeterius_i', children: ['anti_demeterius_ii'] },
        { id: 'anti_demeterius_ii', name: 'Деметрий II', born: 'ок. 275 до н. э.', died: '229 до н. э.', title: 'Царь Македонии', reign: 'Правление: 239–229 до н. э.', generation: 3,
          bio: 'Сын Антигона II. Вёл войны с греческими союзами.', father: 'anti_antigonus_ii', children: ['anti_philip_v'] },
        { id: 'anti_antigonus_iii', name: 'Антигон III', born: 'ок. 263 до н. э.', died: '221 до н. э.', title: 'Царь Македонии', reign: 'Правление: 229–221 до н. э.', generation: 4, nickname: 'Досон',
          bio: 'Опекун Филиппа V, затем царь. Победил Клеомена III при Селласии.' },
        { id: 'anti_philip_v', name: 'Филипп V', born: '238 до н. э.', died: '179 до н. э.', title: 'Царь Македонии', reign: 'Правление: 221–179 до н. э.', generation: 4,
          bio: 'Сын Деметрия II. Вёл Македонские войны против Рима.', father: 'anti_demeterius_ii', children: ['anti_perseus'] },
        { id: 'anti_perseus', name: 'Персей', born: 'ок. 212 до н. э.', died: 'ок. 166 до н. э.', title: 'Последний царь Антигонидов', reign: 'Правление: 179–168 до н. э.', generation: 5,
          bio: 'Сын Филиппа V. Поражение при Пидне завершило независимую Македонию.', father: 'anti_philip_v' }
      ].map(member)
    }
  });
})();
