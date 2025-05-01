const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//*********************** */ MAP Method*************************************
// 1)Get an array of all names

let namesArr = characters.map((el) => el.name);
console.log(namesArr);

// 2)Get an array of all heights

let allHeights = characters.map((el) => el.height);
console.log(allHeights);

// 3)Get an array of objects with just name and height properties

let nameAndHeight = characters.map((el) => {
  return {
    name: el.name,
    height: el.height,
  };
});
console.log(nameAndHeight);

// 4)Get an array of all first names

let firstName = characters.map((el) => {
  return el.name.split(" ")[0];
});
console.log(firstName);

//************************** FILTER Method*************************************

// 1)Get characters with mass greater than 100

let massArr = characters.filter((el) => {
  return el.mass > 100;
});
console.log(massArr);

// 2)Get characters with height less than 200

let heightArr = characters.filter((el) => el.height < 200);
console.log(heightArr);

// 3)Get all male characters

let maleCharacters = characters.filter((el) => el.gender == "male");
console.log(maleCharacters);

// 4)Get all female characters

let femaleCharacters = characters.filter((el) => el.gender == "female");
console.log(femaleCharacters);

//************************** EVERY Method*************************************

// 1)Does every character have blue eyes?

let checkEyes = characters.every((el) => el.eye_color == "blue");
console.log(checkEyes);

// 2)Does every character have mass more than 40?

let checkMass = characters.every((el) => el.mass > 40);
console.log(checkMass);

// 3)Is every character shorter than 200?

let checHeight = characters.every((el) => el.height < 200);
console.log(checHeight);

// 4)Is every character male?

let checkMale = characters.every((el) => el.gender == "male");
console.log(checkMale);

//************************** SOME Method*************************************

// 1)Is there at least one male character?
/* 
let checkMale = characters.some((el) => el.gender == "male");
console.log(checkMale);
 */
// 2)Is there at least one character with blue eyes?
/* 
let checkEyes = characters.some((el) => el.eye_color == "blue");
console.log(checkEyes); 
*/
// 3)Is there at least one character taller than 200?
/* 
let checkHeight = characters.some((el) => el.height > 200);
console.log(checkHeight); 
*/
// 4)Is there at least one character that has mass less than 50?
/* 
let checkMass = characters.some((el) => el.mass < 50);
console.log(checkMass); 
*/
