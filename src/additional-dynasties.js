// Каролинги, Палеологи, Уэссекский дом и Кнютлинги.
// Изображения и лицензии: CREDITS.md; прозвища: additional-nicknames.js.
(() => {
  'use strict';

  function member(dynasty, data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return {
      ...data,
      initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/${dynasty}/${data.id}.webp?v=1`,
      photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'Неизвестный автор',
      photoLicense: image.license || 'Общественное достояние',
      photoSource: image.source,
      nickname: data.nickname || null,
      father: data.father || null,
      mother: null,
      spouse: null,
      children: data.children || []
    };
  }

  function members(dynasty, list) {
    return list.map((data) => member(dynasty, data));
  }

  Object.assign(window.DYNASTIES, {
    carolingians: {
      id: 'carolingians', name: 'Каролинги', heading: 'Династия Каролингов', period: '751–987', country: 'Франкское государство',
      intro: 'Пятнадцать правителей основной и восточнофранкской линий — от Пипина Короткого до Людовика V. Показаны короли франков и императоры Запада.',
      members: members('carolingians', [
        { id: 'carol_pepin', name: 'Пипин III', born: 714, died: 768, title: 'Король франков', reign: 'Правление: 751–768', generation: 0, nickname: 'Короткий', bio: 'Мажордом, свергший последнего Меровинга и основавший королевскую династию Каролингов.', children: ['carol_charlemagne'] },
        { id: 'carol_charlemagne', name: 'Карл I', born: 'ок. 747', died: 814, title: 'Король франков; император Запада', reign: 'Король: 768–814 · император: 800–814', generation: 1, nickname: 'Великий', bio: 'Сын Пипина III. Расширил Франкское государство и в 800 году был коронован императором в Риме.', father: 'carol_pepin', children: ['carol_louis_pious'] },
        { id: 'carol_louis_pious', name: 'Людовик I', born: 778, died: 840, title: 'Король франков; император Запада', reign: 'Правление: 814–840', generation: 2, nickname: 'Благочестивый', bio: 'Сын Карла Великого. Его разделы империи между сыновьями привели к междоусобицам и Верденскому договору 843 года.', father: 'carol_charlemagne', children: ['carol_lothair_i', 'carol_charles_bald', 'carol_louis_german'] },
        { id: 'carol_lothair_i', name: 'Лотарь I', born: 795, died: 855, title: 'Император Запада', reign: 'Император: 840–855', generation: 3, bio: 'Старший сын Людовика I. После Верденского раздела получил императорский титул и срединные земли.', father: 'carol_louis_pious', children: ['carol_louis_ii'] },
        { id: 'carol_louis_ii', name: 'Людовик II', born: 'ок. 825', died: 875, title: 'Император Запада; король Италии', reign: 'Император: 855–875', generation: 4, bio: 'Сын Лотаря I. Правил Италией и носил императорский титул, боролся с арабскими набегами на юге полуострова.', father: 'carol_lothair_i' },
        { id: 'carol_charles_bald', name: 'Карл II', born: 823, died: 877, title: 'Король Западно-Франкского королевства; император Запада', reign: 'Король: 843–877 · император: 875–877', generation: 3, nickname: 'Лысый', bio: 'Сын Людовика I. Получил западную часть империи по Верденскому договору и стал предком поздних французских Каролингов.', father: 'carol_louis_pious', children: ['carol_louis_stammerer'] },
        { id: 'carol_louis_german', name: 'Людовик II', born: 'ок. 806', died: 876, title: 'Король Восточно-Франкского королевства', reign: 'Правление: 843–876', generation: 3, nickname: 'Немецкий', bio: 'Сын Людовика I. Правил восточной частью Франкского государства, положившей начало Германскому королевству.', father: 'carol_louis_pious', children: ['carol_charles_fat'] },
        { id: 'carol_louis_stammerer', name: 'Людовик II', born: 846, died: 879, title: 'Король Западно-Франкского королевства', reign: 'Правление: 877–879', generation: 4, nickname: 'Заика', bio: 'Сын Карла Лысого. Его короткое правление прошло в борьбе с знатью и норманнами.', father: 'carol_charles_bald', children: ['carol_louis_iii', 'carol_carloman_ii', 'carol_charles_simple'] },
        { id: 'carol_louis_iii', name: 'Людовик III', born: 'ок. 863', died: 882, title: 'Король Западно-Франкского королевства', reign: 'Правление: 879–882 · с братом Карломаном', generation: 5, bio: 'Старший сын Людовика Заики. Правил севером вместе с братом и одержал победу над норманнами при Сокуре.', father: 'carol_louis_stammerer' },
        { id: 'carol_carloman_ii', name: 'Карломан II', born: 'ок. 866', died: 884, title: 'Король Западно-Франкского королевства', reign: 'Правление: 879–884 · с 882 года единолично', generation: 5, bio: 'Сын Людовика Заики. После смерти брата объединил западнофранкские земли под своей властью.', father: 'carol_louis_stammerer' },
        { id: 'carol_charles_fat', name: 'Карл III', born: 839, died: 888, title: 'Император Запада; король франков', reign: 'Император: 881–887 · Западные франки: 884–887', generation: 4, nickname: 'Толстый', bio: 'Сын Людовика Немецкого. Ненадолго воссоединил большую часть владений Карла Великого, но был низложен в 887 году.', father: 'carol_louis_german' },
        { id: 'carol_charles_simple', name: 'Карл III', born: 879, died: 929, title: 'Король Западно-Франкского королевства', reign: 'Правление: 898–922', generation: 5, nickname: 'Простоватый', bio: 'Посмертный сын Людовика Заики. Вернул престол после Эда Парижского и передал Нормандию Роллону по договору 911 года.', father: 'carol_louis_stammerer', children: ['carol_louis_iv'] },
        { id: 'carol_louis_iv', name: 'Людовик IV', born: 'ок. 920', died: 954, title: 'Король Западно-Франкского королевства', reign: 'Правление: 936–954', generation: 6, nickname: 'Заморский', bio: 'Сын Карла Простоватого. Вырос при английском дворе матери и был призван знатью на престол в 936 году.', father: 'carol_charles_simple', children: ['carol_lothair'] },
        { id: 'carol_lothair', name: 'Лотарь', born: 941, died: 986, title: 'Король Западно-Франкского королевства', reign: 'Правление: 954–986', generation: 7, bio: 'Сын Людовика IV. Боролся за Лотарингию и пытался ограничить влияние Гуго Капета.', father: 'carol_louis_iv', children: ['carol_louis_v'] },
        { id: 'carol_louis_v', name: 'Людовик V', born: 'ок. 967', died: 987, title: 'Король Западно-Франкского королевства', reign: 'Правление: 986–987', generation: 8, nickname: 'Ленивый', bio: 'Сын Лотаря и последний западнофранкский король рода. Его смерть без наследника привела к избранию Гуго Капета.', father: 'carol_lothair' }
      ])
    },

    palaiologoi: {
      id: 'palaiologoi', name: 'Палеологи', heading: 'Династия Палеологов', period: '1259–1453', country: 'Византия',
      intro: 'Десять императоров и соправителей последней правящей династии Византии — от Михаила VIII до Константина XI.',
      members: members('palaiologoi', [
        { id: 'pal_michael_viii', name: 'Михаил VIII', born: 1223, died: 1282, title: 'Византийский император', reign: 'Правление: 1259–1282 · в Константинополе с 1261', generation: 0, bio: 'Основатель императорской линии Палеологов. В 1261 году возвратил Константинополь и восстановил Византийскую империю.', children: ['pal_andronikos_ii'] },
        { id: 'pal_andronikos_ii', name: 'Андроник II', born: 1259, died: 1332, title: 'Византийский император', reign: 'Правление: 1282–1328', generation: 1, nickname: 'Старший', bio: 'Сын Михаила VIII. Его долгое правление отмечено экономическими трудностями, территориальными потерями и гражданской войной с внуком.', father: 'pal_michael_viii', children: ['pal_michael_ix'] },
        { id: 'pal_michael_ix', name: 'Михаил IX', born: 1277, died: 1320, title: 'Соправитель Византии', reign: 'Соимператор: 1294–1320', generation: 2, bio: 'Сын Андроника II и отец Андроника III. Был соправителем отца, но умер раньше него и не правил единолично.', father: 'pal_andronikos_ii', children: ['pal_andronikos_iii'] },
        { id: 'pal_andronikos_iii', name: 'Андроник III', born: 1297, died: 1341, title: 'Византийский император', reign: 'Правление: 1328–1341', generation: 3, nickname: 'Младший', bio: 'Внук Андроника II. Победил в гражданской войне; его правление связано с реформами и усилением сербской и османской угроз.', father: 'pal_michael_ix', children: ['pal_john_v'] },
        { id: 'pal_john_v', name: 'Иоанн V', born: 1332, died: 1391, title: 'Византийский император', reign: 'Правление: 1341–1391 · с перерывами', generation: 4, bio: 'Сын Андроника III. Наследовал ребёнком и большую часть жизни боролся за власть с Кантакузином, сыном и внуком.', father: 'pal_andronikos_iii', children: ['pal_andronikos_iv', 'pal_manuel_ii'] },
        { id: 'pal_andronikos_iv', name: 'Андроник IV', born: 1348, died: 1385, title: 'Византийский император', reign: 'Правление: 1376–1379', generation: 5, bio: 'Сын Иоанна V. При поддержке Генуи и Османской державы сверг отца, но позднее был вынужден уступить престол.', father: 'pal_john_v', children: ['pal_john_vii'] },
        { id: 'pal_john_vii', name: 'Иоанн VII', born: 1370, died: 1408, title: 'Византийский император', reign: 'Правление: 1390 · регент в 1399–1403', generation: 6, bio: 'Сын Андроника IV. Ненадолго захватил Константинополь, а позднее управлял столицей во время отсутствия Мануила II.', father: 'pal_andronikos_iv' },
        { id: 'pal_manuel_ii', name: 'Мануил II', born: 1350, died: 1425, title: 'Византийский император', reign: 'Правление: 1391–1425', generation: 5, bio: 'Сын Иоанна V. Искал помощь Запада против османов и оставил литературные и богословские сочинения.', father: 'pal_john_v', children: ['pal_john_viii', 'pal_constantine_xi'] },
        { id: 'pal_john_viii', name: 'Иоанн VIII', born: 1392, died: 1448, title: 'Византийский император', reign: 'Правление: 1425–1448', generation: 6, bio: 'Сын Мануила II. Пытался добиться военной помощи Европы через Ферраро-Флорентийскую унию церквей.', father: 'pal_manuel_ii' },
        { id: 'pal_constantine_xi', name: 'Константин XI', born: 1405, died: 1453, title: 'Последний византийский император', reign: 'Правление: 1449–1453', generation: 6, nickname: 'Драгаш', bio: 'Сын Мануила II. Возглавил оборону Константинополя и погиб при штурме города османами 29 мая 1453 года.', father: 'pal_manuel_ii' }
      ])
    },

    wessex: {
      id: 'wessex', name: 'Уэссекская', heading: 'Уэссекский дом', period: '802–1066', country: 'Уэссекс → Англия',
      intro: 'Семнадцать правителей основной линии — от Эгберта до Эдуарда Исповедника, включая оспариваемого короля Эльфварда.',
      members: members('wessex', [
        { id: 'wessex_egbert', name: 'Эгберт', born: 'ок. 770', died: 839, title: 'Король Уэссекса', reign: 'Правление: 802–839', generation: 0, bio: 'Возвратил Уэссексу независимость от Мерсии и расширил власть над другими англосаксонскими королевствами.', children: ['wessex_ethelwulf'] },
        { id: 'wessex_ethelwulf', name: 'Этельвульф', born: 'ок. 795', died: 858, title: 'Король Уэссекса', reign: 'Правление: 839–858', generation: 1, bio: 'Сын Эгберта. Боролся с викингами; четверо его сыновей по очереди занимали престол.', father: 'wessex_egbert', children: ['wessex_ethelbald', 'wessex_ethelbert', 'wessex_ethelred_i', 'wessex_alfred'] },
        { id: 'wessex_ethelbald', name: 'Этельбальд', born: 'ок. 834', died: 860, title: 'Король Уэссекса', reign: 'Правление: 858–860', generation: 2, bio: 'Старший сын Этельвульфа. Захватил власть ещё при жизни отца и правил после его смерти.', father: 'wessex_ethelwulf' },
        { id: 'wessex_ethelbert', name: 'Этельберт', born: 'ок. 835', died: 865, title: 'Король Уэссекса', reign: 'Правление: 860–865', generation: 2, bio: 'Сын Этельвульфа. Объединил Уэссекс и Кент в единое королевство.', father: 'wessex_ethelwulf' },
        { id: 'wessex_ethelred_i', name: 'Этельред I', born: 'ок. 837', died: 871, title: 'Король Уэссекса', reign: 'Правление: 865–871', generation: 2, bio: 'Сын Этельвульфа. Вместе с братом Альфредом сражался против Великой языческой армии.', father: 'wessex_ethelwulf' },
        { id: 'wessex_alfred', name: 'Альфред', born: 849, died: 899, title: 'Король Уэссекса', reign: 'Правление: 871–899', generation: 2, nickname: 'Великий', bio: 'Сын Этельвульфа. Остановил завоевание Уэссекса викингами, реформировал войско, законы и образование.', father: 'wessex_ethelwulf', children: ['wessex_edward_elder'] },
        { id: 'wessex_edward_elder', name: 'Эдуард', born: 'ок. 874', died: 924, title: 'Король англосаксов', reign: 'Правление: 899–924', generation: 3, nickname: 'Старший', bio: 'Сын Альфреда. Вместе с сестрой Этельфледой отвоевал значительную часть Данелаг.', father: 'wessex_alfred', children: ['wessex_elfweard', 'wessex_athelstan', 'wessex_edmund_i', 'wessex_eadred'] },
        { id: 'wessex_elfweard', name: 'Эльфвард', born: 'ок. 902', died: 924, title: 'Оспариваемый король Уэссекса', reign: 'Правление: 924 · около 16 дней', generation: 4, bio: 'Сын Эдуарда Старшего. Умер вскоре после отца; его включение в списки королей остаётся спорным.', father: 'wessex_edward_elder' },
        { id: 'wessex_athelstan', name: 'Этельстан', born: 'ок. 894', died: 939, title: 'Король английский', reign: 'Правление: 924–939 · король англов с 927', generation: 4, nickname: 'Славный', bio: 'Сын Эдуарда Старшего. Завершил объединение Англии и победил коалицию противников при Брунанбурхе.', father: 'wessex_edward_elder' },
        { id: 'wessex_edmund_i', name: 'Эдмунд I', born: 921, died: 946, title: 'Король английский', reign: 'Правление: 939–946', generation: 4, nickname: 'Великодушный', bio: 'Сын Эдуарда Старшего. Восстановил контроль над частью северных земель и погиб от руки разбойника.', father: 'wessex_edward_elder' },
        { id: 'wessex_eadred', name: 'Эдред', born: 'ок. 923', died: 955, title: 'Король английский', reign: 'Правление: 946–955', generation: 4, bio: 'Младший сын Эдуарда Старшего. Окончательно подчинил Нортумбрию после изгнания Эрика Кровавая Секира.', father: 'wessex_edward_elder' },
        { id: 'wessex_eadwig', name: 'Эдвиг', born: 'ок. 940', died: 959, title: 'Король английский', reign: 'Правление: 955–959', generation: 5, nickname: 'Красивый', bio: 'Сын Эдмунда I. В 957 году Мерсия и Нортумбрия признали королём его брата Эдгара.', father: 'wessex_edmund_i' },
        { id: 'wessex_edgar', name: 'Эдгар', born: 'ок. 943', died: 975, title: 'Король английский', reign: 'Правление: 959–975', generation: 5, nickname: 'Мирный', bio: 'Сын Эдмунда I. Его правление отличалось внутренней стабильностью и поддержкой церковных реформ.', father: 'wessex_edmund_i', children: ['wessex_edward_martyr', 'wessex_ethelred_ii'] },
        { id: 'wessex_edward_martyr', name: 'Эдуард', born: 'ок. 962', died: 978, title: 'Король английский', reign: 'Правление: 975–978', generation: 6, nickname: 'Мученик', bio: 'Сын Эдгара. Был убит в Корфе; позднее его стали почитать как мученика.', father: 'wessex_edgar' },
        { id: 'wessex_ethelred_ii', name: 'Этельред II', born: 'ок. 966', died: 1016, title: 'Король английский', reign: 'Правление: 978–1013 · 1014–1016', generation: 6, nickname: 'Нерешительный', bio: 'Сын Эдгара. Его правление сопровождалось датскими вторжениями и временной потерей престола.', father: 'wessex_edgar', children: ['wessex_edmund_ii', 'wessex_edward_confessor'] },
        { id: 'wessex_edmund_ii', name: 'Эдмунд II', born: 'ок. 990', died: 1016, title: 'Король английский', reign: 'Правление: 1016', generation: 7, nickname: 'Железнобокий', bio: 'Сын Этельреда II. Упорно сопротивлялся Кнуту, но после раздела страны вскоре умер.', father: 'wessex_ethelred_ii' },
        { id: 'wessex_edward_confessor', name: 'Эдуард', born: 'ок. 1003', died: 1066, title: 'Король английский', reign: 'Правление: 1042–1066', generation: 7, nickname: 'Исповедник', bio: 'Сын Этельреда II. Восстановил власть Уэссекского дома после датских королей; его смерть открыла кризис 1066 года.', father: 'wessex_ethelred_ii' }
      ])
    },

    knytlinga: {
      id: 'knytlinga', name: 'Кнютлинги', heading: 'Династия Кнютлингов', period: '1013–1042', country: 'Англия · Дания',
      intro: 'Четыре монарха датской династии Кнютлингов — от Свена Вилобородого до Хардекнуда, последнего датского короля Англии этой линии.',
      members: members('knytlinga', [
        { id: 'knyt_sweyn', name: 'Свен I', born: 'ок. 960', died: 1014, title: 'Король Дании и Англии', reign: 'Дания: 986–1014 · Англия: 1013–1014', generation: 0, nickname: 'Вилобородый', bio: 'Датский конунг, завоевавший английский престол незадолго до смерти. Отец Кнута Великого.', children: ['knyt_cnut'] },
        { id: 'knyt_cnut', name: 'Кнут', born: 'ок. 995', died: 1035, title: 'Король Англии, Дании и Норвегии', reign: 'Англия: 1016–1035 · Дания: 1018–1035 · Норвегия: 1028–1035', generation: 1, nickname: 'Великий', bio: 'Сын Свена I. Создал обширную североморскую державу и управлял Англией через местную знать и законы.', father: 'knyt_sweyn', children: ['knyt_harold', 'knyt_harthacnut'] },
        { id: 'knyt_harold', name: 'Гарольд I', born: 'ок. 1015', died: 1040, title: 'Король Англии', reign: 'Регент с 1035 · король: 1037–1040', generation: 2, nickname: 'Заячья Лапа', bio: 'Сын Кнута и Эльгивы Нортгемптонской. Занял английский престол, пока Хардекнут оставался в Дании.', father: 'knyt_cnut' },
        { id: 'knyt_harthacnut', name: 'Хардекнут', born: 'ок. 1018', died: 1042, title: 'Король Дании и Англии', reign: 'Дания: 1035–1042 · Англия: 1040–1042', generation: 2, bio: 'Сын Кнута и Эммы Нормандской. Последний король Англии из мужской линии Кнютлингов.', father: 'knyt_cnut' }
      ])
    }
  });
})();
