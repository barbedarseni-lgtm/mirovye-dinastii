// Династия Хань: Западная и Восточная Хань, 202 до н. э.–220.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/han/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    han: {
      id: 'han', name: 'Хань', heading: 'Династия Хань', period: '202 до н. э.–220', country: 'Китай',
      intro: 'Двадцать семь правителей Западной и Восточной Хань, включая регентшу Люй Хоу и малолетних императоров. Временная новая династия Ван Мана не входит.',
      members: [
        { id: 'han_gaozu', name: 'Гаоцзу', born: '256 до н. э.', died: '195 до н. э.', title: 'Основатель Хань', reign: 'Правление: 202–195 до н. э.', generation: 0, bio: 'Основатель династии.', children: ['han_hui', 'han_wen'] },
        { id: 'han_hui', name: 'Хуэй-ди', born: '210 до н. э.', died: '188 до н. э.', title: 'Император Хань', reign: 'Правление: 195–188 до н. э.', generation: 1, bio: 'Сын Гаоцзу.', father: 'han_gaozu' },
        { id: 'han_lu', name: 'Люй Хоу', born: '241 до н. э.', died: '180 до н. э.', title: 'Императрица-регентша', reign: 'Регентство: 188–180 до н. э.', generation: 2, bio: 'Мать Хуэй-ди. Фактически управляла после его смерти.' },
        { id: 'han_wen', name: 'Вэнь-ди', born: '202 до н. э.', died: '157 до н. э.', title: 'Император Хань', reign: 'Правление: 180–157 до н. э.', generation: 1, bio: 'Сын Гаоцзу. Укрепил государство.', father: 'han_gaozu', children: ['han_jing'] },
        { id: 'han_jing', name: 'Цзин-ди', born: '188 до н. э.', died: '141 до н. э.', title: 'Император Хань', reign: 'Правление: 157–141 до н. э.', generation: 2, bio: 'Сын Вэнь-ди. Подавил мятеж семи царств.', father: 'han_wen', children: ['han_wu'] },
        { id: 'han_wu', name: 'У-ди', born: '156 до н. э.', died: '87 до н. э.', title: 'Император Хань', reign: 'Правление: 141–87 до н. э.', generation: 3, bio: 'Сын Цзин-ди. Значительно расширил империю.', father: 'han_jing', children: ['han_zhao', 'han_xuan'] },
        { id: 'han_zhao', name: 'Чжао-ди', born: '95 до н. э.', died: '74 до н. э.', title: 'Император Хань', reign: 'Правление: 87–74 до н. э.', generation: 4, bio: 'Сын У-ди. Наследовал ребёнком.', father: 'han_wu' },
        { id: 'han_xuan', name: 'Сюань-ди', born: '91 до н. э.', died: '49 до н. э.', title: 'Император Хань', reign: 'Правление: 74–49 до н. э.', generation: 4, bio: 'Правнук У-ди. Правил после изгнания Хэ-ди.', father: 'han_wu', children: ['han_yuan'] },
        { id: 'han_yuan', name: 'Юань-ди', born: '75 до н. э.', died: '33 до н. э.', title: 'Император Хань', reign: 'Правление: 49–33 до н. э.', generation: 5, bio: 'Сын Сюань-ди.', father: 'han_xuan', children: ['han_cheng'] },
        { id: 'han_cheng', name: 'Чэн-ди', born: '51 до н. э.', died: '7 до н. э.', title: 'Император Хань', reign: 'Правление: 33–7 до н. э.', generation: 6, bio: 'Сын Юань-ди.', father: 'han_yuan', children: ['han_ai'] },
        { id: 'han_ai', name: 'Ай-ди', born: '25 до н. э.', died: '1 до н. э.', title: 'Император Хань', reign: 'Правление: 7–1 до н. э.', generation: 7, bio: 'Племянник Чэн-ди.', children: ['han_ping'] },
        { id: 'han_ping', name: 'Пин-ди', born: '9 до н. э.', died: 6, title: 'Император Хань', reign: 'Правление: 1 до н. э.–6', generation: 8, bio: 'Родственник Ай-ди. Наследовал ребёнком.', children: ['han_ruzi'] },
        { id: 'han_ruzi', name: 'Жу-цзы Ин', born: 5, died: 25, title: 'Наследник престола Хань', reign: 'Правление: 6–9', generation: 9, bio: 'Малолетний наследник при Ван Мане.' },
        { id: 'han_guangwu', name: 'Гуанъу-ди', born: '5 до н. э.', died: 57, title: 'Основатель Восточной Хань', reign: 'Правление: 25–57', generation: 0, bio: 'Восстановил династию после Ван Мана.', children: ['han_ming'] },
        { id: 'han_ming', name: 'Мин-ди', born: 28, died: 75, title: 'Император Восточной Хань', reign: 'Правление: 57–75', generation: 1, bio: 'Сын Гуанъу-ди.', father: 'han_guangwu', children: ['han_zhang'] },
        { id: 'han_zhang', name: 'Чжан-ди', born: 58, died: 88, title: 'Император Восточной Хань', reign: 'Правление: 75–88', generation: 2, bio: 'Сын Мин-ди.', father: 'han_ming', children: ['han_he'] },
        { id: 'han_he', name: 'Хэ-ди', born: 79, died: 106, title: 'Император Восточной Хань', reign: 'Правление: 88–106', generation: 3, bio: 'Сын Чжан-ди. Наследовал ребёнком.', father: 'han_zhang', children: ['han_shang'] },
        { id: 'han_shang', name: 'Шан-ди', born: 105, died: 106, title: 'Император Восточной Хань', reign: 'Правление: 106', generation: 4, bio: 'Сын Хэ-ди. Умер младенцем.', father: 'han_he' },
        { id: 'han_an', name: 'Ань-ди', born: 94, died: 125, title: 'Император Восточной Хань', reign: 'Правление: 106–125', generation: 4, bio: 'Племянник Хэ-ди.', children: ['han_shao', 'han_shun'] },
        { id: 'han_shao', name: 'Шао-ди', born: 'ок. 115', died: 125, title: 'Император Восточной Хань', reign: 'Правление: 125', generation: 5, bio: 'Племянник Ань-ди. Правил несколько месяцев.' },
        { id: 'han_shun', name: 'Шунь-ди', born: 115, died: 144, title: 'Император Восточной Хань', reign: 'Правление: 125–144', generation: 5, bio: 'Сын Ань-ди.', father: 'han_an', children: ['han_chong'] },
        { id: 'han_chong', name: 'Чун-ди', born: 143, died: 145, title: 'Император Восточной Хань', reign: 'Правление: 144–145', generation: 6, bio: 'Сын Шунь-ди. Умер ребёнком.', father: 'han_shun' },
        { id: 'han_zhi', name: 'Чжи-ди', born: 138, died: 146, title: 'Император Восточной Хань', reign: 'Правление: 145–146', generation: 7, bio: 'Потомок Чжан-ди. Был отравлен.', children: [] },
        { id: 'han_huan', name: 'Хуань-ди', born: 132, died: 168, title: 'Император Восточной Хань', reign: 'Правление: 146–168', generation: 8, bio: 'Потомок Чжан-ди. Правил при влиянии внешней родни.', children: [] },
        { id: 'han_ling', name: 'Лин-ди', born: 156, died: 189, title: 'Император Восточной Хань', reign: 'Правление: 168–189', generation: 9, bio: 'Потомок Чжан-ди. При нём началось восстание жёлтых повязок.', children: ['han_shao_ii', 'han_xian'] },
        { id: 'han_shao_ii', name: 'Шао-ди', born: 176, died: 190, title: 'Император Восточной Хань', reign: 'Правление: 189', generation: 10, bio: 'Сын Лин-ди. Был низложен Дун Чжо.', father: 'han_ling' },
        { id: 'han_xian', name: 'Сянь-ди', born: 181, died: 234, title: 'Последний император Хань', reign: 'Правление: 189–220', generation: 10, bio: 'Сын Лин-ди. Отрёкся в пользу Цао Пи.', father: 'han_ling' }
      ].map(member)
    }
  });
})();
