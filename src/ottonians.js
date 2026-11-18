// Оттоновская (Саксонская) династия: короли Германии и императоры Священной Римской империи (919–1024).
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/ottonians/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет, печать или миниатюра',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    ottonians: {
      id: 'ottonians', name: 'Оттоновская', heading: 'Оттоновская (Саксонская) династия', period: '919–1024', country: 'Германия · Священная Римская империя',
      intro: 'Семь правителей — от Генриха I Птицелова до Генриха II Святого. Династия, создавшая Священную Римскую империю и «Оттоновское возрождение» в искусстве.',
      members: [
        { id: 'ott_henry_i', name: 'Генрих I', born: 'ок. 876', died: 936, title: 'Король Германии', reign: 'Правление: 919–936', generation: 0, nickname: 'Птицелов', bio: 'Первый король Саксонской династии. Прозвище «Птицелов» связано с легендой о том, что его застали за ловлей птиц, когда пришли с вестью об избрании.', children: ['ott_otto_i', 'ott_henry_i_bavaria'] },
        { id: 'ott_otto_i', name: 'Оттон I', born: 912, died: 973, title: 'Император Священной Римской империи', reign: 'Германия: 936–973 · Император: 962–973', generation: 1, nickname: 'Великий', bio: 'Сын Генриха I. Победил венгров при Лехфельде (955), в 962 году коронован императором в Риме. Основатель Священной Римской империи.', father: 'ott_henry_i', children: ['ott_otto_ii'] },
        { id: 'ott_henry_i_bavaria', name: 'Генрих I', born: 'ок. 919', died: 955, title: 'Герцог Баварии', reign: 'Герцог: 947–955', generation: 1, bio: 'Младший брат Оттона I. Получил Баварию, его потомки правили герцогством и дали империи Генриха II.', father: 'ott_henry_i', children: ['ott_henry_ii_father'] },
        { id: 'ott_otto_ii', name: 'Оттон II', born: 955, died: 983, title: 'Император Священной Римской империи', reign: 'Правление: 973–983', generation: 2, nickname: 'Рыжий', bio: 'Сын Оттона I. Прозвище «Рыжий» (Rufus) — за цвет волос. Потерпел поражение от сарацин при Капоколонне (982).', father: 'ott_otto_i', children: ['ott_otto_iii'] },
        { id: 'ott_henry_ii_father', name: 'Генрих II', born: 951, died: 995, title: 'Герцог Баварии', reign: 'Герцог: 955–976, 985–995', generation: 2, nickname: 'Строптивый', bio: 'Сын Генриха I Баварского. Прозвище «Строптивый» (Zänker) — за постоянные мятежи против императора. Отец императора Генриха II.', father: 'ott_henry_i_bavaria', children: ['ott_henry_ii'] },
        { id: 'ott_otto_iii', name: 'Оттон III', born: 980, died: 1002, title: 'Император Священной Римской империи', reign: 'Правление: 983–1002', generation: 3, nickname: 'Чудо мира', bio: 'Сын Оттона II. Прозвище «Чудо мира» (Mirabilia mundi) — за блестящее образование и мечту о восстановлении Римской империи.', father: 'ott_otto_ii' },
        { id: 'ott_henry_ii', name: 'Генрих II', born: 973, died: 1024, title: 'Император Священной Римской империи', reign: 'Германия: 1002–1024 · Император: 1014–1024', generation: 3, nickname: 'Святой', bio: 'Сын Генриха Строптивого, правнук Генриха I. Прозвище «Святой» — канонизирован в 1146 году. Последний из Оттоновской династии.', father: 'ott_henry_ii_father' }
      ].map(member)
    }
  });
})();