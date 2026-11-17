// Юстинианова династия: византийские императоры 518–602 годов.
(() => {
  'use strict';
  function member(data) {
    const image = window.DYNASTY_IMAGE_SOURCES?.[data.id] || {};
    return { ...data, initials: `${data.name.split(' ').map((part) => part[0]).join('.')}.`,
      photo: `./assets/justinians/${data.id}.webp?v=1`, photoKind: image.kind || 'Историческое изображение',
      photoArtist: image.artist || 'См. источник изображения', photoLicense: image.license || 'См. источник', photoSource: image.source,
      nickname: data.nickname || null, father: null, mother: null, spouse: null, children: [] };
  }
  Object.assign(window.DYNASTIES, {
    justinians: {
      id: 'justinians', name: 'Юстинианова', heading: 'Юстинианова династия', period: '518–602', country: 'Византия',
      intro: 'Пять императоров — от Юстина I до Маврикия. Наследование шло через племянников, усыновление и брак, поэтому древо не показывает прямой отцовской линии.',
      members: [
        { id: 'just_justin_i', name: 'Юстин I', born: 'ок. 450', died: 527, title: 'Византийский император', reign: 'Правление: 518–527', generation: 0,
          bio: 'Бывший командир дворцовой гвардии. Заложил основы власти своего племянника Юстиниана.' },
        { id: 'just_justinian_i', name: 'Юстиниан I', born: 'ок. 482', died: 565, title: 'Византийский император', reign: 'Правление: 527–565', generation: 1, nickname: 'Великий',
          bio: 'Племянник Юстина I. Издал свод римского права, строил Святую Софию и возвращал западные территории.' },
        { id: 'just_justin_ii', name: 'Юстин II', born: 'ок. 520', died: 578, title: 'Византийский император', reign: 'Правление: 565–578', generation: 2,
          bio: 'Племянник Юстиниана I. Его правление отмечено войной с Персией и потерей части Италии.' },
        { id: 'just_tiberius_ii', name: 'Тиберий II', born: 'ок. 520', died: 582, title: 'Византийский император', reign: 'Цезарь с 574 · император: 578–582', generation: 3,
          bio: 'Усыновлённый наследник Юстина II. Продолжал войну с Персией.' },
        { id: 'just_maurice', name: 'Маврикий', born: 'ок. 539', died: 602, title: 'Византийский император', reign: 'Правление: 582–602', generation: 4,
          bio: 'Зять Тиберия II. Добился успехов на востоке, но был свергнут и убит в результате военного мятежа.' }
      ].map(member)
    }
  });
})();
