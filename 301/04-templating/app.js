$(document).ready(function(){

  let family = [
    {
      name: 'John',
      about: 'John is a cool bald dude',
      attributes: ['Old','Bald','Instructor','Baseball Coach'],
    },
    {
      name: 'Cathy',
      about: 'Cat is a microbiologist turned IT professional',
      attributes: ['Stone Cold Shooter', 'Birthday Savant', 'Intense', 'Hungry for Knowledge'],
    },
    {
      name: 'Zach',
      about: 'Zach is a sophomore at Linfield College',
      attributes: ['Baseball Player', 'Catching Coach', 'Law Major', 'Future Congressman'],
    },
    {
      name: 'Allie',
      about: 'Allie is going to be a freshman in High School!',
      attributes: ['Libero', 'Animal Lover', 'Instagrammer', 'Pilot'],
    },
  ];

  function renderJQ(data,template) {
    data.forEach( (element) => {
      let $card = $(template).clone().removeClass('template').appendTo('body');
      $card.find('h3').text(element.name);
      $card.find('div').prepend(`<p>${element.about}</p>`);
      element.attributes.forEach( attribute => {
        $card.find('ul').append(`<li>${attribute}</li>`);
      });
    });
  }

  function renderHandlebars(data, template, parent) {
    let compiledTemplate = Handlebars.compile($(template).html());
    console.log(compiledTemplate);
    data.forEach( element=>{
      $(parent).append( compiledTemplate(element) );
    });
  }

  renderHandlebars(family, '#family-template', 'body');
  // renderJQ(family, '.template');

});