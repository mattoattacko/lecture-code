const List = require('../../lib/list.js');

let myList = new List();

describe("List", () => {

  let loadList = () => {
    let array_of_people = ["John", "Cathy", "Zach"];
    let thisList = new List();
    for( let i = 0; i<=array_of_people.length-1; i++ ) {
      thisList.push(array_of_people[i]);
    }
    return thisList;
  };

  it("push() increments the .length property", () => {
    let myList = loadList();
    expect( myList.length ).toEqual(3);
  });

  it("pop() returns the last item", () => {
    let myList = loadList();
    expect( myList.pop() ).toEqual("Zach");
  });

  it("pop() decrements .length property by 1", () => {
    let myList = loadList();
    myList.pop();
    expect( myList.length ).toEqual(2);
  });

  it("map() returns a new list", () => {

    let myList = loadList();
    let newList = myList.map( (val,i) => {
      return `${i} -- ${val}`;
    });

    expect( newList.length ).toEqual(myList.length);
    expect( newList[0] ).toEqual( '0 -- John' );

  });

});