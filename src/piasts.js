// Пясты: основная правящая линия и необходимые для родства удельные ветви.
// Изображения и лицензии: CREDITS.md; прозвища: piast-nicknames.js.
(() => {
  'use strict';

  const PD = 'Общественное достояние';
  const C = 'https://commons.wikimedia.org/wiki/File:';
  const matejko = 'Рисунок из серии «Короли и князья Польши», XIX век';
  const photos = {
    piast_mieszko_i: [matejko, 'Ян Матейко', PD, 'Mieszko1.jpg'],
    piast_boleslaw_i: [matejko, 'Ян Матейко', PD, 'Boleslaus I.jpg'],
    piast_mieszko_ii: [matejko, 'Ян Матейко', PD, 'Mieszko II Lambert.jpg'],
    piast_bezprym: ['Фрагмент картины «Коронация первого короля»', 'Ян Матейко', PD, 'Bezprym.jpeg'],
    piast_casimir_i: ['Карандашный рисунок из серии «Короли и князья Польши»', 'Ян Матейко', PD, 'Kazimierz I Odnowiciel.jpg'],
    piast_boleslaw_ii: [matejko, 'Ян Матейко', PD, 'Boleslaw Smialy.jpg'],
    piast_wladyslaw_i: [matejko, 'Ян Матейко', PD, 'Wladyslaw Herman.jpg'],
    piast_zbigniew: ['Иллюстрация из издания 1835 года', 'Леонард Ходзько', PD, 'Zbigniew (112832610).jpg'],
    piast_boleslaw_iii: [matejko, 'Ян Матейко', PD, 'Boleslav III of Poland.jpg'],
    piast_wladyslaw_ii: [matejko, 'Ян Матейко', PD, 'Wladyslaw II Wygnaniec.jpg'],
    piast_boleslaw_iv: [matejko, 'Ян Матейко', PD, 'Boleslaw IV Kedzierzawy.jpg'],
    piast_mieszko_iii: [matejko, 'Ян Матейко', PD, 'Mieszko III Stary.jpg'],
    piast_casimir_ii: [matejko, 'Ян Матейко', PD, 'Kazimierz II Sprawiedliwy 2.jpg'],
    piast_leszek_i: [matejko, 'Ян Матейко', PD, 'Leszek Bialy.jpg'],
    piast_wladyslaw_iii: [matejko, 'Ян Матейко', PD, 'Wladyslaw III Laskonogi.jpg'],
    piast_konrad_i: [matejko, 'Ян Матейко', PD, 'Konrad I Mazowiecki.jpg'],
    piast_boleslaw_tall: ['Портрет Болеслава I Высокого, XIX век', 'Ян Матейко', PD, 'Jan Matejko - Bolesław I Wysoki książę wrocławski.jpg'],
    piast_henry_i: [matejko, 'Ян Матейко', PD, 'Henryk Brodaty.jpg'],
    piast_henry_ii: ['Миниатюра из Кодекса Ядвиги, около 1353 года', 'Неизвестный автор', PD, 'Henryk II Pobożny (Hedwig Codex).jpg'],
    piast_boleslaw_v: [matejko, 'Ян Матейко', PD, 'Boleslaw V Wstydliwy.jpg'],
    piast_przemysl_i: ['Фотография предполагаемого портрета князя в костёле в Познани', 'Радомил (Radomil)', 'CC BY-SA 3.0', 'Głowa Przemysła I Poznań RB1.JPG'],
    piast_przemysl_ii: [matejko, 'Ян Матейко', PD, 'Przemysl II.jpg'],
    piast_casimir_kuyavia: ['Изображение на плоцкой патене XIII века, графическое воспроизведение', 'Максимилиан Фаянс', PD, 'Kazimierz I kujawski.JPG'],
    piast_wladyslaw_short: [matejko, 'Ян Матейко', PD, 'Wladyslaw Lokietek.jpg'],
    piast_casimir_iii: [matejko, 'Ян Матейко', PD, 'Kazimierz III Wielki.jpg']
  };

  function member(data) {
    const [photoKind, photoArtist, photoLicense, file] = photos[data.id];
    return {
      ...data,
      initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/piasts/${data.id}.webp?v=1`,
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
    piasts: {
      id: 'piasts',
      name: 'Пясты',
      heading: 'Династия Пястов',
      period: 'ок. 960–1370',
      country: 'Польша',
      intro: 'Двадцать пять представителей основной правящей линии и связанных с ней удельных ветвей — от Мешко I до Казимира III. После раздела 1138 года показаны только ветви, ведущие к следующим правителям и объединению королевства; это не полный перечень всех Пястов.',
      members: [
        { id: 'piast_mieszko_i', name: 'Мешко I', born: 'ок. 930', died: 992, title: 'Князь Польши', reign: 'Правление: ок. 960–992', generation: 0,
          bio: 'Первый исторически подтверждённый правитель полянского государства. Принял крещение в 966 году, расширял владения и оставил сыну Болеславу сильное государство.', children: ['piast_boleslaw_i'] },
        { id: 'piast_boleslaw_i', name: 'Болеслав I', born: 'ок. 967', died: 1025, title: 'Князь Польши; первый король Польши', reign: 'Правление: 992–1025 · король в 1025', generation: 1, nickname: 'Храбрый',
          bio: 'Сын Мешко I. Укрепил управление и церковную организацию, провёл Гнезненский съезд с Оттоном III в 1000 году и незадолго до смерти стал первым королём Польши.', father: 'piast_mieszko_i', children: ['piast_mieszko_ii', 'piast_bezprym'] },
        { id: 'piast_mieszko_ii', name: 'Мешко II', born: 'ок. 990', died: 1034, title: 'Король Польши; затем князь', reign: 'Правление: 1025–1031 · 1032–1034', generation: 2,
          bio: 'Сын Болеслава I. После нападения соседних держав в 1031 году бежал из страны, но в 1032-м вернулся к власти. Его правление сопровождалось территориальными потерями.', father: 'piast_boleslaw_i', children: ['piast_casimir_i'] },
        { id: 'piast_bezprym', name: 'Безприм', born: 'ок. 986', died: 1032, title: 'Князь Польши', reign: 'Правление: 1031–1032', generation: 2,
          bio: 'Старший сын Болеслава I и единокровный брат Мешко II. Занял престол после изгнания брата, но уже в 1032 году был убит, после чего Мешко II вернулся к власти.', father: 'piast_boleslaw_i' },
        { id: 'piast_casimir_i', name: 'Казимир I', born: 1016, died: 1058, title: 'Князь Польши', reign: 'Правление: 1040–1058', generation: 3, nickname: 'Восстановитель',
          bio: 'Сын Мешко II. После периода смут восстановил княжескую власть и вновь объединил важнейшие польские земли, включая Мазовию, Силезию и Поморье.', father: 'piast_mieszko_ii', children: ['piast_boleslaw_ii', 'piast_wladyslaw_i'] },
        { id: 'piast_boleslaw_ii', name: 'Болеслав II', born: 'ок. 1042', died: '1081/1082', title: 'Князь Польши; король с 1076 года', reign: 'Правление: 1058–1079 · король: 1076–1079', generation: 4, nickname: 'Смелый / Щедрый',
          bio: 'Сын Казимира I. Восстановил королевский титул, но конфликт с краковским епископом Станиславом завершился гибелью епископа и изгнанием Болеслава в 1079 году.', father: 'piast_casimir_i' },
        { id: 'piast_wladyslaw_i', name: 'Владислав I', born: 'ок. 1044', died: 1102, title: 'Князь Польши', reign: 'Правление: 1079–1102', generation: 4,
          bio: 'Сын Казимира I и брат Болеслава II. При нём большое влияние имел палатин Сецех; борьба сыновей Збигнева и Болеслава определила конец его правления.', father: 'piast_casimir_i', children: ['piast_zbigniew', 'piast_boleslaw_iii'] },
        { id: 'piast_zbigniew', name: 'Збигнев', born: 'ок. 1073', died: 'ок. 1113', title: 'Князь Польши, соправитель', reign: 'Правление: 1102–1107 · вместе с братом', generation: 5,
          bio: 'Сын Владислава I и старший единокровный брат Болеслава III. Правил частью польских земель, пока борьба с братом не закончилась его изгнанием в 1107 году.', father: 'piast_wladyslaw_i' },
        { id: 'piast_boleslaw_iii', name: 'Болеслав III', born: 1086, died: 1138, title: 'Князь Польши', reign: 'Правление: 1102–1138', generation: 5, nickname: 'Кривоустый',
          bio: 'Сын Владислава I. Победил в борьбе со Збигневом и укрепил власть над Поморьем. Завещание 1138 года разделило страну между сыновьями и закрепило удельную раздробленность.', father: 'piast_wladyslaw_i', children: ['piast_wladyslaw_ii', 'piast_boleslaw_iv', 'piast_mieszko_iii', 'piast_casimir_ii'] },
        { id: 'piast_wladyslaw_ii', name: 'Владислав II', born: 1105, died: 1159, title: 'Верховный князь Польши; князь Силезии', reign: 'Верховный князь: 1138–1146', generation: 6, nickname: 'Изгнанник',
          bio: 'Старший сын Болеслава III. Получил Силезию и старшинство среди Пястов, но после мятежа братьев в 1146 году был изгнан. Стал родоначальником силезской ветви.', father: 'piast_boleslaw_iii', children: ['piast_boleslaw_tall'] },
        { id: 'piast_boleslaw_iv', name: 'Болеслав IV', born: 'ок. 1122', died: 1173, title: 'Верховный князь Польши; князь Мазовии', reign: 'Верховный князь: 1146–1173', generation: 6, nickname: 'Кудрявый',
          bio: 'Сын Болеслава III, удельный князь Мазовии. После изгнания старшего брата Владислава II занял Краков и стал верховным князем.', father: 'piast_boleslaw_iii' },
        { id: 'piast_mieszko_iii', name: 'Мешко III', born: '1126/1127', died: 1202, title: 'Верховный князь Польши; князь Великой Польши', reign: 'Верховный князь: 1173–1177 · 1191 · 1198–1199 · 1201', generation: 6, nickname: 'Старый',
          bio: 'Сын Болеслава III, правитель Великой Польши. Неоднократно получал и терял краковское старшинство в ходе борьбы с другими Пястами.', father: 'piast_boleslaw_iii', children: ['piast_wladyslaw_iii'] },
        { id: 'piast_casimir_ii', name: 'Казимир II', born: 1138, died: 1194, title: 'Верховный князь Польши; князь Сандомира', reign: 'Верховный князь: 1177–1194 · с перерывом в 1191', generation: 6, nickname: 'Справедливый',
          bio: 'Младший сын Болеслава III, родившийся после смерти отца. Занял Краков в 1177 году; на сейме в Ленчице в 1180 году подтвердил привилегии духовенства.', father: 'piast_boleslaw_iii', children: ['piast_leszek_i', 'piast_konrad_i'] },
        { id: 'piast_boleslaw_tall', name: 'Болеслав I', born: 1127, died: 1201, title: 'Князь Силезии и Вроцлава', reign: 'Князь Вроцлава: 1163–1201', generation: 7, nickname: 'Высокий',
          bio: 'Сын Владислава II Изгнанника. После возвращения из изгнания правил Силезией; его сын Генрих Бородатый продолжил силезскую ветвь Пястов.', father: 'piast_wladyslaw_ii', children: ['piast_henry_i'] },
        { id: 'piast_wladyslaw_iii', name: 'Владислав III', born: '1161/1167', died: 1231, title: 'Князь Великой Польши; верховный князь Польши', reign: 'Верховный князь: 1202–1206 · 1228–1229', generation: 7, nickname: 'Тонконогий',
          bio: 'Сын Мешко III. Правил Великой Польшёй и дважды занимал Краков; его линия позднее дала короля Пшемысла II.', father: 'piast_mieszko_iii', children: ['piast_przemysl_i'] },
        { id: 'piast_leszek_i', name: 'Лешек I', born: 'ок. 1184/1185', died: 1227, title: 'Верховный князь Польши; князь Сандомира', reign: 'Верховный князь: 1194–1227 · с перерывами', generation: 7, nickname: 'Белый',
          bio: 'Сын Казимира II. Наследовал престол ребёнком и боролся за краковское старшинство с другими Пястами. Погиб на съезде князей в Гонсаве в 1227 году.', father: 'piast_casimir_ii', children: ['piast_boleslaw_v'] },
        { id: 'piast_konrad_i', name: 'Конрад I', born: 'ок. 1187/1188', died: 1247, title: 'Князь Мазовии; верховный князь Польши', reign: 'Мазовия: 1194–1247 · Краков: с перерывами, 1229–1243', generation: 7, nickname: 'Мазовецкий',
          bio: 'Сын Казимира II. Правил Мазовией, боролся с прусскими набегами и в 1226 году пригласил в Пруссию Тевтонский орден.', father: 'piast_casimir_ii', children: ['piast_casimir_kuyavia'] },
        { id: 'piast_henry_i', name: 'Генрих I', born: 'ок. 1165/1170', died: 1238, title: 'Князь Силезии; верховный князь Польши', reign: 'Князь Силезии: 1201–1238', generation: 8, nickname: 'Бородатый',
          bio: 'Сын Болеслава I Высокого. Расширил влияние силезских Пястов, поддерживал развитие городов и стремился объединить раздробленные польские земли.', father: 'piast_boleslaw_tall', children: ['piast_henry_ii'] },
        { id: 'piast_przemysl_i', name: 'Пшемысл I', born: '1220/1221', died: 1257, title: 'Князь Познани, Гнезна и Калиша', reign: 'Удельный князь: 1241–1257', generation: 8,
          bio: 'Сын Владислава III Тонконогого, один из правителей Великой Польши эпохи раздробленности. Его сын Пшемысл II восстановил польскую королевскую коронацию.', father: 'piast_wladyslaw_iii', children: ['piast_przemysl_ii'] },
        { id: 'piast_boleslaw_v', name: 'Болеслав V', born: 1226, died: 1279, title: 'Князь Сандомира; верховный князь Польши', reign: 'Верховный князь: 1243–1279', generation: 8, nickname: 'Целомудренный',
          bio: 'Сын Лешека I Белого. Правил Малой Польшей в период монгольских вторжений; не оставил сыновей, и его линия завершилась с его смертью.', father: 'piast_leszek_i' },
        { id: 'piast_casimir_kuyavia', name: 'Казимир I', born: 'ок. 1211', died: 1267, title: 'Князь Куявии', reign: 'Куявия: с 1233 · Ленчица: с 1247', generation: 8, nickname: 'Куявский',
          bio: 'Сын Конрада I Мазовецкого, удельный князь Куявии и Ленчицы. Его сын Владислав Короткий стал восстановителем единого Польского королевства.', father: 'piast_konrad_i', children: ['piast_wladyslaw_short'] },
        { id: 'piast_henry_ii', name: 'Генрих II', born: 1196, died: 1241, title: 'Князь Силезии; верховный князь Польши', reign: 'Верховный князь: 1238–1241', generation: 9, nickname: 'Благочестивый',
          bio: 'Сын Генриха I Бородатого. Продолжал политику отца по объединению польских земель; погиб в битве с монголами при Легнице 9 апреля 1241 года.', father: 'piast_henry_i' },
        { id: 'piast_przemysl_ii', name: 'Пшемысл II', born: 1257, died: 1296, title: 'Король Польши; князь Великой Польши', reign: 'Король Польши: 1295–1296', generation: 9,
          bio: 'Сын Пшемысла I. Объединил Великую Польшу и Гданьское Поморье, короновался в Гнезно в 1295 году и был убит через несколько месяцев.', father: 'piast_przemysl_i' },
        { id: 'piast_wladyslaw_short', name: 'Владислав I', born: '1260/1261', died: 1333, title: 'Король Польши', reign: 'Король Польши: 1320–1333', generation: 9, nickname: 'Короткий',
          bio: 'Сын Казимира I Куявского. После длительной борьбы с соперниками объединил значительную часть польских земель и короновался в Кракове в 1320 году.', father: 'piast_casimir_kuyavia', children: ['piast_casimir_iii'] },
        { id: 'piast_casimir_iii', name: 'Казимир III', born: 1310, died: 1370, title: 'Король Польши', reign: 'Правление: 1333–1370', generation: 10, nickname: 'Великий',
          bio: 'Сын Владислава I Короткого. Проводил правовые и административные реформы, основал Краковский университет в 1364 году. Последний польский король основной линии Пястов.', father: 'piast_wladyslaw_short' }
      ].map(member)
    }
  });
})();
