// Арсакиды: цари Парфии; спорные даты и соперничество отмечены.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/arsacids/${data.id}.webp?v=1`, photoKind: image.kind || 'Изображение на монете или исторический источник',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: [] };
  }
  Object.assign(window.DYNASTIES, {
    arsacids: {
      id: 'arsacids', name: 'Арсакиды', heading: 'Династия Арсакидов', period: 'ок. 247 до н. э.–227', country: 'Парфия',
      intro: 'Тридцать два царя и соперника — от Аршака I до Артабана IV. Датировка ряда правлений приблизительна; не все родственные связи документированы.',
      members: [
        { id: 'ars_arsaces_i', name: 'Аршак I', born: 'неизвестно', died: 'ок. 217 до н. э.', title: 'Основатель Парфянского царства', reign: 'Правление: ок. 247–217 до н. э.', generation: 0, bio: 'Основал независимое парфянское государство.' },
        { id: 'ars_arsaces_ii', name: 'Аршак II', born: 'неизвестно', died: 'ок. 191 до н. э.', title: 'Царь Парфии', reign: 'Правление: ок. 217–191 до н. э.', generation: 1, bio: 'Ранний преемник основателя династии.' },
        { id: 'ars_priapatius', name: 'Приапатий', born: 'неизвестно', died: 'ок. 176 до н. э.', title: 'Царь Парфии', reign: 'Правление: ок. 191–176 до н. э.', generation: 2, bio: 'Правил в начале расширения Парфии.' },
        { id: 'ars_phraates_i', name: 'Фраат I', born: 'неизвестно', died: 'ок. 171 до н. э.', title: 'Царь Парфии', reign: 'Правление: ок. 176–171 до н. э.', generation: 3, bio: 'Расширил владения к Эльбурсу.' },
        { id: 'ars_mithridates_i', name: 'Митридат I', born: 'неизвестно', died: '132 до н. э.', title: 'Царь Парфии', reign: 'Правление: 171–132 до н. э.', generation: 4, nickname: 'Великий', bio: 'Превратил Парфию в великую державу.' },
        { id: 'ars_phraates_ii', name: 'Фраат II', born: 'неизвестно', died: '127 до н. э.', title: 'Царь Парфии', reign: 'Правление: 132–127 до н. э.', generation: 5, bio: 'Погиб в войне с кочевниками.' },
        { id: 'ars_artabanus_i', name: 'Артабан I', born: 'неизвестно', died: '124 до н. э.', title: 'Царь Парфии', reign: 'Правление: 127–124 до н. э.', generation: 6, bio: 'Продолжал войны на восточных границах.' },
        { id: 'ars_mithridates_ii', name: 'Митридат II', born: 'неизвестно', died: '91 до н. э.', title: 'Царь Парфии', reign: 'Правление: 124–91 до н. э.', generation: 7, nickname: 'Великий', bio: 'Расширил парфянское влияние и принял титул царя царей.' },
        { id: 'ars_gotarzes_i', name: 'Готарз I', born: 'неизвестно', died: 'ок. 80 до н. э.', title: 'Царь Парфии', reign: 'Правление: 91–80 до н. э.', generation: 8, bio: 'Правил после Митридата II.' },
        { id: 'ars_orodes_i', name: 'Ород I', born: 'неизвестно', died: 'ок. 75 до н. э.', title: 'Царь Парфии', reign: 'Правление: ок. 80–75 до н. э.', generation: 9, bio: 'Правление известно главным образом по монетам.' },
        { id: 'ars_sinatruces', name: 'Синатрук', born: 'неизвестно', died: 'ок. 70 до н. э.', title: 'Царь Парфии', reign: 'Правление: ок. 75–70 до н. э.', generation: 10, bio: 'Вернулся к власти в позднем возрасте.' },
        { id: 'ars_phraates_iii', name: 'Фраат III', born: 'неизвестно', died: '57 до н. э.', title: 'Царь Парфии', reign: 'Правление: 70–57 до н. э.', generation: 11, bio: 'Современник римской экспансии на востоке.' },
        { id: 'ars_orodes_ii', name: 'Ород II', born: 'неизвестно', died: '37 до н. э.', title: 'Царь Парфии', reign: 'Правление: 57–37 до н. э.', generation: 12, bio: 'При нём парфяне разбили римлян при Каррах.' },
        { id: 'ars_phraates_iv', name: 'Фраат IV', born: 'неизвестно', died: '2 до н. э.', title: 'Царь Парфии', reign: 'Правление: 37–2 до н. э.', generation: 13, bio: 'Заключил соглашения с Римом.' },
        { id: 'ars_tiridates_ii', name: 'Тиридат II', born: 'неизвестно', died: 'неизвестно', title: 'Соперник за престол Парфии', reign: 'Правление: ок. 32–31 до н. э.', generation: 14, bio: 'Кратко захватил престол.' },
        { id: 'ars_phraates_v', name: 'Фраат V', born: 'неизвестно', died: 4, title: 'Царь Парфии', reign: 'Правление: 2 до н. э.–4', generation: 14, bio: 'Правил вместе с матерью Мусой.' },
        { id: 'ars_orodes_iii', name: 'Ород III', born: 'неизвестно', died: 6, title: 'Царь Парфии', reign: 'Правление: 4–6', generation: 15, bio: 'Краткое правление при нестабильности.' },
        { id: 'ars_vonones_i', name: 'Вонон I', born: 'неизвестно', died: 19, title: 'Царь Парфии', reign: 'Правление: 8–12', generation: 16, bio: 'Бывший заложник в Риме; был изгнан.' },
        { id: 'ars_artabanus_ii', name: 'Артабан II', born: 'неизвестно', died: 'ок. 38', title: 'Царь Парфии', reign: 'Правление: 12–35', generation: 17, bio: 'Победил Вонона I и укрепил власть.' },
        { id: 'ars_tiridates_iii', name: 'Тиридат III', born: 'неизвестно', died: 'неизвестно', title: 'Соперник за престол Парфии', reign: 'Правление: 35–36', generation: 18, bio: 'Был поддержан Римом, но быстро потерял власть.' },
        { id: 'ars_vardanes_i', name: 'Вардан I', born: 'неизвестно', died: 46, title: 'Царь Парфии', reign: 'Правление: 40–46', generation: 19, bio: 'Боролся с братом Готарзом II.' },
        { id: 'ars_gotarzes_ii', name: 'Готарз II', born: 'неизвестно', died: 51, title: 'Царь Парфии', reign: 'Правление: 40–51', generation: 19, bio: 'Удержал престол после гражданской войны.' },
        { id: 'ars_vologases_i', name: 'Вологез I', born: 'неизвестно', died: 'ок. 78', title: 'Царь Парфии', reign: 'Правление: 51–78', generation: 20, bio: 'Укрепил парфянскую культуру и влияние в Армении.' },
        { id: 'ars_pacorus_ii', name: 'Пакор II', born: 'неизвестно', died: 'ок. 110', title: 'Царь Парфии', reign: 'Правление: 78–110', generation: 21, bio: 'Его правление известно монетами и внешними связями.' },
        { id: 'ars_vologases_iii', name: 'Вологез III', born: 'неизвестно', died: 'ок. 147', title: 'Царь Парфии', reign: 'Правление: 110–147', generation: 22, bio: 'Правил при соперничестве с Осроем I.' },
        { id: 'ars_osroes_i', name: 'Осрой I', born: 'неизвестно', died: 'ок. 129', title: 'Царь Парфии', reign: 'Правление: 109–129', generation: 22, bio: 'Его конфликт с Траяном привёл к римскому вторжению.' },
        { id: 'ars_parthamaspates', name: 'Партамаспат', born: 'неизвестно', died: 'неизвестно', title: 'Царь Парфии при Риме', reign: 'Правление: 116–117', generation: 23, bio: 'Был поставлен римлянами, но не удержал власть.' },
        { id: 'ars_mithridates_iv', name: 'Митридат IV', born: 'неизвестно', died: 'ок. 140', title: 'Соперник за престол Парфии', reign: 'Правление: ок. 129–140', generation: 23, bio: 'Известен преимущественно монетами.' },
        { id: 'ars_vologases_iv', name: 'Вологез IV', born: 'неизвестно', died: 191, title: 'Царь Парфии', reign: 'Правление: 147–191', generation: 24, bio: 'Правил во время войны с Римом.' },
        { id: 'ars_vologases_v', name: 'Вологез V', born: 'неизвестно', died: 208, title: 'Царь Парфии', reign: 'Правление: 191–208', generation: 25, bio: 'Столкнулся с новым римским вторжением.' },
        { id: 'ars_vologases_vi', name: 'Вологез VI', born: 'неизвестно', died: 'ок. 228', title: 'Царь Парфии', reign: 'Правление: 208–228', generation: 26, bio: 'Боролся с братом Артабаном IV.' },
        { id: 'ars_artabanus_iv', name: 'Артабан IV', born: 'неизвестно', died: 227, title: 'Последний царь Арсакидов', reign: 'Правление: 213–227', generation: 26, bio: 'Был разбит Ардаширом I при Хормиздагане.' }
      ].map(member)
    }
  });
})();
