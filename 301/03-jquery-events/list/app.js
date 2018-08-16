$(document).ready(function() {

  // First attempt, put a listener on every 'li'.
  // this isn't scalable (if there's a billion li's then we have a billion separate listeners)

  // $('li').on('click', function(event) {
  //   $(this).find('div').show();
  // });

  // Next ... put the lisenter on the UL and figure out which li got clicked.
  // better, but not all that clean or obvious

  // $('ul').on('click', function(event) {
  //   $(event.target).find('div').show();
  // });

  // Next ... use jQuery Delegation to clean that up.
  // $('ul').on('click', 'li', function(event) {
  //   $(this).find('div').show();
  // });

  // Next ... make it more accordion-like and hide all the others
  // $('ul').on('click', 'li', function(event) {
  //   $(this).siblings().find('div').hide();
  //   $(this).find('div').show();
  // });

  // But instead of using jQuery to manage visibility (even though its great at it)
  // Lets give that responsibility to the CSS and just toggle a class and let
  // the stylesheet determine what "active" means...
  $('ul').on('click', 'li', function(event) {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });

  // This listener, on the divs, just appends a new child div.
  // If you don't have the stopPropagation() call in there, Both of the event
  // listeners will fire and even though it adds the div, the accordion will close
  // By preventing propagation of the event up the chain, you can keep it open while doing stuff...
  $('ul').on('click','div', function(event) {
    event.stopPropagation();
    $(this).append('<div>Hey, this is cool</div>');
  });

});