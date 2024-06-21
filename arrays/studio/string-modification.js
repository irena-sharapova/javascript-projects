const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let treeLetter = str.slice (0,3);
console.log (treeLetter);

let theRestLetters = str.slice (3);
console.log(theRestLetters);

let newAnswer = (theRestLetters + treeLetter);
console.log (theRestLetters + treeLetter);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is: "${str}"`);
console.log(`The modified string is: "${newAnswer}"`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let question = "Enter namber of letters that will be relocated: "
let userUnswer = "";

function askForLetters () {
    userUnsver = input.question (question);
}
askForLetters ()

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userUnsver <= 0 || userUnsver > str.length) {
    console.log(`Invalid input for number. Defaulting to relocating 3 characters.`);
    userUnsver = 3;
    console.log(`The modified string is: "${newAnswer}"`);
    
}  else {
    let userNumberOfLetter = str.slice (0,userUnsver);
console.log (userNumberOfLetter);

let theRestUserLetters = str.slice (userUnsver);
console.log(theRestUserLetters);

let newAnswer = (theRestUserLetters + userNumberOfLetter);
console.log (`The modified string is:  ${theRestUserLetters}${userNumberOfLetter}`);
}
