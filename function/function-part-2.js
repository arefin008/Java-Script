/*task-3
Write a function called make_avg() which will take an array of integers and 
the size of that array and return the average of those values.
*/

function make_avg(numbers) {
    let sum = 0;
    for (const number of numbers) {

        sum = sum + number;
        // console.log(len);

    }
    const len = numbers.length;
    const avg = sum / len;
    return avg;
}
const arr = [2, 3, 4, 3, 3, 9];
const numbers = make_avg(arr);
console.log(numbers);


/*Task-4
Write a function called count_zero() 
which will take a binary string (Binary string is a string which is consist of only 0 and 1) 
as parameter and count how many 0’s are there in that string.*/

function count_zero(str) {
    console.log(str.split('0').length - 1);
}

const string = '1001100100000011';
count_zero(string);

/*
Task-5
Write a function called odd_even() 
which takes an integer value and tells whether this value is even or odd. 
If even return Even. If odd return Odd
*/


function odd_even(number) {
    if (number % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
console.log(odd_even(1234569));
console.log(odd_even(1277654));


















