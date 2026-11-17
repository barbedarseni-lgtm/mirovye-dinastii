// Арпады: короли Венгрии 1000–1301 годов, включая повторные и краткие правления.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/arpads/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    arpads: {
      id: 'arpads', name: 'Арпады', heading: 'Династия Арпадов', period: '1000–1301', country: 'Венгрия',
      intro: 'Двадцать два короля Венгрии — от святого Иштвана I до Андраша III. Повторные правления и противокороли отмечены в датах.',
      members: [
        { id: 'arp_stephen_i', name: 'Иштван I', born: 'ок. 975', died: 1038, title: 'Первый король Венгрии', reign: 'Правление: 1000–1038', generation: 0, nickname: 'Святой', bio: 'Завершил христианизацию Венгрии и получил королевскую корону от папы.', children: [] },
        { id: 'arp_peter', name: 'Петр', born: 'ок. 1011', died: 1046, title: 'Король Венгрии', reign: 'Правление: 1038–1041 · 1044–1046', generation: 1, bio: 'Племянник Иштвана I. Дважды терял престол в результате восстаний.' },
        { id: 'arp_andrew_i', name: 'Андраш I', born: 'ок. 1015', died: 1060, title: 'Король Венгрии', reign: 'Правление: 1046–1060', generation: 1, bio: 'Вернулся из изгнания и восстановил самостоятельную власть Венгрии.', children: ['arp_solomon'] },
        { id: 'arp_bela_i', name: 'Бела I', born: 'ок. 1015', died: 1063, title: 'Король Венгрии', reign: 'Правление: 1060–1063', generation: 1, bio: 'Брат Андраша I. Получил престол после победы над племянником.', children: ['arp_geza_i', 'arp_ladislaus_i'] },
        { id: 'arp_solomon', name: 'Саламон', born: 1053, died: 1087, title: 'Король Венгрии', reign: 'Правление: 1063–1074', generation: 2, bio: 'Сын Андраша I. Боролся с двоюродными братьями и потерял престол.', father: 'arp_andrew_i' },
        { id: 'arp_geza_i', name: 'Геза I', born: 'ок. 1040', died: 1077, title: 'Король Венгрии', reign: 'Правление: 1074–1077', generation: 2, bio: 'Сын Белы I. Сверг Саламона и укрепил королевскую власть.', father: 'arp_bela_i', children: ['arp_coloman'] },
        { id: 'arp_ladislaus_i', name: 'Ласло I', born: 'ок. 1040', died: 1095, title: 'Король Венгрии', reign: 'Правление: 1077–1095', generation: 2, nickname: 'Святой', bio: 'Сын Белы I. Укрепил законодательство и был канонизирован.', father: 'arp_bela_i' },
        { id: 'arp_coloman', name: 'Коломан', born: 'ок. 1070', died: 1116, title: 'Король Венгрии и Хорватии', reign: 'Правление: 1095–1116', generation: 3, nickname: 'Книжный', bio: 'Сын Гезы I. Учёный король, завершивший присоединение Хорватии.', father: 'arp_geza_i', children: ['arp_stephen_ii'] },
        { id: 'arp_stephen_ii', name: 'Иштван II', born: 1101, died: 1131, title: 'Король Венгрии', reign: 'Правление: 1116–1131', generation: 4, bio: 'Сын Коломана. Наследовал подростком и вёл войны с соседями.', father: 'arp_coloman' },
        { id: 'arp_bela_ii', name: 'Бела II', born: 'ок. 1110', died: 1141, title: 'Король Венгрии', reign: 'Правление: 1131–1141', generation: 4, nickname: 'Слепой', bio: 'Племянник Коломана. Был ослеплён в детстве, но позднее занял престол.', children: ['arp_geza_ii', 'arp_ladislaus_ii', 'arp_stephen_iv'] },
        { id: 'arp_geza_ii', name: 'Геза II', born: 1130, died: 1162, title: 'Король Венгрии', reign: 'Правление: 1141–1162', generation: 5, bio: 'Сын Белы II. Поддерживал союз с Византией и крестоносцами.', father: 'arp_bela_ii', children: ['arp_stephen_iii', 'arp_bela_iii'] },
        { id: 'arp_ladislaus_ii', name: 'Ласло II', born: 1131, died: 1163, title: 'Противокороль Венгрии', reign: 'Правление: 1162–1163', generation: 5, bio: 'Сын Белы II. При византийской поддержке ненадолго занял престол.', father: 'arp_bela_ii' },
        { id: 'arp_stephen_iv', name: 'Иштван IV', born: 'ок. 1133', died: 1165, title: 'Противокороль Венгрии', reign: 'Правление: 1163 · 1165', generation: 5, bio: 'Сын Белы II. Продолжил борьбу против Иштвана III.', father: 'arp_bela_ii' },
        { id: 'arp_stephen_iii', name: 'Иштван III', born: 1147, died: 1172, title: 'Король Венгрии', reign: 'Правление: 1162–1172 · с борьбой против дядей', generation: 6, bio: 'Сын Гезы II. Отстоял престол в борьбе с Ласло II и Иштваном IV.', father: 'arp_geza_ii' },
        { id: 'arp_bela_iii', name: 'Бела III', born: 'ок. 1148', died: 1196, title: 'Король Венгрии', reign: 'Правление: 1172–1196', generation: 6, bio: 'Сын Гезы II. Провёл административные реформы после возвращения из Византии.', father: 'arp_geza_ii', children: ['arp_emeric', 'arp_andrew_ii'] },
        { id: 'arp_emeric', name: 'Имре', born: 1174, died: 1204, title: 'Король Венгрии', reign: 'Правление: 1196–1204', generation: 7, bio: 'Старший сын Белы III. Вёл конфликты с братом Андрашем.', father: 'arp_bela_iii', children: ['arp_ladislaus_iii'] },
        { id: 'arp_ladislaus_iii', name: 'Ласло III', born: 'ок. 1200', died: 1205, title: 'Король Венгрии', reign: 'Правление: 1204–1205', generation: 8, bio: 'Сын Имре. Наследовал ребёнком и умер в изгнании.', father: 'arp_emeric' },
        { id: 'arp_andrew_ii', name: 'Андраш II', born: 'ок. 1175', died: 1235, title: 'Король Венгрии', reign: 'Правление: 1205–1235', generation: 7, bio: 'Сын Белы III. Издал Золотую буллу 1222 года.', father: 'arp_bela_iii', children: ['arp_bela_iv'] },
        { id: 'arp_bela_iv', name: 'Бела IV', born: 1206, died: 1270, title: 'Король Венгрии', reign: 'Правление: 1235–1270', generation: 8, nickname: 'Второй основатель', bio: 'Сын Андраша II. Восстанавливал страну после монгольского вторжения.', father: 'arp_andrew_ii', children: ['arp_stephen_v'] },
        { id: 'arp_stephen_v', name: 'Иштван V', born: 1239, died: 1272, title: 'Король Венгрии', reign: 'Правление: 1270–1272', generation: 9, bio: 'Сын Белы IV. До самостоятельного правления был младшим королём.', father: 'arp_bela_iv', children: ['arp_ladislaus_iv'] },
        { id: 'arp_ladislaus_iv', name: 'Ласло IV', born: 1262, died: 1290, title: 'Король Венгрии', reign: 'Правление: 1272–1290', generation: 10, nickname: 'Куманский', bio: 'Сын Иштвана V. Его правление осложнялось связью с куманской знатью.', father: 'arp_stephen_v' },
        { id: 'arp_andrew_iii', name: 'Андраш III', born: 'ок. 1265', died: 1301, title: 'Последний король мужской линии Арпадов', reign: 'Правление: 1290–1301', generation: 9, nickname: 'Венецианский', bio: 'Внук Андраша II. После его смерти без сыновей прекратилась мужская линия.' }
      ].map(member)
    }
  });
})();
