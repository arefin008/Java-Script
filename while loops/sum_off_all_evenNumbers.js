// Display sum of all the even numbers from 206 to 311.

let n = 206;
let sum = 0;
while (n <= 331) {

    if (n % 2 === 0) {
        sum = sum + n;
        console.log(n);
    }
    n++;
}
console.log("sum of all even numbers are:", sum);