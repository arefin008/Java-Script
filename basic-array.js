// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array


let fruits = ['banana', 'apple', 'jackfruit', 'orange', 'guava'];
console.log(fruits[2]);
fruits[1] = 'jambura';
console.log(fruits);

// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let destination = ['Bangladesh', 'Pakisthan', 'Australia'];
destination.push('Sri lanka');
destination.push('Chaina', 'Turkey');
destination.pop();
console.log(destination);

// 3. Checking Array Membership with ‘includes’

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const books = ['Macbeth', 'The Merchant of Venice', 'Mein Kamph', 'The Great Gatsby', 'Beloved'];

const containsJsbook = books.includes('javascript');

if (containsJsbook) {
    console.log('The array contains a javascript book.');
}
else {
    console.log('The array does not contains a javascript book.');
}

// 4. Checking if it's an Array

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.


const num = [1, 2, 3, 4, 5];
const string = 'Apple';
const empty = [];

console.log("Num Array is an array:", Array.isArray(num));
console.log("Sring Array is an array:", Array.isArray(string));
console.log("Empty Array is an array:", Array.isArray(empty));

// 5.Combining Arrays

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = num1.concat(num2);
console.log(num1);
console.log(num2);
console.log(num3);















