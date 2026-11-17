// Средневековые европейские династии: прямые Капетинги и основная линия Плантагенетов.
// Изображения и лицензии: CREDITS.md; объяснения прозвищ: european-nicknames.js.
(() => {
  'use strict';

  const PD = 'Общественное достояние';
  const C = 'https://commons.wikimedia.org/wiki/File:';
  const photos = {
    capet_hugh: ['Печать Гуго Капета, реконструкция по описанию Жана Мабийона', 'LeThéodorus', 'CC BY-SA 3.0', 'SceauHuguesCapet_(cropped).PNG'],
    capet_robert_ii: ['Миниатюра из хроники, XII век', 'Неизвестный автор', PD, 'Robert_II_of_France_kronika.jpg'],
    capet_henry_i: ['Оттиск печати Генриха I, публикация 1838 года', 'Natalis de Wailly', PD, 'Sceau_du_roi_Henri_Ier.jpg'],
    capet_philip_i: ['Оттиск печати Филиппа I, публикация 1838 года', 'Natalis de Wailly', PD, 'Sceau_du_roi_Philippe_Ier.jpg'],
    capet_louis_vi: ['Оттиск печати Людовика VI, публикация 1838 года', 'Natalis de Wailly (1805–1886)', PD, 'Louis_VI_of_France.jpg'],
    capet_louis_vii: ['Оттиск печати Людовика VII, публикация 1838 года', 'Natalis de Wailly (1805–1886)', PD, 'Louis_7.jpg'],
    capet_philip_ii: ['Слепок печати Филиппа II Августа, 1180 год', 'Автор не указан; Archives Nationales', PD, 'Sceau_de_Philippe_Auguste._-_Archives_Nationales_-_SC-D157.jpg'],
    capet_louis_viii: ['Оттиск печати Людовика VIII, публикация 1838 года', 'Natalis de Wailly', PD, 'Louis8.jpg'],
    capet_louis_ix: ['Миниатюра из Библии святого Людовика, XIII век', 'Неизвестный автор', PD, 'Saintlouis_(cropped).jpg'],
    capet_philip_iii: ['Миниатюра из «Больших французских хроник»', 'Неизвестный автор', 'CC BY-SA 3.0', 'Philip_III_of_France.jpg'],
    capet_philip_iv: ['Миниатюра из рукописи BnF MS lat. 8504, около 1313 года', 'Неизвестный автор', PD, 'Philip_IV_of_France_1285-1314.jpg'],
    capet_louis_x: ['Миниатюра из «Жития святого Людовика», около 1330–1340 годов', 'Неизвестный автор', PD, 'Ludv%C3%ADk_X.png'],
    capet_john_i: ['Надгробная фигура Иоанна I в базилике Сен-Дени', 'Фотография: Phidelorme', 'CC BY-SA 4.0', 'JeanIposthume.JPG'],
    capet_philip_v: ['Коронационная миниатюра из «Больших французских хроник», XIV век', 'Неизвестный автор', PD, 'Sacre_Philippe5_France_01_(cropped).jpg'],
    capet_charles_iv: ['Коронационная миниатюра из «Больших французских хроник», XIV век', 'Неизвестный французский художник XIV века', PD, 'Coronation_of_Charles_IV_the_Fair_(cropped).png'],
    plant_henry_ii: ['Миниатюра из «Топографии Ирландии» Гиральда Камбрийского, около 1186 года', 'Гиральд Камбрийский', PD, 'Henry_II_Illumination.jpg'],
    plant_richard_i: ['Надгробная фигура Ричарда I в аббатстве Фонтевро', 'Фотография: Adam Bishop', 'CC BY-SA 3.0', 'Church_of_Fontevraud_Abbey_Richard_I_effigy.jpg'],
    plant_john: ['Иллюстрация надгробия Иоанна в Вустерском соборе, 1915 год', 'Из «History of England» С. Р. Гардинера', PD, 'Jan_tomb.jpg'],
    plant_henry_iii: ['Коронационная миниатюра, около 1280–1300 годов', 'Неизвестный автор', PD, 'HenryIII.jpg'],
    plant_edward_i: ['Предполагаемый портрет Эдуарда I в Вестминстерском аббатстве, 1272–1307 годы', 'Неизвестный автор', PD, 'Edward_I_-_Westminster_Abbey_Sedilia.jpg'],
    plant_edward_ii: ['Надгробная фигура Эдуарда II в Глостерском соборе', 'Фотография: Tilman2007', 'CC BY-SA 4.0', 'Cathedral_Church_of_St_Peter_and_the_Holy_and_Indivisible_Trinity,_Monument_to_Edward_II_of_England_Gloucester_1245952_20230819_0030.jpg'],
    plant_edward_iii: ['Миниатюра из Garter Book Уильяма Брюджа, около 1430–1440 годов', 'Уильям Брюдж', PD, 'Edward_III_of_England_(Order_of_the_Garter).jpg'],
    plant_black_prince: ['Надгробная фигура Эдуарда Чёрного принца в Кентерберийском соборе', 'Фотография: Josep Renalias', 'CC BY-SA 2.5', 'TombaPrincepNegre_(cropped).JPG'],
    plant_richard_ii: ['Вестминстерский портрет Ричарда II, 1390-е годы', 'Неизвестный автор; возможно, André Beauneveu', PD, 'The_Westminster_Portrait_of_Richard_II_of_England_(1390s).jpg']
  };

  function member(dynasty, data) {
    const [photoKind, photoArtist, photoLicense, file] = photos[data.id];
    return {
      ...data,
      initials: data.initials || `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      title: data.title || `Король ${dynasty === 'capetians' ? 'Франции' : 'Англии'}`,
      born: data.born ?? data.years,
      died: data.died ?? '',
      photo: `./assets/${dynasty}/${data.id}.webp?v=1`,
      photoKind, photoArtist, photoLicense, photoSource: `${C}${file}`,
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
    capetians: {
      id: 'capetians',
      name: 'Капетинги',
      heading: 'Прямые Капетинги',
      period: '987–1328',
      country: 'Франция',
      intro: 'Пятнадцать королей прямой линии — от Гуго Капета до Карла IV. Валуа и Бурбоны, продолжившие род боковыми ветвями, в это древо не включены.',
      members: members('capetians', [
        {
          id: 'capet_hugh', name: 'Гуго Капет', born: 'ок. 940', died: 996, reign: 'Правление: 987–996', generation: 0, nickname: 'Капет',
          bio: 'Граф Парижа и герцог франков, избранный королём в 987 году после смерти Людовика V. Его восхождение на престол положило начало правлению Капетингов во Франции.',
          children: ['capet_robert_ii']
        },
        {
          id: 'capet_robert_ii', name: 'Роберт II', born: 'ок. 970', died: 1031, reign: 'Правление: 996–1031', generation: 1, nickname: 'Благочестивый',
          bio: 'Сын и соправитель Гуго Капета, самостоятельно правил после смерти отца. Его царствование было отмечено конфликтами с частью знати и сложными отношениями с Церковью.',
          father: 'capet_hugh', children: ['capet_henry_i']
        },
        {
          id: 'capet_henry_i', name: 'Генрих I', born: 1008, died: 1060, reign: 'Правление: 1031–1060', generation: 2,
          bio: 'Сын Роберта II. В начале правления столкнулся с противодействием матери и младшего брата, позднее укреплял королевскую власть в пределах своего домена.',
          father: 'capet_robert_ii', children: ['capet_philip_i']
        },
        {
          id: 'capet_philip_i', name: 'Филипп I', born: 1052, died: 1108, reign: 'Правление: 1060–1108', generation: 3, nickname: 'Влюбчивый',
          bio: 'Сын Генриха I, взошёл на престол ребёнком. Правление сопровождалось территориальными приобретениями королевского домена и продолжительным спором с Церковью.',
          father: 'capet_henry_i', children: ['capet_louis_vi']
        },
        {
          id: 'capet_louis_vi', name: 'Людовик VI', born: 1081, died: 1137, reign: 'Правление: 1108–1137', generation: 4, nickname: 'Толстый',
          bio: 'Сын Филиппа I. Подавлял мятежных баронов в королевском домене и укреплял администрацию; его советником был аббат Сугерий, автор жизнеописания короля.',
          father: 'capet_philip_i', children: ['capet_louis_vii']
        },
        {
          id: 'capet_louis_vii', name: 'Людовик VII', born: 'ок. 1120', died: 1180, reign: 'Правление: 1137–1180', generation: 5, nickname: 'Молодой',
          bio: 'Сын Людовика VI, участник Второго крестового похода. Брак с Алиенорой Аквитанской был расторгнут; её последующий брак с Генрихом Плантагенетом изменил расстановку сил во Франции.',
          father: 'capet_louis_vi', children: ['capet_philip_ii']
        },
        {
          id: 'capet_philip_ii', name: 'Филипп II', born: 1165, died: 1223, reign: 'Правление: 1180–1223', generation: 6, nickname: 'Август',
          bio: 'Сын Людовика VII. Существенно расширил королевский домен, прежде всего за счёт владений английских Плантагенетов; победа при Бувине в 1214 году укрепила его власть.',
          father: 'capet_louis_vii', children: ['capet_louis_viii']
        },
        {
          id: 'capet_louis_viii', name: 'Людовик VIII', born: 1187, died: 1226, reign: 'Правление: 1223–1226', generation: 7, nickname: 'Лев',
          bio: 'Сын Филиппа II. До восхождения на престол участвовал в войнах отца и вторжении в Англию; его короткое царствование связано с продолжением Альбигойского крестового похода.',
          father: 'capet_philip_ii', children: ['capet_louis_ix']
        },
        {
          id: 'capet_louis_ix', name: 'Людовик IX', born: 1214, died: 1270, reign: 'Правление: 1226–1270', generation: 8, nickname: 'Святой',
          bio: 'Сын Людовика VIII. Его правление запомнилось судебными и административными преобразованиями, двумя крестовыми походами и репутацией набожного монарха; в 1297 году он был канонизирован.',
          father: 'capet_louis_viii', children: ['capet_philip_iii']
        },
        {
          id: 'capet_philip_iii', name: 'Филипп III', born: 1245, died: 1285, reign: 'Правление: 1270–1285', generation: 9, nickname: 'Смелый',
          bio: 'Сын Людовика IX. Присоединил к королевскому домену ряд территорий, включая Тулузское графство; его правление завершилось неудачным походом в Арагон.',
          father: 'capet_louis_ix', children: ['capet_philip_iv']
        },
        {
          id: 'capet_philip_iv', name: 'Филипп IV', born: 1268, died: 1314, reign: 'Правление: 1285–1314', generation: 10, nickname: 'Красивый',
          bio: 'Сын Филиппа III. Усиливал королевскую администрацию, конфликтовал с папой Бонифацием VIII и добился роспуска ордена тамплиеров. Его три сына по очереди занимали престол.',
          father: 'capet_philip_iii', children: ['capet_louis_x', 'capet_philip_v', 'capet_charles_iv']
        },
        {
          id: 'capet_louis_x', name: 'Людовик X', born: 1289, died: 1316, reign: 'Правление: 1314–1316', generation: 11, nickname: 'Сварливый',
          bio: 'Старший сын Филиппа IV. Недолгое правление прошло в условиях выступлений знати; после его смерти беременность вдовы и вопрос наследования вызвали династический кризис.',
          father: 'capet_philip_iv', children: ['capet_john_i']
        },
        {
          id: 'capet_john_i', name: 'Иоанн I', born: 1316, died: 1316, reign: 'Правление: 1316 · пять дней', generation: 12, nickname: 'Посмертный',
          bio: 'Посмертный сын Людовика X, единственный французский король, правивший от рождения. Умер на пятый день жизни; его дядя Филипп стал следующим королём.',
          father: 'capet_louis_x'
        },
        {
          id: 'capet_philip_v', name: 'Филипп V', born: 'ок. 1292', died: 1322, reign: 'Правление: 1316–1322', generation: 11, nickname: 'Длинный',
          bio: 'Второй сын Филиппа IV и дядя Иоанна I. Занял престол после смерти малолетнего племянника; проводил административные и финансовые преобразования.',
          father: 'capet_philip_iv'
        },
        {
          id: 'capet_charles_iv', name: 'Карл IV', born: 1294, died: 1328, reign: 'Правление: 1322–1328', generation: 11, nickname: 'Красивый',
          bio: 'Младший сын Филиппа IV и последний монарх прямой линии Капетингов. Не оставил сыновей; после его смерти престол перешёл к Филиппу VI из рода Валуа.',
          father: 'capet_philip_iv'
        }
      ])
    },

    plantagenets: {
      id: 'plantagenets',
      name: 'Плантагенеты',
      heading: 'Дом Плантагенетов',
      period: '1154–1399',
      country: 'Англия',
      intro: 'Восемь королей основной линии и Эдуард Чёрный принц, связывающий Эдуарда III с Ричардом II. Ланкастерская и Йоркская ветви в это древо не включены.',
      members: members('plantagenets', [
        {
          id: 'plant_henry_ii', name: 'Генрих II', born: 1133, died: 1189, reign: 'Правление: 1154–1189', generation: 0, nickname: 'Короткий плащ',
          bio: 'Сын Жоффруа Плантагенета и Матильды, первый английский король этой династии. Контролировал обширные владения в Англии и Франции, проводил судебные преобразования.',
          children: ['plant_richard_i', 'plant_john']
        },
        {
          id: 'plant_richard_i', name: 'Ричард I', born: 1157, died: 1199, reign: 'Правление: 1189–1199', generation: 1, nickname: 'Львиное Сердце',
          bio: 'Сын Генриха II, участник Третьего крестового похода. Большую часть правления провёл вне Англии; погиб от раны, полученной при осаде замка Шалю-Шаброль.',
          father: 'plant_henry_ii'
        },
        {
          id: 'plant_john', name: 'Иоанн', born: 'ок. 1166', died: 1216, reign: 'Правление: 1199–1216', generation: 1, nickname: 'Безземельный',
          bio: 'Младший сын Генриха II и брат Ричарда I. Потерял значительную часть французских владений; конфликт с баронами привёл к подписанию Великой хартии вольностей в 1215 году.',
          father: 'plant_henry_ii', children: ['plant_henry_iii']
        },
        {
          id: 'plant_henry_iii', name: 'Генрих III', born: 1207, died: 1272, reign: 'Правление: 1216–1272', generation: 2,
          bio: 'Сын Иоанна, взошёл на престол девятилетним. Его долгое царствование включало Баронскую войну и Оксфордские провизии, ограничивавшие королевскую власть.',
          father: 'plant_john', children: ['plant_edward_i']
        },
        {
          id: 'plant_edward_i', name: 'Эдуард I', born: 1239, died: 1307, reign: 'Правление: 1272–1307', generation: 3, nickname: 'Длинноногий',
          bio: 'Сын Генриха III. Завоевал Уэльс, вёл войны в Шотландии и проводил правовые и административные реформы; при нём развивалась практика созыва парламента.',
          father: 'plant_henry_iii', children: ['plant_edward_ii']
        },
        {
          id: 'plant_edward_ii', name: 'Эдуард II', born: 1284, died: 1327, reign: 'Правление: 1307–1327', generation: 4,
          bio: 'Сын Эдуарда I. Его правление было отмечено конфликтами с баронами и поражением при Бэннокберне; в 1327 году он был вынужден отречься в пользу сына.',
          father: 'plant_edward_i', children: ['plant_edward_iii']
        },
        {
          id: 'plant_edward_iii', name: 'Эдуард III', born: 1312, died: 1377, reign: 'Правление: 1327–1377', generation: 5,
          bio: 'Сын Эдуарда II. Начал Столетнюю войну с Францией, одержал победы при Креси и Пуатье; его правление также охватывает эпидемию Чёрной смерти.',
          father: 'plant_edward_ii', children: ['plant_black_prince']
        },
        {
          id: 'plant_black_prince', name: 'Эдуард Чёрный принц', born: 1330, died: 1376, title: 'Принц Уэльский', reign: 'Принц Уэльский: с 1343 · королём не был', generation: 6, nickname: 'Чёрный принц',
          bio: 'Старший сын Эдуарда III, полководец при Креси и Пуатье. Умер раньше отца и не занял престол; его сын стал королём Ричардом II.',
          father: 'plant_edward_iii', children: ['plant_richard_ii']
        },
        {
          id: 'plant_richard_ii', name: 'Ричард II', born: 1367, died: 1400, reign: 'Правление: 1377–1399', generation: 7,
          bio: 'Сын Эдуарда Чёрного принца и внук Эдуарда III. Подавил Крестьянское восстание 1381 года, позднее был свергнут Генрихом Болингброком; это завершило правление основной линии Плантагенетов.',
          father: 'plant_black_prince'
        }
      ])
    }
  });
})();
