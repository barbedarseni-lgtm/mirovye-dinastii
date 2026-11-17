// Македонская династия: византийские императоры 867–1056 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/macedonians/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: data.father || null, mother: null, spouse: null, children: data.children || [] };
  }
  Object.assign(window.DYNASTIES, {
    macedonians: {
      id: 'macedonians', name: 'Македонская', heading: 'Македонская династия', period: '867–1056', country: 'Византия',
      intro: 'Девять императоров династии — от Василия I до Феодоры. Императоры из других родов, правившие между ними, не включены.',
      members: [
        { id: 'mac_basil_i', name: 'Василий I', born: 'ок. 811', died: 886, title: 'Византийский император', reign: 'Правление: 867–886', generation: 0, nickname: 'Македонянин',
          bio: 'Основатель династии. Пришёл к власти после убийства Михаила III и укрепил империю.', children: ['mac_leo_vi', 'mac_alexander'] },
        { id: 'mac_leo_vi', name: 'Лев VI', born: 866, died: 912, title: 'Византийский император', reign: 'Правление: 886–912', generation: 1, nickname: 'Мудрый',
          bio: 'Сын Василия I. Известен законодательными работами и литературными интересами.', father: 'mac_basil_i', children: ['mac_constantine_vii'] },
        { id: 'mac_alexander', name: 'Александр', born: 870, died: 913, title: 'Византийский император', reign: 'Правление: 912–913', generation: 1,
          bio: 'Сын Василия I и брат Льва VI. Недолго правил после смерти брата.', father: 'mac_basil_i' },
        { id: 'mac_constantine_vii', name: 'Константин VII', born: 905, died: 959, title: 'Византийский император', reign: 'Правление: 913–959 · самостоятельно с 945', generation: 2, nickname: 'Багрянородный',
          bio: 'Сын Льва VI. Автор и заказчик важных сочинений об управлении и церемониалах.', father: 'mac_leo_vi', children: ['mac_romanos_ii'] },
        { id: 'mac_romanos_ii', name: 'Роман II', born: 938, died: 963, title: 'Византийский император', reign: 'Правление: 959–963', generation: 3,
          bio: 'Сын Константина VII. При нём империя одержала победы на востоке.', father: 'mac_constantine_vii', children: ['mac_basil_ii', 'mac_constantine_viii'] },
        { id: 'mac_basil_ii', name: 'Василий II', born: 958, died: 1025, title: 'Византийский император', reign: 'Соправитель с 960 · самостоятельно: 976–1025', generation: 4, nickname: 'Болгаробойца',
          bio: 'Сын Романа II. Завершил завоевание Болгарии и оставил империю на вершине могущества.', father: 'mac_romanos_ii' },
        { id: 'mac_constantine_viii', name: 'Константин VIII', born: 960, died: 1028, title: 'Византийский император', reign: 'Соправитель с 962 · самостоятельно: 1025–1028', generation: 4,
          bio: 'Сын Романа II и брат Василия II. Его дочери продолжили династию.', father: 'mac_romanos_ii', children: ['mac_zoe', 'mac_theodora'] },
        { id: 'mac_zoe', name: 'Зоя', born: 'ок. 978', died: 1050, title: 'Византийская императрица', reign: 'Правление: 1028–1050 · с мужьями и сестрой', generation: 5,
          bio: 'Дочь Константина VIII. Её браки определяли престолонаследие после Василия II.', father: 'mac_constantine_viii' },
        { id: 'mac_theodora', name: 'Феодора', born: 'ок. 984', died: 1056, title: 'Последняя императрица Македонской династии', reign: 'Соправительница в 1042 · самостоятельно: 1055–1056', generation: 5,
          bio: 'Дочь Константина VIII. Последняя представительница династии на престоле.', father: 'mac_constantine_viii' }
      ].map(member)
    }
  });
})();
