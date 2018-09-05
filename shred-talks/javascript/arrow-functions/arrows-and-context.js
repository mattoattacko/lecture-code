'use strict';

let obj = {

  myVar: 'foo',

  myFunc: function() {

    console.log(this.myVar);

    setTimeout(function() {
      console.log(this.myVar);
    }, 1000);

    setTimeout( () => {
      console.log(this.myVar);
    }, 1000);

  },

  myArrowFunc: () => {
    console.log(this.myVar);
  },

};

obj.myFunc();
obj.myArrowFunc();

// In situations where you DEPEND on context, arrow functions are a non-starter
$('p').on('click', function() {
  $(this).explode();
});

// Here, 'this' isn't what you think it is...
$('p').on('click', () => {
  $(this).explode();
});
