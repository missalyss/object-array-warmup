/*
  Write a function that takes an array of strings. Create an object that
  keeps track of how many times a character is used across all indexes of the array.
  Console log the object and run this file with node in your command line by running 'node main.js'.
*/

//Use this array as your input. 🐢
let stringArr = ['this','is', 'my favorite', 'way', 'to start', 'my day at', 'galvanize'];

function characterSearch() {
  var characters = {}
  for (var i = 0; i < stringArr.length; i++) {
    for (var j = 0; j < stringArr[i].length; j++) {
      if (characters[stringArr[i][j]]) {
        ++characters[stringArr[i][j]]
      } else {
        characters[stringArr[i][j]] = 1
      }
      }
    }

  return characters
}






/*
  Write a function that takes a object and flips the key value pairs. Log out the object once you are done. Use the
  object below and run the file with 'node main.js'
*/
let funObj = {
  name: 'Donald',
  species: 'Duck',
  age: 51,
  cartoon: true,
  employer: 'Disney',
  occupation: 'Sailor'
};
// console.log(funObj);

function keySwitch() {
  var objArr = Object.keys(funObj)
  var key;
  var value;
  for (var i = 0; i < objArr.length; i++) {
    key = objArr[i]
    value = funObj[objArr[i]]
    // objArr = funObj[value] = key;
    console.log(objArr);
    console.log(value);
  }

  // console.log(object[value] = key);
  // return object
}

console.log(keySwitch());
