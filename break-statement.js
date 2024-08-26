// Write a loop 1 to 200. Use break to exit the loop once you find 100.

for (let n = 0; n <= 200; n++) {
    if (n === 100) {
        break;
    }
    console.log(n);
}

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let n = 0;
let sum = 0;
while (n <= 1000) {

    if (n === 100) {
        break;
    }

    n++;
    sum = sum + n;
    console.log(n);


}
console.log(sum);



// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)


for (let n = 1; n <= 100; n++) {
    console.log(n);
    if (n ** 2 === n) {
        break;
    }

}













