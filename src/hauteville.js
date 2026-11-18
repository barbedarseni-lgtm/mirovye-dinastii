// Дом Отвилей (Готвилей): норманнская династия Южной Италии и Сицилии (XI–XII вв.).
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/hauteville/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет, мозаика или монета',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    hauteville: {
      id: 'hauteville', name: 'Отвили', heading: 'Дом Отвилей (Готвилей)', period: '1071–1194', country: 'Южная Италия · Сицилия',
      intro: 'Двенадцать представителей норманнского рода Отвилей — от Роберта Гвискара и Рожера I до Вильгельма III. Династия, создавшая Королевство Сицилия.',
      members: [
        { id: 'hau_robert_guiscard', name: 'Роберт Гвискар', born: 'ок. 1015', died: 1085, title: 'Герцог Апулии и Калабрии', reign: 'Правление: 1059–1085', generation: 0, nickname: 'Гвискар', bio: 'Сын Танкреда де Отвиля. Прозвище «Гвискар» (Guiscard) — «Хитрый». Наиболее могущественный норманнский правитель Южной Италии, изгнал византийцев и арабов.', children: ['hau_bohemond_i', 'hau_roger_borsa'] },
        { id: 'hau_roger_i', name: 'Рожер I', born: 'ок. 1031', died: 1101, title: 'Великий граф Сицилии', reign: 'Правление: 1071–1101', generation: 0, nickname: 'Боссо', bio: 'Младший брат Роберта Гвискара. Прозвище «Боссо» (Bosso) — «Рыжий». Завоевал Сицилию у арабов, заложив основу будущего королевства.', children: ['hau_simon', 'hau_roger_ii'] },
        { id: 'hau_bohemond_i', name: 'Боэмунд I', born: 'ок. 1054', died: 1111, title: 'Князь Антиохии', reign: 'Антиохия: 1098–1111', generation: 1, nickname: 'Тарентский', bio: 'Старший сын Роберта Гвискара. Один из предводителей Первого крестового похода, основатель княжества Антиохия.', father: 'hau_robert_guiscard' },
        { id: 'hau_roger_borsa', name: 'Рожер Борса', born: 'ок. 1060', died: 1111, title: 'Герцог Апулии и Калабрии', reign: 'Правление: 1085–1111', generation: 1, nickname: 'Борса', bio: 'Сын Роберта Гвискара. Прозвище «Борса» (Borsa) — «Кошелёк», из-за скупости. Унаследовал герцогство, но утратил часть власти.', father: 'hau_robert_guiscard' },
        { id: 'hau_simon', name: 'Симон', born: 1093, died: 1105, title: 'Граф Сицилии', reign: 'Правление: 1101–1105', generation: 1, bio: 'Старший сын Рожера I. Унаследовал титул в детстве под регентством матери Аделаиды, умер юным.', father: 'hau_roger_i' },
        { id: 'hau_roger_ii', name: 'Рожер II', born: 1095, died: 1154, title: 'Король Сицилии', reign: 'Граф: 1105–1130 · Король: 1130–1154', generation: 1, nickname: 'Великий', bio: 'Сын Рожера I. В 1130 году принял титул короля Сицилии, объединив норманнские владения. При нём расцвели Палермо и «арабо-норманнский» стиль.', father: 'hau_roger_i', children: ['hau_roger_iii', 'hau_william_i'] },
        { id: 'hau_roger_iii', name: 'Рожер III', born: 1118, died: 1148, title: 'Герцог Апулии', reign: 'Герцог: 1134–1148', generation: 2, bio: 'Старший сын Рожера II. Был соправителем и наследником, но умер раньше отца, не став королём.', father: 'hau_roger_ii' },
        { id: 'hau_william_i', name: 'Вильгельм I', born: 1120, died: 1166, title: 'Король Сицилии', reign: 'Правление: 1154–1166', generation: 2, nickname: 'Злой', bio: 'Сын Рожера II. Прозвище «Злой» (il Malo) дали ему противники за жёсткое подавление мятежей баронов.', father: 'hau_roger_ii', children: ['hau_william_ii'] },
        { id: 'hau_william_ii', name: 'Вильгельм II', born: 1153, died: 1189, title: 'Король Сицилии', reign: 'Правление: 1166–1189', generation: 3, nickname: 'Добрый', bio: 'Сын Вильгельма I. Прозвище «Добрый» (il Buono) — за мирное правление. При нём построен собор Монреале. Умер бездетным.', father: 'hau_william_i' },
        { id: 'hau_tancred_of_lecce', name: 'Танкред', born: 1138, died: 1194, title: 'Король Сицилии', reign: 'Правление: 1189–1194', generation: 3, nickname: 'Танкред Личче', bio: 'Незаконный сын герцога Рожера III, внук Рожера II. Захватил трон после смерти Вильгельма II, но был разбит Генрихом VI.', father: 'hau_roger_iii', children: ['hau_william_iii'] },
        { id: 'hau_william_iii', name: 'Вильгельм III', born: 'ок. 1185', died: 1198, title: 'Король Сицилии', reign: 'Правление: 1194', generation: 4, bio: 'Сын Танкреда. Последний король Сицилии из дома Отвилей; низложен Генрихом VI в 1194 году.', father: 'hau_tancred_of_lecce' },
        { id: 'hau_constance', name: 'Констанция', born: 1154, died: 1198, title: 'Королева Сицилии; императрица', reign: 'Королева: 1194–1198', generation: 2, bio: 'Дочь Рожера II, последняя в законной линии Отвилей. Жена императора Генриха VI, мать Фридриха II Штауфена, принесла Сицилию дому Гогенштауфенов.', father: 'hau_roger_ii' }
      ].map(member)
    }
  });
})();