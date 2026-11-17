// Фатимиды: халифы 909–1171 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/fatimids/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: null, mother: null, spouse: null, children: [] };
  }
  Object.assign(window.DYNASTIES, {
    fatimids: {
      id: 'fatimids', name: 'Фатимиды', heading: 'Династия Фатимидов', period: '909–1171', country: 'Египет · Северная Африка',
      intro: 'Четырнадцать халифов — от аль-Махди до аль-Адида. Включены краткие правления последних лет халифата.',
      members: [
        { id: 'fat_mahdi', name: 'Аль-Махди', born: 'ок. 873', died: 934, title: 'Халиф', reign: '909–934', generation: 0, bio: 'Основатель Фатимидского халифата.' },
        { id: 'fat_qaim', name: 'Аль-Каим', born: 893, died: 946, title: 'Халиф', reign: '934–946', generation: 1, bio: 'Правил во время войн с Умайядами.' },
        { id: 'fat_mansur', name: 'Аль-Мансур', born: 914, died: 953, title: 'Халиф', reign: '946–953', generation: 2, bio: 'Подавил восстание хариджитов.' },
        { id: 'fat_muizz', name: 'Аль-Муизз', born: 932, died: 975, title: 'Халиф', reign: '953–975', generation: 3, bio: 'Завоевал Египет и основал Каир.' },
        { id: 'fat_aziz', name: 'Аль-Азиз', born: 955, died: 996, title: 'Халиф', reign: '975–996', generation: 4, bio: 'Укрепил египетскую державу.' },
        { id: 'fat_hakim', name: 'Аль-Хаким', born: 985, died: 1021, title: 'Халиф', reign: '996–1021', generation: 5, bio: 'Наследовал ребёнком; его исчезновение породило легенды.' },
        { id: 'fat_zahir', name: 'Аз-Захир', born: 1005, died: 1036, title: 'Халиф', reign: '1021–1036', generation: 6, bio: 'Сын аль-Хакима.' },
        { id: 'fat_mustansir', name: 'Аль-Мустансир', born: 1029, died: 1094, title: 'Халиф', reign: '1036–1094', generation: 7, bio: 'Его долгое правление включало кризис и голод.' },
        { id: 'fat_mustali', name: 'Аль-Мустали', born: 1074, died: 1101, title: 'Халиф', reign: '1094–1101', generation: 8, bio: 'Пришёл к власти при поддержке аль-Афдаля.' },
        { id: 'fat_amir', name: 'Аль-Амир', born: 1096, died: 1130, title: 'Халиф', reign: '1101–1130', generation: 9, bio: 'Правил во время крестовых походов.' },
        { id: 'fat_hafiz', name: 'Аль-Хафиз', born: 'ок. 1074', died: 1149, title: 'Халиф', reign: '1130–1149', generation: 10, bio: 'Правил после династического кризиса.' },
        { id: 'fat_zafir', name: 'Аз-Зафир', born: 1133, died: 1154, title: 'Халиф', reign: '1149–1154', generation: 11, bio: 'Был убит в результате заговора.' },
        { id: 'fat_faiz', name: 'Аль-Фаиз', born: 1149, died: 1160, title: 'Халиф', reign: '1154–1160', generation: 12, bio: 'Наследовал ребёнком.' },
        { id: 'fat_adid', name: 'Аль-Адид', born: 1151, died: 1171, title: 'Последний фатимидский халиф', reign: '1160–1171', generation: 13, bio: 'После его смерти Саладин ликвидировал халифат.' }
      ].map(member)
    }
  });
})();
