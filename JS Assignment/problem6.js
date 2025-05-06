function findShortestWord(str) {
  const words = str.split(" ");
  let shortestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
  //   console.log(words);
}

console.log(findShortestWord("The quick brown fox jumps over the lazy dog"));
