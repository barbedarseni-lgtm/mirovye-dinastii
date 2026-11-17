// Штауфены: короли римлян, императоры и правители сицилийской ветви.
// Изображения и лицензии: CREDITS.md; прозвища: hohenstaufen-nicknames.js.
(() => {
  'use strict';

  const PD = 'Общественное достояние';
  const C = 'https://commons.wikimedia.org/wiki/File:';
  const photos = {
    staufen_conrad_iii: ['Миниатюра из хроники, XIII век', 'Неизвестный автор', PD, 'Konrad_III_Miniatur_13_Jahrhundert.jpg'],
    staufen_frederick_swabia: ['Миниатюра из Rauchbein-Chronik', 'Неизвестный автор', PD, 'Rauchbeinchronik_Herzog_Friedrich_II._von_Schwaben.png'],
    staufen_frederick_i: ['Бюст-реликварий из Каппенберга, XII век', 'Неизвестный автор', PD, 'Friedrich_I._Barbarossa.jpg'],
    staufen_henry_vi: ['Изображение Генриха VI в манускрипте', 'Неизвестный автор', PD, 'JindrichVIStauf_trun.jpg'],
    staufen_philip: ['Миниатюра из «Хроники епископов Хильдесхайма», XV век', 'Неизвестный автор', PD, 'Philipp_von_Schwaben.jpg'],
    staufen_frederick_ii: ['Миниатюра из трактата «Об искусстве охоты с птицами», XIII век', 'Неизвестный автор', PD, 'Frederick_II_and_eagle.jpg'],
    staufen_henry_vii: ['Изображение Генриха (VII) в манускрипте', 'Неизвестный автор', PD, 'Jindra7.jpg'],
    staufen_conrad_iv: ['Печать Конрада IV', 'Неизвестный автор', PD, 'Conrad_4_of_Germany.jpg'],
    staufen_conradin: ['Поздний портрет Конрадина', 'Неизвестный автор', PD, 'Konradin.jpg'],
    staufen_manfred: ['Миниатюра из трактата «Об искусстве охоты с птицами», 1258–1266 годы', 'Неизвестный автор', PD, 'Manfred_Sizilien_Manfredi_Sicilia_De_Arte_Venandi_cum_Avibus_-_dated_MSS_1258-1266.png'],
    staufen_constance_ii: ['Миниатюра из «Генеалогии королей Португалии», XVI век', 'Неизвестный автор', PD, 'D._Constança_de_Hohenstaufen,_Rainha_de_Aragão_-_The_Portuguese_Genealogy_(Genealogia_dos_Reis_de_Portugal).png']
  };

  function member(data) {
    const [photoKind, photoArtist, photoLicense, file] = photos[data.id];
    return {
      ...data,
      initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/hohenstaufens/${data.id}.webp?v=1`,
      photoKind, photoArtist, photoLicense,
      photoSource: `${C}${encodeURIComponent(file)}`,
      nickname: data.nickname || null,
      father: data.father || null,
      mother: null,
      spouse: null,
      children: data.children || []
    };
  }

  Object.assign(window.DYNASTIES, {
    hohenstaufens: {
      id: 'hohenstaufens',
      name: 'Штауфены',
      heading: 'Династия Штауфенов',
      period: '1138–1285',
      country: 'Священная Римская империя · Сицилия',
      intro: 'Десять правителей имперской и сицилийской линий и Фридрих II Швабский, связывающий Конрада III с потомками. Показаны короли римлян, императоры и монархи Сицилии; остальные герцоги Швабии в древо не включены.',
      members: [
        { id: 'staufen_conrad_iii', name: 'Конрад III', born: 1093, died: 1152, title: 'Король римлян', reign: 'Правление: 1138–1152', generation: 0,
          bio: 'Первый король из рода Штауфенов. Избран в 1138 году, участвовал во Втором крестовом походе; императорской короны так и не получил.' },
        { id: 'staufen_frederick_swabia', name: 'Фридрих II', born: 1090, died: 1147, title: 'Герцог Швабии', reign: 'Герцог Швабии: 1105–1147 · королём не был', generation: 1,
          bio: 'Старший брат Конрада III. Не занимал королевский престол, но его сын Фридрих Барбаросса продолжил правящую линию Штауфенов.', children: ['staufen_frederick_i'] },
        { id: 'staufen_frederick_i', name: 'Фридрих I', born: 1122, died: 1190, title: 'Король римлян; император Священной Римской империи', reign: 'Король: 1152–1190 · император: 1155–1190', generation: 2, nickname: 'Барбаросса',
          bio: 'Сын Фридриха II Швабского и племянник Конрада III. Стремился укрепить имперскую власть в Германии и Италии, шесть раз ходил в итальянские походы. Погиб во время Третьего крестового похода.', father: 'staufen_frederick_swabia', children: ['staufen_henry_vi', 'staufen_philip'] },
        { id: 'staufen_henry_vi', name: 'Генрих VI', born: 1165, died: 1197, title: 'Император Священной Римской империи; король Сицилии', reign: 'Император: 1191–1197 · Сицилия: 1194–1197', generation: 3,
          bio: 'Сын Фридриха I. Благодаря браку с Констанцией Сицилийской получил сицилийскую корону; пытался закрепить наследственный характер имперской власти.', father: 'staufen_frederick_i', children: ['staufen_frederick_ii'] },
        { id: 'staufen_philip', name: 'Филипп Швабский', born: 1177, died: 1208, title: 'Король римлян; герцог Швабии', reign: 'Правление: 1198–1208', generation: 3, nickname: 'Швабский',
          bio: 'Младший сын Фридриха I и дядя Фридриха II. Избран королём в противовес Оттону IV; их борьба завершилась только после убийства Филиппа в 1208 году.', father: 'staufen_frederick_i' },
        { id: 'staufen_frederick_ii', name: 'Фридрих II', born: 1194, died: 1250, title: 'Император Священной Римской империи; король Сицилии', reign: 'Король римлян: 1212–1250 · император: 1220–1250 · Сицилия: 1198–1250', generation: 4, nickname: 'Изумление мира',
          bio: 'Сын Генриха VI. Выстроил централизованное управление Сицилией, основал Неапольский университет и вёл долгую борьбу с папством; в 1229 году получил Иерусалим по договору.', father: 'staufen_henry_vi', children: ['staufen_henry_vii', 'staufen_conrad_iv', 'staufen_manfred', 'staufen_constance_ii'] },
        { id: 'staufen_henry_vii', name: 'Генрих (VII)', born: 1211, died: 1242, title: 'Король римлян при отце Фридрихе II', reign: 'Правление: 1220–1235', generation: 5,
          bio: 'Старший сын Фридриха II. Избран королём ребёнком; после восстания против отца в 1235 году был низложен и провёл остаток жизни в заключении в Италии.', father: 'staufen_frederick_ii' },
        { id: 'staufen_conrad_iv', name: 'Конрад IV', born: 1228, died: 1254, title: 'Король римлян; король Сицилии', reign: 'Король римлян: 1237–1254 · Сицилия: 1250–1254', generation: 5,
          bio: 'Сын Фридриха II. Наследовал борьбу с папством и противокоролями в Германии. После его смерти сицилийский престол перешёл к малолетнему Конрадину.', father: 'staufen_frederick_ii', children: ['staufen_conradin'] },
        { id: 'staufen_conradin', name: 'Конрадин', born: 1252, died: 1268, title: 'Король Сицилии; титулярный король Иерусалима', reign: 'Сицилия: 1254–1258 · номинальные права сохранял до 1268', generation: 6, nickname: 'Младший',
          bio: 'Сын Конрада IV. Пытался вернуть сицилийское королевство, но потерпел поражение при Тальякоццо и был казнён в Неаполе шестнадцати лет.', father: 'staufen_conrad_iv' },
        { id: 'staufen_manfred', name: 'Манфред', born: 1232, died: 1266, title: 'Король Сицилии', reign: 'Правление: 1258–1266', generation: 5,
          bio: 'Внебрачный сын Фридриха II. Сначала управлял Сицилией как регент Конрадина, затем короновался сам. Погиб в битве при Беневенто с войском Карла Анжуйского.', father: 'staufen_frederick_ii', children: ['staufen_constance_ii'] },
        { id: 'staufen_constance_ii', name: 'Констанция II', born: 1249, died: 1302, title: 'Королева Сицилии', reign: 'Правление: 1282–1285 · вместе с Педро III', generation: 6,
          bio: 'Дочь Манфреда и наследница Штауфенов. После Сицилийской вечерни вместе с мужем Педро III Арагонским правила Сицилией; их потомки продолжили королевскую линию.', father: 'staufen_manfred' }
      ].map(member)
    }
  });
})();
