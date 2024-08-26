// Access the golden rod color value in output.

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": '#daa520'
}

console.log(colors['golden rod']);

// *******************************************

// For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
}
car.passengerCapacity = 5;
console.log(car);

// *******************************************

// Display the physics marks as output.

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30
  }
}

console.log(student.physics.marks);

// *******************************************


// Count the number of properties.

let studentt = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true
}

const keys = Object.keys(studentt)
const count = keys.length;
console.log(count);

// Loop through an object and print the key-value pairs with their types

let myObject = {
  name: 'John Doe',
  age: 25,
  city: 'example city',
  isstudent: true
}

for (const key in myObject) {
  let value = myObject[key];
  console.log('key:', key, '|', 'type:', typeof value)
}