let shoutIt = word => console.log(word.toUpperCase());
let sayIt = word => console.log(word);

// This function takes in a function as a parameter and calls it.
let sayTheWord = function (word, speaker) {
  speaker(word);
};

// Here, we call the "sayTheWord" function with different functions as params so that we can dictate behavior to "sayTheWord" without the function itself really knowing what's going on
sayTheWord('Hello', sayIt);
sayTheWord('Hello', shoutIt);


// In this example, we've setup another function (sayHi) as function to be used by the forEach() method as a callback. It will call the sayTheWord function once invoked by forEach();
let people = ['Jim','Jen','Joan','John'];
let sayHi = (item,idx) => sayTheWord(item, sayIt);
people.forEach(sayHi);
