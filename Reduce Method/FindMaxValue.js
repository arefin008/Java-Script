const numbers = [5, 12, 4, 6, 30, 2];

const max = numbers.reduce((maxval, current) => {
  return current > maxval ? current : maxval;
}, numbers[0]);

console.log(max);
