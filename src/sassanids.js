// Сасаниды: шахи Персии 224–651 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/sassanids/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    sassanids: {
      id: 'sassanids', name: 'Сасаниды', heading: 'Династия Сасанидов', period: '224–651', country: 'Персия',
      intro: 'Двадцать шесть шахов — от Ардашира I до Йездигерда III. Краткие правления и царицы Боран включены.',
      members: [
        { id: 'sas_ardashir_i', name: 'Ардашир I', born: 'ок. 180', died: 242, title: 'Шахиншах Персии', reign: 'Правление: 224–242', generation: 0, bio: 'Сверг Арсакидов и основал Сасанидскую державу.', children: ['sas_shapur_i'] },
        { id: 'sas_shapur_i', name: 'Шапур I', born: 'ок. 215', died: 270, title: 'Шахиншах Персии', reign: 'Правление: 240–270', generation: 1, bio: 'Сын Ардашира I. Пленил римского императора Валериана.', father: 'sas_ardashir_i', children: ['sas_hormizd_i', 'sas_narseh'] },
        { id: 'sas_hormizd_i', name: 'Хормизд I', born: 'ок. 230', died: 271, title: 'Шахиншах Персии', reign: 'Правление: 270–271', generation: 2, bio: 'Сын Шапура I.', father: 'sas_shapur_i', children: ['sas_bahram_i'] },
        { id: 'sas_bahram_i', name: 'Бахрам I', born: 'ок. 250', died: 274, title: 'Шахиншах Персии', reign: 'Правление: 271–274', generation: 3, bio: 'Сын Хормизда I. При нём был казнён Мани.', father: 'sas_hormizd_i', children: ['sas_bahram_ii'] },
        { id: 'sas_bahram_ii', name: 'Бахрам II', born: 'ок. 260', died: 293, title: 'Шахиншах Персии', reign: 'Правление: 274–293', generation: 4, bio: 'Сын Бахрама I. Сохранял власть при знати.', father: 'sas_bahram_i', children: ['sas_bahram_iii'] },
        { id: 'sas_bahram_iii', name: 'Бахрам III', born: 'ок. 280', died: 293, title: 'Шахиншах Персии', reign: 'Правление: 293', generation: 5, bio: 'Сын Бахрама II. Быстро потерял престол.', father: 'sas_bahram_ii' },
        { id: 'sas_narseh', name: 'Нарсе', born: 'ок. 230', died: 302, title: 'Шахиншах Персии', reign: 'Правление: 293–302', generation: 2, bio: 'Сын Шапура I. Вёл войну с Римом.', father: 'sas_shapur_i', children: ['sas_hormizd_ii'] },
        { id: 'sas_hormizd_ii', name: 'Хормизд II', born: 'ок. 270', died: 309, title: 'Шахиншах Персии', reign: 'Правление: 302–309', generation: 3, bio: 'Сын Нарсе.', father: 'sas_narseh', children: ['sas_shapur_ii', 'sas_ardashir_ii'] },
        { id: 'sas_shapur_ii', name: 'Шапур II', born: 309, died: 379, title: 'Шахиншах Персии', reign: 'Правление: 309–379', generation: 4, nickname: 'Великий', bio: 'Сын Хормизда II. Правил семьдесят лет и укрепил державу.', father: 'sas_hormizd_ii', children: ['sas_shapur_iii', 'sas_bahram_iv'] },
        { id: 'sas_ardashir_ii', name: 'Ардашир II', born: 'ок. 300', died: 383, title: 'Шахиншах Персии', reign: 'Правление: 379–383', generation: 4, bio: 'Сын Хормизда II и брат Шапура II.', father: 'sas_hormizd_ii' },
        { id: 'sas_shapur_iii', name: 'Шапур III', born: 'ок. 340', died: 388, title: 'Шахиншах Персии', reign: 'Правление: 383–388', generation: 5, bio: 'Сын Шапура II.', father: 'sas_shapur_ii', children: ['sas_yazdegerd_i'] },
        { id: 'sas_bahram_iv', name: 'Бахрам IV', born: 'ок. 350', died: 399, title: 'Шахиншах Персии', reign: 'Правление: 388–399', generation: 5, bio: 'Сын Шапура II.', father: 'sas_shapur_ii' },
        { id: 'sas_yazdegerd_i', name: 'Йездигерд I', born: 'ок. 370', died: 420, title: 'Шахиншах Персии', reign: 'Правление: 399–420', generation: 6, bio: 'Сын Шапура III. Проводил относительно терпимую политику.', father: 'sas_shapur_iii', children: ['sas_bahram_v'] },
        { id: 'sas_bahram_v', name: 'Бахрам V Гор', born: 'ок. 400', died: 438, title: 'Шахиншах Персии', reign: 'Правление: 420–438', generation: 7, nickname: 'Гор', bio: 'Сын Йездигерда I. Герой персидской литературной традиции.', father: 'sas_yazdegerd_i', children: ['sas_yazdegerd_ii'] },
        { id: 'sas_yazdegerd_ii', name: 'Йездигерд II', born: 'ок. 420', died: 457, title: 'Шахиншах Персии', reign: 'Правление: 438–457', generation: 8, bio: 'Сын Бахрама V. Вёл войны на восточных границах.', father: 'sas_bahram_v', children: ['sas_hormizd_iii', 'sas_peroz_i', 'sas_balash'] },
        { id: 'sas_hormizd_iii', name: 'Хормизд III', born: 'ок. 440', died: 459, title: 'Шахиншах Персии', reign: 'Правление: 457–459', generation: 9, bio: 'Сын Йездигерда II. Был свергнут братом.', father: 'sas_yazdegerd_ii' },
        { id: 'sas_peroz_i', name: 'Пероз I', born: 'ок. 440', died: 484, title: 'Шахиншах Персии', reign: 'Правление: 459–484', generation: 9, bio: 'Сын Йездигерда II. Погиб в войне с гефталитами.', father: 'sas_yazdegerd_ii', children: ['sas_kavadh_i'] },
        { id: 'sas_balash', name: 'Балаш', born: 'ок. 440', died: 488, title: 'Шахиншах Персии', reign: 'Правление: 484–488', generation: 9, bio: 'Сын Йездигерда II. Восстановил порядок после поражения.', father: 'sas_yazdegerd_ii' },
        { id: 'sas_kavadh_i', name: 'Кавад I', born: 473, died: 531, title: 'Шахиншах Персии', reign: 'Правление: 488–496 · 498–531', generation: 10, bio: 'Сын Пероза I. Был низложен и возвращён при поддержке гефталитов.', father: 'sas_peroz_i', children: ['sas_khosrow_i'] },
        { id: 'sas_khosrow_i', name: 'Хосров I', born: 'ок. 512', died: 579, title: 'Шахиншах Персии', reign: 'Правление: 531–579', generation: 11, nickname: 'Аношарван', bio: 'Сын Кавада I. Известен реформами и справедливостью.', father: 'sas_kavadh_i', children: ['sas_hormizd_iv'] },
        { id: 'sas_hormizd_iv', name: 'Хормизд IV', born: 'ок. 540', died: 590, title: 'Шахиншах Персии', reign: 'Правление: 579–590', generation: 12, bio: 'Сын Хосрова I. Был свергнут военной знатью.', father: 'sas_khosrow_i', children: ['sas_khosrow_ii'] },
        { id: 'sas_khosrow_ii', name: 'Хосров II', born: 'ок. 570', died: 628, title: 'Шахиншах Персии', reign: 'Правление: 590–628', generation: 13, nickname: 'Парвиз', bio: 'Сын Хормизда IV. Завоевал обширные земли, но был разбит Ираклием.', father: 'sas_hormizd_iv', children: ['sas_kavadh_ii', 'sas_boran'] },
        { id: 'sas_kavadh_ii', name: 'Кавад II', born: 'ок. 590', died: 628, title: 'Шахиншах Персии', reign: 'Правление: 628', generation: 14, bio: 'Сын Хосрова II. Сверг отца и умер в год эпидемии.', father: 'sas_khosrow_ii', children: ['sas_ardashir_iii'] },
        { id: 'sas_ardashir_iii', name: 'Ардашир III', born: 621, died: 630, title: 'Шахиншах Персии', reign: 'Правление: 628–630', generation: 15, bio: 'Сын Кавада II. Наследовал ребёнком.', father: 'sas_kavadh_ii' },
        { id: 'sas_boran', name: 'Боран', born: 'ок. 590', died: 632, title: 'Царица Персии', reign: 'Правление: 630 · 631–632', generation: 14, bio: 'Дочь Хосрова II. Дважды занимала престол.', father: 'sas_khosrow_ii' },
        { id: 'sas_yazdegerd_iii', name: 'Йездигерд III', born: 624, died: 651, title: 'Последний сасанидский шахиншах', reign: 'Правление: 632–651', generation: 14, bio: 'Внук Хосрова II. Его бегство и смерть завершили династию.' }
      ].map(member)
    }
  });
})();
