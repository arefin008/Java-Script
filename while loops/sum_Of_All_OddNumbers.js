// Display sum of all the odd numbers from 81 to 131.

let n = 81;
let sum = 0;
while (n <= 131) {

    if (n % 2 === 1) {
        sum = sum + n;
        console.log(n);
    }
    n++;
}
console.log("sum of all the odd numbers are:", sum);