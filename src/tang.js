// Династия Тан: императоры Китая 618–907 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/tang/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: null, father: data.father || null, mother: data.mother || null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    tang: {
      id: 'tang', name: 'Тан', heading: 'Династия Тан', period: '618–907', country: 'Китай',
      intro: 'Двадцать два императора — от Гаоцзу до Ай-ди. Повторные правления и эпоха У Цзэтянь отмечены отдельно.',
      members: [
        { id: 'tang_gaozu', name: 'Гаоцзу', born: 566, died: 635, title: 'Император Тан', reign: 'Правление: 618–626', generation: 0, bio: 'Основатель династии.', children: ['tang_taizong'] },
        { id: 'tang_taizong', name: 'Тайцзун', born: 598, died: 649, title: 'Император Тан', reign: 'Правление: 626–649', generation: 1, bio: 'Сын Гаоцзу. Укрепил империю и администрацию.', father: 'tang_gaozu', children: ['tang_gaozong'] },
        { id: 'tang_gaozong', name: 'Гаоцзун', born: 628, died: 683, title: 'Император Тан', reign: 'Правление: 649–683', generation: 2, bio: 'Сын Тайцзуна. При нём расширилась власть императрицы У.', father: 'tang_taizong', children: ['tang_zhongzong', 'tang_ruizong'] },
        { id: 'tang_zhongzong', name: 'Чжунцзун', born: 656, died: 710, title: 'Император Тан', reign: 'Правление: 684 · 705–710', generation: 3, bio: 'Сын Гаоцзуна. Дважды был на престоле.', father: 'tang_gaozong', children: ['tang_shang'] },
        { id: 'tang_ruizong', name: 'Жуйцзун', born: 662, died: 716, title: 'Император Тан', reign: 'Правление: 684–690 · 710–712', generation: 3, bio: 'Сын Гаоцзуна. Уступил престол сыну.', father: 'tang_gaozong', children: ['tang_xuanzong'] },
        { id: 'tang_wu', name: 'У Цзэтянь', born: 624, died: 705, title: 'Императрица Китая', reign: 'Правление: 690–705', generation: 3, bio: 'Единственная женщина-император Китая, правившая самостоятельно.' },
        { id: 'tang_shang', name: 'Шан-ди', born: 695, died: 714, title: 'Император Тан', reign: 'Правление: 710', generation: 4, bio: 'Сын Чжунцзуна. Был свергнут.', father: 'tang_zhongzong' },
        { id: 'tang_xuanzong', name: 'Сюаньцзун', born: 685, died: 762, title: 'Император Тан', reign: 'Правление: 712–756', generation: 4, bio: 'Сын Жуйцзуна. Его долгое правление закончилось восстанием Ань Лушаня.', father: 'tang_ruizong', children: ['tang_suzong'] },
        { id: 'tang_suzong', name: 'Суцзун', born: 711, died: 762, title: 'Император Тан', reign: 'Правление: 756–762', generation: 5, bio: 'Сын Сюаньцзуна. Правил во время восстания.', father: 'tang_xuanzong', children: ['tang_daizong'] },
        { id: 'tang_daizong', name: 'Дайцзун', born: 726, died: 779, title: 'Император Тан', reign: 'Правление: 762–779', generation: 6, bio: 'Сын Суцзуна. Подавил восстание Ань Лушаня.', father: 'tang_suzong', children: ['tang_dezong'] },
        { id: 'tang_dezong', name: 'Дэцзун', born: 742, died: 805, title: 'Император Тан', reign: 'Правление: 779–805', generation: 7, bio: 'Сын Дайцзуна. Пытался ограничить наместников.', father: 'tang_daizong', children: ['tang_shunzong'] },
        { id: 'tang_shunzong', name: 'Шуньцзун', born: 761, died: 806, title: 'Император Тан', reign: 'Правление: 805', generation: 8, bio: 'Сын Дэцзуна. Отрёкся по болезни.', father: 'tang_dezong', children: ['tang_xianzong'] },
        { id: 'tang_xianzong', name: 'Сяньцзун', born: 778, died: 820, title: 'Император Тан', reign: 'Правление: 805–820', generation: 9, bio: 'Сын Шуньцзуна. Временно восстановил центральную власть.', father: 'tang_shunzong', children: ['tang_muzong', 'tang_xuanzong_ii'] },
        { id: 'tang_muzong', name: 'Муцзун', born: 795, died: 824, title: 'Император Тан', reign: 'Правление: 820–824', generation: 10, bio: 'Сын Сяньцзуна.', father: 'tang_xianzong', children: ['tang_jingzong', 'tang_wenzong', 'tang_wuzong'] },
        { id: 'tang_jingzong', name: 'Цзинцзун', born: 809, died: 826, title: 'Император Тан', reign: 'Правление: 824–826', generation: 11, bio: 'Сын Муцзуна. Был убит евнухами.', father: 'tang_muzong' },
        { id: 'tang_wenzong', name: 'Вэньцзун', born: 809, died: 840, title: 'Император Тан', reign: 'Правление: 826–840', generation: 11, bio: 'Сын Муцзуна. Правил при усилении евнухов.', father: 'tang_muzong' },
        { id: 'tang_wuzong', name: 'Уцзун', born: 814, died: 846, title: 'Император Тан', reign: 'Правление: 840–846', generation: 11, bio: 'Сын Муцзуна. Провёл буддийские гонения.', father: 'tang_muzong' },
        { id: 'tang_xuanzong_ii', name: 'Сюаньцзун II', born: 810, died: 859, title: 'Император Тан', reign: 'Правление: 846–859', generation: 10, bio: 'Сын Сяньцзуна и дядя Уцзуна.', father: 'tang_xianzong', children: ['tang_yizong'] },
        { id: 'tang_yizong', name: 'Ицзун', born: 832, died: 873, title: 'Император Тан', reign: 'Правление: 859–873', generation: 11, bio: 'Сын Сюаньцзуна II.', father: 'tang_xuanzong_ii', children: ['tang_xizong', 'tang_zhaozong'] },
        { id: 'tang_xizong', name: 'Сицзун', born: 862, died: 888, title: 'Император Тан', reign: 'Правление: 873–888', generation: 12, bio: 'Сын Ицзуна. Наследовал ребёнком.', father: 'tang_yizong' },
        { id: 'tang_zhaozong', name: 'Чжаоцзун', born: 867, died: 904, title: 'Император Тан', reign: 'Правление: 888–904', generation: 12, bio: 'Сын Ицзуна и брат Сицзуна. Был убит Чжу Вэнем.', father: 'tang_yizong', children: ['tang_ai'] },
        { id: 'tang_ai', name: 'Ай-ди', born: 892, died: 908, title: 'Последний император Тан', reign: 'Правление: 904–907', generation: 13, bio: 'Сын Чжаоцзуна. Отрёкся в пользу Чжу Вэня.', father: 'tang_zhaozong' }
      ].map(member)
    }
  });
})();
