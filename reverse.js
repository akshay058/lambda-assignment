// Question : Write a function that will take a given string and reverse the order of the words.
// “Hello world” becomes “world Hello” and “May the world be with you” becomes “you with be world the May”

function reverseWord(input) {
  let word = input.split(" ").reverse().join(" ");
  return word;
}

const string1 = "Hello world";
const string2 = "May the world be with you";
const answer1 = reverseWord(string1);
const answer2 = reverseWord(string2);

console.log(`The reversed string is: ${answer1}`);
console.log(`The reversed string is: ${answer2}`);
