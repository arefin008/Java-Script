// Count how many times a string has the letter a

const student = 'He is  a good at english';
const count = student.split('a').length - 1;
console.log(count);


// Count how many times a string has the letter a or A

const studentt = 'A ball is rounding';
const countt = studentt.split(/A|a/).length - 1;
console.log(countt);

// Check whether a string contains all the vowels a, e, i, o, u

// const sentence = 'this an example sentence ';
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const containingVowel = sentence.toLowerCase().includes(vowels);
// console.log(containingVowel);

const sentence = 'this an example sentence eulogia';
const vowels = ['a', 'e', 'i', 'o', 'u'];

const containsAllVowels = vowels.every(vowel => sentence.toLowerCase().includes(vowel));

console.log(containsAllVowels);


// *****************************************************

// Capitalize Every first Letter of each word in a String


const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

console.log(words.join(" "));




