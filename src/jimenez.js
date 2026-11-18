// Династия Хименес: короли Наварры и Арагона (IX–XII вв.).
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/jimenez/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет или монета',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    jimenez: {
      id: 'jimenez', name: 'Хименес', heading: 'Династия Хименес', period: '820–1173', country: 'Наварра · Арагон',
      intro: 'Пятнадцать правителей наваррской и арагонской линий — от Гарсии I до Петронильи. Династия объединила Наварру, Арагон и временно Кастилью.',
      members: [
        { id: 'jim_garcia_i', name: 'Гарсия I Иньегес', born: 'ок. 810', died: 851, title: 'Король Наварры', reign: 'Правление: ок. 820–851', generation: 0, bio: 'Первый подтверждённый правитель Наварры из рода Хименес. Отстаивал независимость от эмирата Кордовы.', children: ['jim_fortun'] },
        { id: 'jim_fortun', name: 'Фортун Гарсес', born: 'ок. 848', died: 905, title: 'Король Наварры', reign: 'Правление: 851/2–905', generation: 1, nickname: 'Монах', bio: 'Сын Гарсии I. В 905 году отрёкся от престола и стал монахом в Лейре.', father: 'jim_garcia_i', children: ['jim_sancho_i', 'jim_jimeno'] },
        { id: 'jim_sancho_i', name: 'Санчо I Гарсес', born: 'ок. 860', died: 925, title: 'Король Наварры', reign: 'Правление: 905–925', generation: 2, bio: 'Сын Фортуна. Расширил наваррские владения на юг и закрепил династию на престоле.', father: 'jim_fortun', children: ['jim_garcia_sanchez_i'] },
        { id: 'jim_jimeno', name: 'Химено Гарсес', born: 'ок. 870', died: 931, title: 'Король Наварры', reign: 'Правление: 925–931', generation: 2, bio: 'Брат Санчо I. Правил при несовершеннолетнем племяннике Гарсией Санчесом I.', father: 'jim_fortun' },
        { id: 'jim_garcia_sanchez_i', name: 'Гарсия Санчес I', born: 'ок. 919', died: 970, title: 'Король Наварры', reign: 'Правление: 931–970', generation: 3, nickname: 'Дрожащий', bio: 'Сын Санчо I. Прозвище «Дрожащий» (el Temblón) связано с неврологическим заболеванием.', father: 'jim_sancho_i', children: ['jim_sancho_ii', 'jim_ramiro_i'] },
        { id: 'jim_sancho_ii', name: 'Санчо II Гарсес', born: 'ок. 935', died: 994, title: 'Король Наварры', reign: 'Правление: 970–994', generation: 4, nickname: 'Абарка', bio: 'Сын Гарсии Санчеса I. Прозвище «Абарка» (Abarca) — «в кожаных сандалиях» — отмечает его скромность или простую обувь.', father: 'jim_garcia_sanchez_i', children: ['jim_garcia_sanchez_ii', 'jim_sancho_iii'] },
        { id: 'jim_garcia_sanchez_ii', name: 'Гарсия Санчес II', born: 'ок. 964', died: 1004, title: 'Король Наварры', reign: 'Правление: 994–1004', generation: 5, nickname: 'Дрожащий', bio: 'Сын Санчо II. Носил то же прозвище, что и дед — «Дрожащий» (el Temblón).', father: 'jim_sancho_ii', children: ['jim_sancho_iii'] },
        { id: 'jim_sancho_iii', name: 'Санчо III Гарсес', born: 'ок. 992', died: 1035, title: 'Король Наварры, Арагона и Кастилии', reign: 'Правление: 1004–1035', generation: 5, nickname: 'Великий', bio: 'Сын Гарсии Санчеса II. Прозвище «Великий» (el Mayor) — за объединение христианских земель Северной Испании под своей властью.', father: 'jim_garcia_sanchez_ii', children: ['jim_garcia_sanchez_iii', 'jim_ferrando_i', 'jim_ramiro_i_aragon'] },
        { id: 'jim_garcia_sanchez_iii', name: 'Гарсия Санчес III', born: 'ок. 1012', died: 1054, title: 'Король Наварры', reign: 'Правление: 1035–1054', generation: 6, nickname: 'Нахерский', bio: 'Сын Санчо III Великого. Прозвище «Нахерский» (el de Nájera) — по столице Нахера.', father: 'jim_sancho_iii', children: ['jim_sancho_iv'] },
        { id: 'jim_ferrando_i', name: 'Фернандо I', born: 'ок. 1015', died: 1065, title: 'Король Леона и Кастилии', reign: 'Леон: 1037–1065 · Кастилия: 1035–1065', generation: 6, bio: 'Сын Санчо III. Получил Кастилию и завоевал Леон, став первым королём Леона из рода Хименес.', father: 'jim_sancho_iii' },
        { id: 'jim_ramiro_i_aragon', name: 'Рамиро I', born: 'ок. 1007', died: 1063, title: 'Первый король Арагона', reign: 'Правление: 1035–1063', generation: 6, bio: 'Незаконный сын Санчо III. Основатель арагонской ветви династии Хименес.', father: 'jim_sancho_iii', children: ['jim_sancho_ramirez'] },
        { id: 'jim_sancho_iv', name: 'Санчо IV Гарсес', born: 'ок. 1039', died: 1076, title: 'Король Наварры', reign: 'Правление: 1054–1076', generation: 7, nickname: 'Благородный', bio: 'Сын Гарсии Санчеса III. Прозвище «Благородный» (el Noble) закрепилось после его убийства родственниками.', father: 'jim_garcia_sanchez_iii' },
        { id: 'jim_sancho_ramirez', name: 'Санчо Рамирес', born: 'ок. 1042', died: 1094, title: 'Король Арагона и Наварры', reign: 'Арагон: 1063–1094 · Наварра: 1076–1094', generation: 7, bio: 'Сын Рамиро I. Объединил арагонскую и наваррскую короны после гибели Санчо IV.', father: 'jim_ramiro_i_aragon', children: ['jim_pedro_i', 'jim_alfonso_i'] },
        { id: 'jim_pedro_i', name: 'Педро I', born: 'ок. 1068', died: 1104, title: 'Король Арагона и Наварры', reign: 'Правление: 1094–1104', generation: 8, bio: 'Сын Санчо Рамиреса. Продолжил реконкисту, взял Уэску в 1096 году.', father: 'jim_sancho_ramirez' },
        { id: 'jim_alfonso_i', name: 'Альфонсо I', born: 'ок. 1073', died: 1134, title: 'Король Арагона и Наварры', reign: 'Правление: 1104–1134', generation: 8, nickname: 'Воин', bio: 'Брат Педро I. Прозвище «Воин» (el Batallador) — за непрерывные военные кампании против мавров.', father: 'jim_sancho_ramirez' },
        { id: 'jim_ramiro_ii', name: 'Рамиро II', born: 'ок. 1086', died: 1157, title: 'Король Арагона', reign: 'Правление: 1134–1137 (как монах-король), 1137–1157', generation: 8, nickname: 'Монах', bio: 'Брат Альфонсо I. Был епископом, стал королём после смерти брата. Прозвище «Монах» (el Monje) — за духовный сан.', father: 'jim_sancho_ramirez', children: ['jim_petronilla'] },
        { id: 'jim_petronilla', name: 'Петронилья', born: 1136, died: 1173, title: 'Королева Арагона', reign: 'Правление: 1137–1164', generation: 9, bio: 'Дочь Рамиро II. Последняя представительница рода Хименес на троне Арагона. Женилась на Рамоне Беренгере IV, передав корону дому Барселоны.', father: 'jim_ramiro_ii' }
      ].map(member)
    }
  });
})();