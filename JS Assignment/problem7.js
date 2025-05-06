function removeDuplicates(names) {
  return [...new Set(names)];
}

console.log(removeDuplicates(["zara", "sara", "zara", "rafi"]));
