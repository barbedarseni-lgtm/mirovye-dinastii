// Исаврийская династия: византийские императоры 717–802 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/isaurians/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    isaurians: {
      id: 'isaurians', name: 'Исаврийская', heading: 'Исаврийская династия', period: '717–802', country: 'Византия',
      intro: 'Пять императоров — от Льва III до Ирины. Иконоборчество и первое самостоятельное правление женщины в Византии.',
      members: [
        { id: 'isaur_leo_iii', name: 'Лев III', born: 'ок. 685', died: 741, title: 'Византийский император', reign: 'Правление: 717–741', generation: 0, nickname: 'Исавр',
          bio: 'Основатель династии. Отразил арабскую осаду Константинополя и начал иконоборческую политику.', children: ['isaur_constantine_v'] },
        { id: 'isaur_constantine_v', name: 'Константин V', born: 718, died: 775, title: 'Византийский император', reign: 'Правление: 741–775 · с мятежом Артавасда', generation: 1, nickname: 'Копроним',
          bio: 'Сын Льва III. Укрепил армию, вёл войны с болгарами и арабами, продолжал иконоборчество.', father: 'isaur_leo_iii', children: ['isaur_leo_iv'] },
        { id: 'isaur_leo_iv', name: 'Лев IV', born: 750, died: 780, title: 'Византийский император', reign: 'Правление: 775–780', generation: 2, nickname: 'Хазар',
          bio: 'Сын Константина V. Продолжал политику отца, но правил недолго.', father: 'isaur_constantine_v', children: ['isaur_constantine_vi'] },
        { id: 'isaur_constantine_vi', name: 'Константин VI', born: 771, died: 'после 797', title: 'Византийский император', reign: 'Правление: 780–797', generation: 3,
          bio: 'Сын Льва IV. Наследовал ребёнком, правил с матерью Ириной и был ею свергнут.', father: 'isaur_leo_iv' },
        { id: 'isaur_irene', name: 'Ирина', born: 'ок. 752', died: 803, title: 'Византийская императрица', reign: 'Самостоятельное правление: 797–802', generation: 3,
          bio: 'Мать Константина VI. В 787 году восстановила иконопочитание; первая женщина, самостоятельно правившая Византией.', children: ['isaur_constantine_vi'] }
      ].map(member)
    }
  });
})();
