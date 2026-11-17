// Омейяды: халифы Дамаска и Кордовы.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/umayyads/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    umayyads: {
      id: 'umayyads', name: 'Омейяды', heading: 'Династия Омейядов', period: '661–1031', country: 'Дамаск · Кордова',
      intro: 'Тридцать халифов и эмиров — от Муавии I до Хишама III. Включены краткие правления и Кордовская ветвь.',
      members: [
        { id: 'uma_muawiya_i', name: 'Муавия I', born: 603, died: 680, title: 'Халиф', reign: 'Правление: 661–680', generation: 0, bio: 'Основатель Омейядского халифата.' },
        { id: 'uma_yazid_i', name: 'Язид I', born: 647, died: 683, title: 'Халиф', reign: 'Правление: 680–683', generation: 1, bio: 'Сын Муавии I. При нём произошла битва при Кербеле.' },
        { id: 'uma_muawiya_ii', name: 'Муавия II', born: 664, died: 684, title: 'Халиф', reign: 'Правление: 683–684', generation: 2, bio: 'Сын Язида I. Правил недолго.' },
        { id: 'uma_marwan_i', name: 'Марван I', born: 623, died: 685, title: 'Халиф', reign: 'Правление: 684–685', generation: 3, bio: 'Основатель марванидской ветви.' },
        { id: 'uma_abd_al_malik', name: 'Абд аль-Малик', born: 646, died: 705, title: 'Халиф', reign: 'Правление: 685–705', generation: 4, bio: 'Сын Марвана I. Провёл административную арабизацию.' },
        { id: 'uma_walid_i', name: 'Аль-Валид I', born: 668, died: 715, title: 'Халиф', reign: 'Правление: 705–715', generation: 5, bio: 'При нём халифат достиг наибольшей территории.' },
        { id: 'uma_sulayman', name: 'Сулейман', born: 674, died: 717, title: 'Халиф', reign: 'Правление: 715–717', generation: 5, bio: 'Сын Абд аль-Малика.' },
        { id: 'uma_umar_ii', name: 'Умар II', born: 682, died: 720, title: 'Халиф', reign: 'Правление: 717–720', generation: 6, bio: 'Известен налоговыми и социальными реформами.' },
        { id: 'uma_yazid_ii', name: 'Язид II', born: 687, died: 724, title: 'Халиф', reign: 'Правление: 720–724', generation: 6, bio: 'Сын Абд аль-Малика.' },
        { id: 'uma_hisham', name: 'Хишам', born: 691, died: 743, title: 'Халиф', reign: 'Правление: 724–743', generation: 6, bio: 'Сын Абд аль-Малика. Последний сильный халиф династии.' },
        { id: 'uma_walid_ii', name: 'Аль-Валид II', born: 706, died: 744, title: 'Халиф', reign: 'Правление: 743–744', generation: 7, bio: 'Был свергнут и убит.' },
        { id: 'uma_yazid_iii', name: 'Язид III', born: 701, died: 744, title: 'Халиф', reign: 'Правление: 744', generation: 7, bio: 'Правил несколько месяцев.' },
        { id: 'uma_ibrahim', name: 'Ибрахим', born: 703, died: 750, title: 'Халиф', reign: 'Правление: 744', generation: 7, bio: 'Кратко удерживал власть.' },
        { id: 'uma_marwan_ii', name: 'Марван II', born: 688, died: 750, title: 'Последний дамасский Омейяд', reign: 'Правление: 744–750', generation: 7, bio: 'Потерпел поражение от Аббасидов.' },
        { id: 'uma_abd_rahman_i', name: 'Абд ар-Рахман I', born: 731, died: 788, title: 'Эмир Кордовы', reign: 'Правление: 756–788', generation: 8, nickname: 'Сокол Курейш', bio: 'Бежал от Аббасидов и основал Кордовский эмират.' },
        { id: 'uma_hisham_i', name: 'Хишам I', born: 757, died: 796, title: 'Эмир Кордовы', reign: 'Правление: 788–796', generation: 9, bio: 'Сын Абд ар-Рахмана I.' },
        { id: 'uma_hakam_i', name: 'Аль-Хакам I', born: 771, died: 822, title: 'Эмир Кордовы', reign: 'Правление: 796–822', generation: 10, bio: 'Подавил восстания в эмирате.' },
        { id: 'uma_abd_rahman_ii', name: 'Абд ар-Рахман II', born: 792, died: 852, title: 'Эмир Кордовы', reign: 'Правление: 822–852', generation: 11, bio: 'Развивал Кордову и культуру.' },
        { id: 'uma_muhammad_i', name: 'Мухаммад I', born: 823, died: 886, title: 'Эмир Кордовы', reign: 'Правление: 852–886', generation: 12, bio: 'Правил при мозарабских восстаниях.' },
        { id: 'uma_mundhir', name: 'Аль-Мундир', born: 842, died: 888, title: 'Эмир Кордовы', reign: 'Правление: 886–888', generation: 13, bio: 'Продолжал войны на границах.' },
        { id: 'uma_abdallah', name: 'Абдаллах', born: 844, died: 912, title: 'Эмир Кордовы', reign: 'Правление: 888–912', generation: 13, bio: 'Укреплял власть в эмирате.' },
        { id: 'uma_abd_rahman_iii', name: 'Абд ар-Рахман III', born: 891, died: 961, title: 'Халиф Кордовы', reign: 'Правление: 912–961', generation: 14, bio: 'Провозгласил Кордовский халифат.' },
        { id: 'uma_hakam_ii', name: 'Аль-Хакам II', born: 915, died: 976, title: 'Халиф Кордовы', reign: 'Правление: 961–976', generation: 15, bio: 'Покровитель наук и библиотеки.' },
        { id: 'uma_hisham_ii', name: 'Хишам II', born: 965, died: 1013, title: 'Халиф Кордовы', reign: 'Правление: 976–1009 · 1010–1013', generation: 16, bio: 'Правил под властью аль-Мансура.' },
        { id: 'uma_muhammad_ii', name: 'Мухаммад II', born: 976, died: 1010, title: 'Халиф Кордовы', reign: 'Правление: 1009–1010', generation: 17, bio: 'Участник гражданской войны.' },
        { id: 'uma_sulayman_cordoba', name: 'Сулейман', born: 'неизвестно', died: 1016, title: 'Халиф Кордовы', reign: 'Правление: 1009–1010 · 1013–1016', generation: 17, bio: 'Дважды занимал престол.' },
        { id: 'uma_abd_rahman_iv', name: 'Абд ар-Рахман IV', born: 'неизвестно', died: 1018, title: 'Халиф Кордовы', reign: 'Правление: 1018', generation: 18, bio: 'Краткое правление в период фитны.' },
        { id: 'uma_abd_rahman_v', name: 'Абд ар-Рахман V', born: 1001, died: 1024, title: 'Халиф Кордовы', reign: 'Правление: 1023–1024', generation: 18, bio: 'Был свергнут и убит.' },
        { id: 'uma_muhammad_iii', name: 'Мухаммад III', born: 949, died: 1025, title: 'Халиф Кордовы', reign: 'Правление: 1024–1025', generation: 18, bio: 'Кратко правил во время распада.' },
        { id: 'uma_hisham_iii', name: 'Хишам III', born: 973, died: 1036, title: 'Последний кордовский Омейяд', reign: 'Правление: 1027–1031', generation: 19, bio: 'После его свержения халифат распался.' }
      ].map(member)
    }
  });
})();
