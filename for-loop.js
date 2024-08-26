/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */
for (let n = 0; n < 60; n++) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
}


/**

Find all the odd numbers from 61 to 100.

*/

for (let n = 61; n <= 100; n = n + 2) {
    console.log(n);
}
/***

Find all the even numbers from 78 to 98.

 */
for (let n = 78; n <= 98; n = n + 2) {
    console.log(n)
}


// sum of numbers

// Display sum of all the odd numbers from 91 to 129.

let sum = 0;
for (let n = 91; n <= 129; n = n + 2) {
    sum = sum + n;
    console.log(n);
}
console.log("Sum of all add numbers: ", sum);
/***

Display sum of all the even numbers from 51 to 85.

 */

let sumEven = 0;
for (let n = 51; n <= 85; n++) {
    if (n % 2 === 0) {
        sumEven = sumEven + n;
        console.log(n);
    }

}
console.log("sum of all even numbers are:", sumEven);



/***

Generate a multiplication table for number 9

 */
let number = 9;
for (let i = 1; i <= 10; i++) {
    let multiplication = number * i;
    console.log(`${number} * ${i} = ${multiplication}`);
}


/***

Implement a countdown timer that counts down from 81 to 65.

 */

for (let n = 81; n >= 65; n--) {
    console.log(n);
}


