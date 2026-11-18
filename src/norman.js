// Нормандская династия: короли Англии (1066–1154).
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/norman/${data.id}.webp?v=1`, photoKind: image.kind || 'Исторический портрет, монета или печать',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    norman: {
      id: 'norman', name: 'Нормандская', heading: 'Нормандская династия', period: '1066–1154', country: 'Англия · Нормандия',
      intro: 'Девять фигур — от Вильгельма Завоевателя до Вильгельма Булонского. Династия, изменившая историю Англии после завоевания 1066 года.',
      members: [
        { id: 'nor_william_i', name: 'Вильгельм I', born: 'ок. 1028', died: 1087, title: 'Король Англии; герцог Нормандии', reign: 'Англия: 1066–1087 · Нормандия: 1035–1087', generation: 0, nickname: 'Завоеватель', bio: 'Незаконный сын Роберта I, герцога Нормандии. Завоевал Англию в битве при Гастингсе 1066 года; при нём было проведено «Книга Страшного суда» — перепись земель.', children: ['nor_robert_curthose', 'nor_william_ii', 'nor_henry_i'] },
        { id: 'nor_robert_curthose', name: 'Роберт I', born: 'ок. 1051', died: 1134, title: 'Герцог Нормандии', reign: 'Правление: 1087–1106', generation: 1, nickname: 'Короткие Штаны', bio: 'Старший сын Вильгельма I. Получил Нормандию, участвовал в Первом крестовом походе, но в 1106 году потерпел поражение при Мабэ и лишился герцогства.', father: 'nor_william_i', children: ['nor_william_clito'] },
        { id: 'nor_william_ii', name: 'Вильгельм II', born: 'ок. 1056', died: 1100, title: 'Король Англии', reign: 'Правление: 1087–1100', generation: 1, nickname: 'Руфус', bio: 'Второй сын Вильгельма I. Получил английский престол, но не Нормандию. Погиб в 1100 году от стрелы на охоте в Новом лесу — обстоятельства до сих пор оспариваются.', father: 'nor_william_i' },
        { id: 'nor_henry_i', name: 'Генрих I', born: 1068, died: 1135, title: 'Король Англии; герцог Нормандии', reign: 'Англия: 1100–1135 · Нормандия: 1106–1135', generation: 1, nickname: 'Боклерк', bio: 'Младший сын Вильгельма I. В 1106 году взял у брата Роберта Нормандию и воссоединил герцогство с королевством. Издал Устав свобод 1100 года.', father: 'nor_william_i', children: ['nor_william_aetheling', 'nor_empress_matilda'] },
        { id: 'nor_stephen', name: 'Стефан', born: 'ок. 1092', died: 1154, title: 'Король Англии', reign: 'Правление: 1135–1154', generation: 2, bio: 'Внук Вильгельма I: сын его дочери Адели и Теодора I Блуа. Завладел престолом после смерти Генриха I и дожил до конца Английской анархии.', children: ['nor_eustace', 'nor_william_boulogne'] },
        { id: 'nor_william_clito', name: 'Вильгельм Клитский', born: 1102, died: 1128, title: 'Претендент на Нормандию', reign: 'Попытки на престол: 1119–1128', generation: 2, bio: 'Сын Роберта Короткие Штаны. С 1119 года претендовал на герцогство Нормандское, опираясь на поддержку Франции; погиб от раны, полученной в бою под Алансоном.', father: 'nor_robert_curthose' },
        { id: 'nor_william_aetheling', name: 'Вильгельм Аэтелинг', born: 1103, died: 1120, title: 'Принц Англии', reign: 'Наследник престола: 1103–1120', generation: 2, bio: 'Единственный законный сын Генриха I. Погиб вместе с несколькими сотнями пассажиров на борту «Белого корабля», затонувшего в Ла-Манше в ноябре 1120 года.', father: 'nor_henry_i' },
        { id: 'nor_empress_matilda', name: 'Матильда', born: 1102, died: 1167, title: 'Императрица Священной Римской империи', reign: 'Спор на престол: 1135–1154', generation: 2, nickname: 'Императрица', bio: 'Дочь Генриха I и жена императора Генриха V. Главная соперница Стефана; её сын Генрих II стал первым королём Англии из дома Плантагенетов.', father: 'nor_henry_i' },
        { id: 'nor_eustace', name: 'Евстафий IV', born: 'ок. 1130', died: 1153, title: 'Наследник престола', reign: 'Наследник: 1135–1153', generation: 3, bio: 'Старший сын Стефана от Елены Анжуйской. Его преждевременная смерть открыла дорогу Генриху Плантагенету по Уоллингфордскому соглашению 1153 года.', father: 'nor_stephen' },
        { id: 'nor_william_boulogne', name: 'Вильгельм I', born: 'ок. 1136', died: 1159, title: 'Граф Булонь; граф Суррея', reign: 'Графство: 1153–1159', generation: 3, bio: 'Младший сын Стефана. Получил графство Суррей и жену Изабель де Варенн; умер, не оставив потомства.', father: 'nor_stephen' }
      ].map(member)
    }
  });
})();