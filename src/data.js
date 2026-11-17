// Данные вынесены отдельно: новую династию можно добавить аналогичным объектом.
window.DYNASTIES = {
  romanovs: {
    id: 'romanovs',
    name: 'Романовы',
    heading: 'Дом Романовых',
    period: '1613–1917',
    country: 'Россия',
    intro: 'От основателя династии к последнему императору. Нажмите на любого человека, чтобы открыть биографию, проверенное прозвище и сведения об изображении.',
    members: [
      {
        id: 'michael_i', name: 'Михаил Фёдорович', initials: 'М. Ф.',
        born: 1596, died: 1645, title: 'Царь Всея Руси', reign: 'Правление: 1613–1645', generation: 0,
        photo: './assets/romanovs/michael_i.webp?v=5', photoArtist: 'Иоганн Генрих Ведекинд', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Michael-I-Romanov-Wedekind_(cropped).jpg',
        nickname: null,
        bio: 'Первый царь из дома Романовых, избранный Земским собором в 1613 году. Его правление стало периодом восстановления страны после Смутного времени.',
        father: null, mother: null, spouse: null, children: ['alexei_m']
      },
      {
        id: 'alexei_m', name: 'Алексей Михайлович', initials: 'А. М.',
        born: 1629, died: 1676, title: 'Царь Всея Руси', reign: 'Правление: 1645–1676', generation: 1,
        photo: './assets/romanovs/alexei_m.webp?v=5', photoArtist: 'Неизвестный художник', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Alexis_I_of_Russia_(1670-1680s,_GIM).jpg',
        nickname: 'Тишайший', nicknameSource: 'https://www.prlib.ru/history/619127', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Прозвище закрепилось в исторических описаниях Алексея Михайловича.',
        bio: 'Второй Романов на русском престоле. При нём было принято Соборное уложение 1649 года, усилена центральная власть и проведена церковная реформа.',
        father: 'michael_i', mother: null, spouse: null, children: ['feodor_iii', 'sophia', 'peter_i']
      },
      {
        id: 'feodor_iii', name: 'Фёдор III Алексеевич', initials: 'Ф. III',
        born: 1661, died: 1682, title: 'Царь Всея Руси', reign: 'Правление: 1676–1682', generation: 2,
        photo: './assets/romanovs/feodor_iii.webp?v=5', photoArtist: 'Неизвестный художник', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Feodor_III_of_Russia.jpg',
        nickname: null,
        bio: 'Сын Алексея Михайловича и Марии Милославской. За его недолгое правление было отменено местничество — важный шаг в изменении системы государственной службы.',
        father: 'alexei_m', mother: null, spouse: null, children: []
      },
      {
        id: 'sophia', name: 'Софья Алексеевна', initials: 'С. А.',
        born: 1657, died: 1704, title: 'Царевна и регент', reign: 'Регентство: 1682–1689', generation: 2,
        photo: './assets/romanovs/sophia.webp?v=5', photoArtist: 'Неизвестный западноевропейский художник', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Sophia_Alekseyevna_of_Russia.jpg',
        nickname: null,
        bio: 'Дочь Алексея Михайловича и Марии Милославской. Была регентшей при Иване V и Петре I, а после прихода Петра к самостоятельному правлению оказалась в Новодевичьем монастыре.',
        father: 'alexei_m', mother: null, spouse: null, children: []
      },
      {
        id: 'peter_i', name: 'Пётр I Великий', initials: 'П. I',
        born: 1672, died: 1725, title: 'Император Всероссийский', reign: 'Правление: 1682–1725', generation: 2,
        photo: './assets/romanovs/peter_i.webp?v=5', photoArtist: 'Приписывается Жан-Марку Натье', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Inconnu_d%27apr%C3%A8s_J.-M._Nattier,_Portrait_de_Pierre_Ier_(mus%C3%A9e_de_l%E2%80%99Ermitage).jpg',
        nickname: 'Великий', nicknameSource: 'https://www.prlib.ru/history/619530', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Официальный титул, принятый Петром I в 1721 году после Ништадтского мира.',
        bio: 'Сын Алексея Михайловича и Натальи Нарышкиной. Провёл масштабные государственные и военные реформы, основал Санкт-Петербург и в 1721 году принял титул императора.',
        father: 'alexei_m', mother: null, spouse: null, children: ['anna_petrovna', 'elizabeth']
      },
      {
        id: 'anna_petrovna', name: 'Анна Петровна', initials: 'А. П.',
        born: 1708, died: 1728, title: 'Цесаревна', reign: 'Дочь Петра I', generation: 3,
        photo: './assets/romanovs/anna_petrovna.webp?v=5', photoArtist: 'Иван Никитич Никитин', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Anna_Petrovna_of_Russia_by_I.Nikitin_(before_1718,_Tretyakov_gallery).jpg',
        nickname: null,
        bio: 'Дочь Петра I и Екатерины I, мать Петра III. Брак с герцогом Голштейн-Готторпским связал Романовых с североевропейской правящей фамилией.',
        father: 'peter_i', mother: null, spouse: null, children: ['peter_iii']
      },
      {
        id: 'elizabeth', name: 'Елизавета Петровна', initials: 'Е. П.',
        born: 1709, died: 1762, title: 'Императрица Всероссийская', reign: 'Правление: 1741–1761', generation: 3,
        photo: './assets/romanovs/elizabeth.webp?v=5', photoArtist: 'Вигилиус Эриксен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Elizabeth_of_Russia_by_V.Eriksen.jpg',
        nickname: null,
        bio: 'Дочь Петра I и Екатерины I, пришла к власти после дворцового переворота 1741 года. В её царствование был основан Московский университет, активно развивались наука и архитектура.',
        father: 'peter_i', mother: null, spouse: null, children: []
      },
      {
        id: 'peter_iii', name: 'Пётр III Фёдорович', initials: 'П. III',
        born: 1728, died: 1762, title: 'Император Всероссийский', reign: 'Правление: 1761–1762', generation: 4,
        photo: './assets/romanovs/peter_iii.webp?v=5', photoArtist: 'Лукас Конрад Пфандцельт', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Coronation_portrait_of_Peter_III_of_Russia_-1761.JPG',
        nickname: null,
        bio: 'Внук Петра I по материнской линии, сын Анны Петровны. Правил менее года; после дворцового переворота 1762 года престол перешёл к Екатерине II.',
        father: null, mother: 'anna_petrovna', spouse: 'catherine_ii', children: ['paul_i']
      },
      {
        id: 'catherine_ii', name: 'Екатерина II Великая', initials: 'Е. II',
        born: 1729, died: 1796, title: 'Императрица Всероссийская', reign: 'Правление: 1762–1796', generation: 4,
        photo: './assets/romanovs/catherine_ii.webp?v=5', photoArtist: 'По работе Александра Рослина', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Catherine_II_after_Roslin,_Rokotov_(1780s,_Kunsthistorisches_Museum).jpg',
        nickname: 'Великая', nicknameSource: 'https://www.prlib.ru/news/1314640', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Устоявшееся именование императрицы в исторической традиции.',
        bio: 'Жена Петра III и мать Павла I, правила России 34 года. Её эпоха связана с расширением империи, административными преобразованиями и покровительством просвещению.',
        father: null, mother: null, spouse: 'peter_iii', children: ['paul_i']
      },
      {
        id: 'paul_i', name: 'Павел I Петрович', initials: 'П. I',
        born: 1754, died: 1801, title: 'Император Всероссийский', reign: 'Правление: 1796–1801', generation: 5,
        photo: './assets/romanovs/paul_i.webp?v=5', photoArtist: 'Владимир Боровиковский', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Emperor_Paul_I_of_Russia.png',
        nickname: 'Русский Гамлет', nicknameSource: 'https://www.prlib.ru/news/688829', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Не прижизненное прозвище: так Павла называли некоторые исследователи из-за сходства его семейной истории с сюжетом «Гамлета».',
        bio: 'Сын Петра III и Екатерины II. В 1797 году ввёл новый порядок престолонаследия, который действовал до конца Российской империи.',
        father: 'peter_iii', mother: 'catherine_ii', spouse: null, children: ['alexander_i', 'nicholas_i']
      },
      {
        id: 'alexander_i', name: 'Александр I Павлович', initials: 'А. I',
        born: 1777, died: 1825, title: 'Император Всероссийский', reign: 'Правление: 1801–1825', generation: 6,
        photo: './assets/romanovs/alexander_i.webp?v=5', photoArtist: 'Джордж Доу', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Alexander_I_of_Russia_by_G.Dawe_(1826,_Peterhof)-crop.jpg',
        nickname: 'Благословенный', nicknameSource: 'https://www.prlib.ru/news/1722971', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Имя, которое Александр I получил у подданных; оно закрепилось в исторической литературе.',
        bio: 'Старший сын Павла I. В годы его правления Россия одержала победу в Отечественной войне 1812 года; после наполеоновских войн он участвовал в создании Священного союза.',
        father: 'paul_i', mother: null, spouse: null, children: []
      },
      {
        id: 'nicholas_i', name: 'Николай I Павлович', initials: 'Н. I',
        born: 1796, died: 1855, title: 'Император Всероссийский', reign: 'Правление: 1825–1855', generation: 6,
        photo: './assets/romanovs/nicholas_i.webp?v=5', photoArtist: 'Георг фон Ботман', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Botman_-_Emperor_Nicholas_I_(cropped)_(b).jpg',
        nickname: 'Палкин', nicknameSource: 'https://arzamas.academy/mag/1194-nik1', nicknameSourceLabel: 'Arzamas',
        nicknameNote: 'Солдатское прозвище, связанное с телесными наказаниями; его распространению способствовал одноимённый памфлет Льва Толстого.',
        bio: 'Младший сын Павла I и брат Александра I. Его тридцатилетнее правление запомнилось укреплением централизованной власти и строительством Николаевской железной дороги.',
        father: 'paul_i', mother: null, spouse: null, children: ['alexander_ii']
      },
      {
        id: 'alexander_ii', name: 'Александр II Николаевич', initials: 'А. II',
        born: 1818, died: 1881, title: 'Император Всероссийский', reign: 'Правление: 1855–1881', generation: 7,
        photo: './assets/romanovs/alexander_ii.webp?v=5', photoArtist: 'Приписывается W. & D. Downey', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Zar_Alexander_II_(cropped)_(cropped).jpg',
        nickname: 'Освободитель', nicknameSource: 'https://shm.ru/aleksandr/', nicknameSourceLabel: 'Государственный исторический музей',
        nicknameNote: 'Прозвище связано прежде всего с отменой крепостного права в 1861 году.',
        bio: 'Сын Николая I. Отменил крепостное право в 1861 году; также провёл судебную, военную и земскую реформы.',
        father: 'nicholas_i', mother: null, spouse: null, children: ['alexander_iii']
      },
      {
        id: 'alexander_iii', name: 'Александр III Александрович', initials: 'А. III',
        born: 1845, died: 1894, title: 'Император Всероссийский', reign: 'Правление: 1881–1894', generation: 8,
        photo: './assets/romanovs/alexander_iii.webp?v=5', photoArtist: 'Сергей Львович Левицкий', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Tsar_Alexander_III_c._1885.jpg',
        nickname: 'Миротворец', nicknameSource: 'https://shm.ru/aleksandr/', nicknameSourceLabel: 'Государственный исторический музей',
        nicknameNote: 'Так его называли современники, поскольку в годы его правления Россия не участвовала в войнах.',
        bio: 'Сын Александра II. Его царствование не сопровождалось участием России в крупных войнах, за что он получил прозвище «Миротворец».',
        father: 'alexander_ii', mother: null, spouse: null, children: ['nicholas_ii']
      },
      {
        id: 'nicholas_ii', name: 'Николай II Александрович', initials: 'Н. II',
        born: 1868, died: 1918, title: 'Император Всероссийский', reign: 'Правление: 1894–1917', generation: 9,
        photo: './assets/romanovs/nicholas_ii.webp?v=5', photoArtist: 'Неизвестный фотограф', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Nicholas_II,_Russian_Emperor_(cropped_2).jpg',
        nickname: 'Кровавый', nicknameSource: 'https://www.svoboda.org/a/nicholas-ii-russian-tsar/29368068.html', nicknameSourceLabel: 'Радио «Свобода»',
        nicknameNote: 'Оценочное прозвище времён правления; источник связывает его прежде всего с Ходынской трагедией и последующими событиями.',
        bio: 'Последний император Российской империи, сын Александра III. Отрёкся от престола в марте 1917 года; его правление завершило более чем трёхсотлетнюю историю Романовых у власти.',
        father: 'alexander_iii', mother: null, spouse: null, children: []
      }
    ]
  },
  rurikovichs: {
    id: 'rurikovichs',
    name: 'Рюриковичи',
    heading: 'Династия Рюриковичей',
    period: 'X–XVI века',
    country: 'Русь → Россия',
    intro: 'Одна непрерывная московская ветвь от Владимира I до Фёдора I — от Киева к Москве. Показаны не все Рюриковичи, а восемнадцать представителей этой линии; нажмите на человека, чтобы увидеть источники и тип изображения.',
    members: [
      {
        id: 'vladimir_i', name: 'Владимир I Святославич', initials: 'В. I',
        born: 'ок. 960', died: 1015, title: 'Великий князь Киевский', reign: 'Правление в Киеве: 980–1015', generation: 0,
        photo: './assets/rurik/vladimir_i.webp?v=5', photoKind: 'Изображение на серебрянике Владимира I',
        photoArtist: 'Фотография: Влад Федченко', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Coin_of_Vladimir_the_Great.JPG',
        nickname: 'Красное Солнышко', nicknameSource: 'https://www.pravenc.ru/text/2458897.html', nicknameSourceLabel: 'Православная энциклопедия',
        nicknameNote: 'Былинное именование князя, а не официальный титул.',
        bio: 'Сын Святослава Игоревича. Крещение Владимира и последовавшее принятие христианства на Руси стали поворотным событием в истории древнерусского государства.',
        father: null, mother: null, spouse: null, children: ['yaroslav_i']
      },
      {
        id: 'yaroslav_i', name: 'Ярослав I Владимирович', initials: 'Я. I',
        born: 'ок. 978', died: 1054, title: 'Великий князь Киевский', reign: 'Киевское княжение: 1016–1018, 1019–1054', generation: 1,
        photo: './assets/rurik/yaroslav_i.webp?v=5', photoKind: 'Изображение на печати Ярослава Мудрого, XI век',
        photoArtist: 'Автор печати неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:YaroslavWiseSeal.jpg',
        nickname: 'Мудрый', nicknameSource: 'https://www.pravenc.ru/text/155466.html', nicknameSourceLabel: 'Православная энциклопедия',
        nicknameNote: 'Устойчивое историческое прозвище, закрепившееся за князем.',
        bio: 'Сын Владимира I. Его правление связано со становлением «Русской правды», строительством киевской Софии и расширением династических связей Руси с Европой.',
        father: 'vladimir_i', mother: null, spouse: null, children: ['vsevolod_i']
      },
      {
        id: 'vsevolod_i', name: 'Всеволод I Ярославич', initials: 'Вс. I',
        born: 1030, died: 1093, title: 'Великий князь Киевский', reign: 'Правление в Киеве: 1078–1093', generation: 2,
        photo: './assets/rurik/vsevolod_i.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Автор миниатюры неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Vsevolod_yaroslavich.jpg',
        nickname: null,
        bio: 'Сын Ярослава Мудрого и отец Владимира Мономаха. До киевского престола княжил в Переяславле и Чернигове, а в Киеве правил с 1078 года.',
        father: 'yaroslav_i', mother: null, spouse: null, children: ['vladimir_monomakh']
      },
      {
        id: 'vladimir_monomakh', name: 'Владимир II Всеволодович', initials: 'В. II',
        born: 1053, died: 1125, title: 'Великий князь Киевский', reign: 'Правление в Киеве: 1113–1125', generation: 3,
        photo: './assets/rurik/vladimir_monomakh.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Автор миниатюры неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Vladimir_monomakh.jpg',
        nickname: 'Мономах', nicknameSource: 'https://www.pravenc.ru/vol/viii.html', nicknameSourceLabel: 'Православная энциклопедия, том VIII',
        nicknameNote: 'Устойчивое именование Владимира Всеволодовича в летописной и исторической традиции.',
        bio: 'Сын Всеволода I. Участвовал в организации Любечского съезда князей 1097 года; его «Поучение» — один из наиболее известных памятников древнерусской литературы.',
        father: 'vsevolod_i', mother: null, spouse: null, children: ['yuri_dolgorukiy']
      },
      {
        id: 'yuri_dolgorukiy', name: 'Юрий Владимирович', initials: 'Ю. В.',
        born: 'ок. 1090', died: 1157, title: 'Князь Ростово-Суздальский, великий князь Киевский', reign: 'Киевское княжение: 1149–1151, 1155–1157', generation: 4,
        photo: './assets/rurik/yuri_dolgorukiy.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Коллектив мастеров Оружейной палаты', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Dolgorukiy_titularnik.jpg',
        nickname: 'Долгорукий', nicknameSource: 'https://www.prlib.ru/item/1778704', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Прозвище, под которым Юрий Владимирович известен в исторической традиции.',
        bio: 'Сын Владимира Мономаха. Правил в Ростово-Суздальской земле и боролся за Киев; с его княжением связано первое летописное упоминание Москвы в 1147 году.',
        father: 'vladimir_monomakh', mother: null, spouse: null, children: ['vsevolod_iii']
      },
      {
        id: 'vsevolod_iii', name: 'Всеволод III Юрьевич', initials: 'Вс. III',
        born: 1154, died: 1212, title: 'Великий князь Владимирский', reign: 'Правление: 1176–1212', generation: 5,
        photo: './assets/rurik/vsevolod_iii.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1673 год',
        photoArtist: 'Автор миниатюры неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Vsevolod_III_the_Big_Nest,_titular_1673.png',
        nickname: 'Большое Гнездо', nicknameSource: 'https://www.prlib.ru/history/619274', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Прозвище связано с многочисленным потомством князя.',
        bio: 'Сын Юрия Долгорукого. Его продолжительное правление стало временем усиления Владимиро-Суздальского княжества.',
        father: 'yuri_dolgorukiy', mother: null, spouse: null, children: ['yaroslav_ii']
      },
      {
        id: 'yaroslav_ii', name: 'Ярослав II Всеволодович', initials: 'Я. II',
        born: 1191, died: 1246, title: 'Великий князь Владимирский', reign: 'Правление во Владимире: 1238–1246', generation: 6,
        photo: './assets/rurik/yaroslav_ii.webp?v=5', photoKind: 'Фреска Архангельского собора Московского Кремля, 1652–1666 годы',
        photoArtist: 'Автор фрески неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Yaroslav_II_Vsevolodovich_grand_duke_of_Vladimir.jpg',
        nickname: null,
        bio: 'Сын Всеволода III и отец Александра Невского. Получил Владимирское княжение после гибели старшего брата Юрия II в битве на реке Сити в 1238 году.',
        father: 'vsevolod_iii', mother: null, spouse: null, children: ['alexander_nevsky']
      },
      {
        id: 'alexander_nevsky', name: 'Александр Ярославич', initials: 'А. Я.',
        born: 1221, died: 1263, title: 'Великий князь Владимирский', reign: 'Правление во Владимире: 1252–1263', generation: 7,
        photo: './assets/rurik/alexander_nevsky.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Коллектив мастеров Оружейной палаты', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:AlexanderNevskyTitul.jpg',
        nickname: 'Невский', nicknameSource: 'https://www.prlib.ru/Great_Russia/military_XIII/Aleksandr_Nevskiy', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Историческая традиция связывает прозвище с победой в Невской битве 1240 года.',
        bio: 'Сын Ярослава II. Прославился победами в Невской битве и на Чудском озере, а позднее правил во Владимире и выстраивал отношения с Ордой.',
        father: 'yaroslav_ii', mother: null, spouse: null, children: ['daniil_moscow']
      },
      {
        id: 'daniil_moscow', name: 'Даниил Александрович', initials: 'Д. А.',
        born: 1261, died: 1303, title: 'Князь Московский', reign: 'Московское княжение: 1263–1303', generation: 8,
        photo: './assets/rurik/daniil_moscow.webp?v=5', photoKind: 'Фреска Архангельского собора Московского Кремля, XVII век',
        photoArtist: 'Автор фрески неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Daniil_of_Moscow_(fresco_in_Archang._cat).jpg',
        nickname: 'Московский', nicknameSource: 'https://www.pravenc.ru/text/171280.html', nicknameSourceLabel: 'Православная энциклопедия',
        nicknameNote: 'Устойчивое именование по месту княжения, а не личное прозвище современников.',
        bio: 'Младший сын Александра Невского и родоначальник московской ветви Рюриковичей. При нём Московское княжество стало самостоятельным политическим центром.',
        father: 'alexander_nevsky', mother: null, spouse: null, children: ['ivan_i']
      },
      {
        id: 'ivan_i', name: 'Иван I Данилович', initials: 'И. I',
        born: 1288, died: 1340, title: 'Князь Московский, великий князь Владимирский', reign: 'Московское княжение: 1325–1340', generation: 9,
        photo: './assets/rurik/ivan_i.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Коллектив мастеров Оружейной палаты', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Ivan_Kalita.jpg',
        nickname: 'Калита', nicknameSource: 'https://www.pravenc.ru/text/469776.html', nicknameSourceLabel: 'Православная энциклопедия',
        nicknameNote: 'Прозвище зафиксировано с конца XIV века; источник объясняет его через слово «сумка, мешок с деньгами».',
        bio: 'Сын Даниила Московского. Укреплял Московское княжество, расширял его территорию и в 1332 году получил ярлык на Владимирское великое княжение.',
        father: 'daniil_moscow', mother: null, spouse: null, children: ['ivan_ii']
      },
      {
        id: 'ivan_ii', name: 'Иван II Иванович', initials: 'И. II',
        born: 1326, died: 1359, title: 'Великий князь Московский и Владимирский', reign: 'Правление: 1353–1359', generation: 10,
        photo: './assets/rurik/ivan_ii.webp?v=5', photoKind: 'Надгробный портрет. Фреска Архангельского собора, 1652–1666 годы',
        photoArtist: 'Неизвестный русский мастер', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Frescos_in_Cathedral_of_the_Archangel_in_Moscow_-_south_wall_03_-_Ivan_II.jpg',
        nickname: 'Красный', nicknameSource: 'https://www.prlib.ru/history/619129', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Устойчивое прозвище князя; тот же источник упоминает также именования «Милостивый» и «Кроткий».',
        bio: 'Сын Ивана Калиты. Продолжил московскую линию династии; после его смерти великокняжеский престол перешёл к его сыну Дмитрию.',
        father: 'ivan_i', mother: null, spouse: null, children: ['dmitry_donskoy']
      },
      {
        id: 'dmitry_donskoy', name: 'Дмитрий Иванович', initials: 'Д. И.',
        born: 1350, died: 1389, title: 'Великий князь Московский и Владимирский', reign: 'Правление: 1359–1389', generation: 11,
        photo: './assets/rurik/dmitry_donskoy.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Автор миниатюры неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Dmitri_Donskoy.jpg',
        nickname: 'Донской', nicknameSource: 'https://www.pravenc.ru/text/178205.html', nicknameSourceLabel: 'Православная энциклопедия',
        nicknameNote: 'Почётное прозвище связано с Куликовской победой, но закрепилось позднее — в царствование Ивана Грозного.',
        bio: 'Сын Ивана II. Возглавил русские войска в Куликовской битве 1380 года; его правление укрепило значение Москвы среди русских земель.',
        father: 'ivan_ii', mother: null, spouse: null, children: ['vasily_i']
      },
      {
        id: 'vasily_i', name: 'Василий I Дмитриевич', initials: 'В. I',
        born: 1371, died: 1425, title: 'Великий князь Московский и Владимирский', reign: 'Правление: 1389–1425', generation: 12,
        photo: './assets/rurik/vasily_i.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Коллектив мастеров Оружейной палаты', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Vasily_Dmitrievich_titularnik.jpg',
        nickname: null,
        bio: 'Сын Дмитрия Донского. Продолжил политику укрепления Московского княжества; после его смерти престол перешёл к сыну Василию II.',
        father: 'dmitry_donskoy', mother: null, spouse: null, children: ['vasily_ii']
      },
      {
        id: 'vasily_ii', name: 'Василий II Васильевич', initials: 'В. II',
        born: 1415, died: 1462, title: 'Великий князь Московский и Владимирский', reign: 'Правление: 1425–1462, с перерывами', generation: 13,
        photo: './assets/rurik/vasily_ii.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Коллектив мастеров Оружейной палаты', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Titulyarnik_-_Vasily_Vasiliyevich.jpg',
        nickname: 'Тёмный', nicknameSource: 'https://www.pravenc.ru/text/150785.html', nicknameSourceLabel: 'Православная энциклопедия',
        nicknameNote: 'Прозвище связано с ослеплением князя в 1446 году.',
        bio: 'Сын Василия I. Его правление сопровождалось междоусобной войной; после восстановления на престоле он укрепил власть московских князей.',
        father: 'vasily_i', mother: null, spouse: null, children: ['ivan_iii']
      },
      {
        id: 'ivan_iii', name: 'Иван III Васильевич', initials: 'И. III',
        born: 1440, died: 1505, title: 'Великий князь Московский и Владимирский', reign: 'Правление: 1462–1505', generation: 14,
        photo: './assets/rurik/ivan_iii.webp?v=5', photoKind: 'Миниатюра из «Царского титулярника», 1672 год',
        photoArtist: 'Автор миниатюры неизвестен', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Ivan_III_of_Russia_3.jpg',
        nickname: 'Великий', nicknameSource: 'https://www.pravenc.ru/text/469780.html', nicknameSourceLabel: 'Православная энциклопедия',
        nicknameNote: 'Устойчивое почётное именование великого князя в исторической традиции.',
        bio: 'Сын Василия II. При нём к Москве были присоединены обширные русские земли, прекратилась зависимость от Орды и был принят Судебник 1497 года.',
        father: 'vasily_ii', mother: null, spouse: null, children: ['vasily_iii']
      },
      {
        id: 'vasily_iii', name: 'Василий III Иванович', initials: 'В. III',
        born: 1479, died: 1533, title: 'Великий князь Московский и Владимирский', reign: 'Правление: 1505–1533', generation: 15,
        photo: './assets/rurik/vasily_iii.webp?v=5', photoKind: 'Роспись Грановитой палаты, 1881–1882 годы',
        photoArtist: 'Братья Белоусовы (Палех)', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Vasily_III_of_Russia_(Granovitaya_palata,_1881-2).jpg',
        nickname: null,
        bio: 'Сын Ивана III. Продолжил объединение русских земель вокруг Москвы: при нём были присоединены Псков, Смоленск и Рязанское княжество.',
        father: 'ivan_iii', mother: null, spouse: null, children: ['ivan_iv']
      },
      {
        id: 'ivan_iv', name: 'Иван IV Васильевич', initials: 'И. IV',
        born: 1530, died: 1584, title: 'Царь и великий князь Всея Руси', reign: 'Великое княжение: 1533–1547; царствование: 1547–1584', generation: 16,
        photo: './assets/rurik/ivan_iv.webp?v=5', photoKind: 'Портрет неизвестного художника, середина XVIII века',
        photoArtist: 'Неизвестный русский художник', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Ivan_IV_by_anonim_(18th_c.,_Kremlin).jpg',
        nickname: 'Грозный', nicknameSource: 'https://www.prlib.ru/news/1174658', nicknameSourceLabel: 'Президентская библиотека',
        nicknameNote: 'Устойчивое историческое прозвище Ивана IV.',
        bio: 'Сын Василия III. В 1547 году венчался на царство. При нём был принят Судебник 1550 года, присоединены Казанское и Астраханское ханства; его правление также связано с опричниной и Ливонской войной.',
        father: 'vasily_iii', mother: null, spouse: null, children: ['feodor_i']
      },
      {
        id: 'feodor_i', name: 'Фёдор I Иоаннович', initials: 'Ф. I',
        born: 1557, died: 1598, title: 'Царь и великий князь Всея Руси', reign: 'Правление: 1584–1598', generation: 17,
        photo: './assets/rurik/feodor_i.webp?v=5', photoKind: 'Гравюра Доменико Кустоса по оригиналу Джакомо Франко, не ранее 1598 года',
        photoArtist: 'Доменико Кустос, по оригиналу Джакомо Франко', photoLicense: 'Общественное достояние',
        photoSource: 'https://commons.wikimedia.org/wiki/File:Feodor_I_of_Russia.jpg',
        nickname: null,
        bio: 'Сын Ивана IV и Анастасии Романовны. Последний правитель московской ветви Рюриковичей: с его смертью в 1598 году эта линия пресеклась, поскольку он не оставил наследников.',
        father: 'ivan_iv', mother: null, spouse: null, children: []
      }
    ]
  }
};
