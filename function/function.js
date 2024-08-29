/*
Task-1
Take four parameters. Multiply the four numbers and then return the result
*/

function multiplication(a, b, c, d) {
  const result = a * b * c * d;
  return result;
}
console.log(multiplication(2, 3, 2, 3));

/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. 
If the number is even divide it by two and return the result.
*/

function oddEvenNumbers(numbers) {
  if (numbers % 2 === 1) {
    const result = numbers * 2;
    return result;
  }
  else {
    const result = numbers / 2;
    return result;
  }
}

console.log(oddEvenNumbers(60));
console.log(oddEvenNumbers(3));














