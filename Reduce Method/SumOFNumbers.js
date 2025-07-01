const numbers = [1, 2, 3, 4];
//accumulator = PreviousValue
const sum = numbers.reduce((acc, currValue) => {
  return acc + currValue;
}, 0);

console.log(sum);
