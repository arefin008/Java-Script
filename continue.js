/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let n = 1; n <= 40; n++) {
    if (n % 2 === 1) {
        continue;
    }
    console.log(n);
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for (let n = 55; n <= 85; n++) {
    if (n % 2 === 1 || n % 5 === 0) {
        continue;
    }
    console.log(n);
}