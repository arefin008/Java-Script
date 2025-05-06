function mergeArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  return mergedArray.sort((a, b) => a - b);
}

console.log(mergeArrays([2, 1, 3, 4, 6], [5, 7, 9, 8, 10]));
/*
  output:
 [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ] 
*/
