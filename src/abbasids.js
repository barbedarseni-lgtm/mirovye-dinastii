// Аббасиды: багдадские халифы 750–1258 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/abbasids/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: null, mother: null, spouse: null, children: [] };
  }
  Object.assign(window.DYNASTIES, {
    abbasids: {
      id: 'abbasids', name: 'Аббасиды', heading: 'Династия Аббасидов', period: '750–1258', country: 'Багдад',
      intro: 'Тридцать семь багдадских халифов — от ас-Саффаха до аль-Мустасима. Каирская линия Аббасидов в это древо не включена.',
      members: [
        { id: 'abb_saffah', name: 'Ас-Саффах', born: 721, died: 754, title: 'Халиф', reign: '750–754', generation: 0, nickname: 'Кровопроливец', bio: 'Основатель династии.' },
        { id: 'abb_mansur', name: 'Аль-Мансур', born: 714, died: 775, title: 'Халиф', reign: '754–775', generation: 1, bio: 'Основал Багдад.' },
        { id: 'abb_mahdi', name: 'Аль-Махди', born: 744, died: 785, title: 'Халиф', reign: '775–785', generation: 2, bio: 'Укреплял администрацию.' },
        { id: 'abb_hadi', name: 'Аль-Хади', born: 764, died: 786, title: 'Халиф', reign: '785–786', generation: 3, bio: 'Сын аль-Махди.' },
        { id: 'abb_harun', name: 'Харун ар-Рашид', born: 763, died: 809, title: 'Халиф', reign: '786–809', generation: 3, bio: 'Его эпоха связана с расцветом Багдада.' },
        { id: 'abb_amin', name: 'Аль-Амин', born: 787, died: 813, title: 'Халиф', reign: '809–813', generation: 4, bio: 'Сын Харуна. Погиб в гражданской войне.' },
        { id: 'abb_mamun', name: 'Аль-Мамун', born: 786, died: 833, title: 'Халиф', reign: '813–833', generation: 4, bio: 'Победил брата и поддерживал науки.' },
        { id: 'abb_mutasim', name: 'Аль-Мутасим', born: 796, died: 842, title: 'Халиф', reign: '833–842', generation: 5, bio: 'Основал Самарру.' },
        { id: 'abb_wathiq', name: 'Аль-Васик', born: 812, died: 847, title: 'Халиф', reign: '842–847', generation: 6, bio: 'Сын аль-Мутасима.' },
        { id: 'abb_mutawakkil', name: 'Аль-Мутаваккиль', born: 822, died: 861, title: 'Халиф', reign: '847–861', generation: 6, bio: 'Правил в Самарре.' },
        { id: 'abb_muntasir', name: 'Аль-Мунтасир', born: 837, died: 862, title: 'Халиф', reign: '861–862', generation: 7, bio: 'Сын аль-Мутаваккиля.' },
        { id: 'abb_mustaim', name: 'Аль-Мустаин', born: 836, died: 866, title: 'Халиф', reign: '862–866', generation: 8, bio: 'Правил во время анархии в Самарре.' },
        { id: 'abb_mutazz', name: 'Аль-Мутазз', born: 847, died: 869, title: 'Халиф', reign: '866–869', generation: 8, bio: 'Был свергнут и убит.' },
        { id: 'abb_muhtadi', name: 'Аль-Мухтади', born: 847, died: 870, title: 'Халиф', reign: '869–870', generation: 8, bio: 'Погиб в военном мятеже.' },
        { id: 'abb_mutamid', name: 'Аль-Мутамид', born: 842, died: 892, title: 'Халиф', reign: '870–892', generation: 9, bio: 'Фактическая власть была у брата аль-Муваффака.' },
        { id: 'abb_mutadid', name: 'Аль-Мутадид', born: 857, died: 902, title: 'Халиф', reign: '892–902', generation: 10, bio: 'Восстановил часть влияния халифата.' },
        { id: 'abb_muktafi', name: 'Аль-Муктафи', born: 877, died: 908, title: 'Халиф', reign: '902–908', generation: 11, bio: 'Подавил карматов.' },
        { id: 'abb_muqtadir', name: 'Аль-Муктадир', born: 895, died: 932, title: 'Халиф', reign: '908–932', generation: 12, bio: 'Наследовал ребёнком.' },
        { id: 'abb_qahir', name: 'Аль-Кахир', born: 899, died: 950, title: 'Халиф', reign: '929 · 932–934', generation: 12, bio: 'Дважды занимал престол.' },
        { id: 'abb_radi', name: 'Ар-Ради', born: 909, died: 940, title: 'Халиф', reign: '934–940', generation: 13, bio: 'При нём усилилась власть эмиров.' },
        { id: 'abb_muttaqi', name: 'Аль-Муттаки', born: 908, died: 968, title: 'Халиф', reign: '940–944', generation: 13, bio: 'Был ослеплён после свержения.' },
        { id: 'abb_mustakfi', name: 'Аль-Мустакфи', born: 905, died: 949, title: 'Халиф', reign: '944–946', generation: 13, bio: 'Был низложен Буидами.' },
        { id: 'abb_muti', name: 'Аль-Мути', born: 914, died: 974, title: 'Халиф', reign: '946–974', generation: 13, bio: 'Правил под контролем Буидов.' },
        { id: 'abb_tai', name: 'Ат-Таи', born: 932, died: 1003, title: 'Халиф', reign: '974–991', generation: 14, bio: 'Потерял реальную власть.' },
        { id: 'abb_qadir', name: 'Аль-Кадир', born: 947, died: 1031, title: 'Халиф', reign: '991–1031', generation: 14, bio: 'Укрепил религиозный авторитет.' },
        { id: 'abb_qaim', name: 'Аль-Каим', born: 1001, died: 1075, title: 'Халиф', reign: '1031–1075', generation: 15, bio: 'Правил при сельджуках.' },
        { id: 'abb_muqtadi', name: 'Аль-Муктади', born: 1056, died: 1094, title: 'Халиф', reign: '1075–1094', generation: 16, bio: 'Поддерживал сельджукскую администрацию.' },
        { id: 'abb_mustazhir', name: 'Аль-Мустазхир', born: 1078, died: 1118, title: 'Халиф', reign: '1094–1118', generation: 17, bio: 'Его эпоха включала крестовые походы.' },
        { id: 'abb_mustarshid', name: 'Аль-Мустаршид', born: 1092, died: 1135, title: 'Халиф', reign: '1118–1135', generation: 18, bio: 'Пытался вернуть военную самостоятельность.' },
        { id: 'abb_rashid', name: 'Ар-Рашид', born: 1109, died: 1138, title: 'Халиф', reign: '1135–1136', generation: 19, bio: 'Был низложен сельджуками.' },
        { id: 'abb_muqtafi', name: 'Аль-Муктафи II', born: 1096, died: 1160, title: 'Халиф', reign: '1136–1160', generation: 19, bio: 'Укрепил Багдад.' },
        { id: 'abb_mustanjid', name: 'Аль-Мустанджид', born: 1124, died: 1170, title: 'Халиф', reign: '1160–1170', generation: 20, bio: 'Сын аль-Муктафи.' },
        { id: 'abb_mustadi', name: 'Аль-Мустади', born: 1142, died: 1180, title: 'Халиф', reign: '1170–1180', generation: 21, bio: 'Современник Саладина.' },
        { id: 'abb_nasir', name: 'Ан-Насир', born: 1158, died: 1225, title: 'Халиф', reign: '1180–1225', generation: 22, bio: 'Восстановил международный авторитет халифата.' },
        { id: 'abb_zahir', name: 'Аз-Захир', born: 1176, died: 1226, title: 'Халиф', reign: '1225–1226', generation: 23, bio: 'Сын ан-Насира.' },
        { id: 'abb_mustansir', name: 'Аль-Мустансир', born: 1192, died: 1242, title: 'Халиф', reign: '1226–1242', generation: 24, bio: 'Основал медресе Мустансирия.' },
        { id: 'abb_mistasim', name: 'Аль-Мустасим', born: 1213, died: 1258, title: 'Последний багдадский халиф', reign: '1242–1258', generation: 25, bio: 'Был убит после монгольского штурма Багдада.' }
      ].map(member)
    }
  });
})();
