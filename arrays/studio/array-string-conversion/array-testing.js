let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

function checkSpecialCharacters(strings) {
	// Check for each special character using includes method
	const hasComma =  strings.includes(",");
	const hasSemicolon = strings.includes(";");
	const hasSpace = strings.includes(" ");
	// Return true if any of the characters are found
	return hasComma || hasSemicolon || hasSpace;

  }

console.log(checkSpecialCharacters(protoArray1)); 
console.log(checkSpecialCharacters(protoArray2)); 
console.log(checkSpecialCharacters(protoArray3)); 
console.log(checkSpecialCharacters(protoArray4)); 


//2) 
function reverseCommas(strings) { 
	if (strings.includes(',')) {
	//TODO: 1. create and instantiate your variables.
	let check = strings.split(',');
	let reversedArray = check.reverse();
	let output = reversedArray.join(',');
	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
} 	
}

//3)
function semiDash(strings) {
	if (strings.includes(';')) {
	let check = strings.split(';');
	check.sort();
//TODO: write the code required for this step
    let output = check.join('-');
  
	return output;
} else {
	return strings;
}
}

strings.forEach(function(strings) {
	let result = semiDash(strings);
	console.log(result);
  });

//4)
function reverseSpaces(strings) {
	if (strings.includes(' ')) {
	  let check = strings.split(' ');
	  check.sort().reverse();
	  let output = check.join(' ');
  //TODO: write the code required for this step

	return output;
} else {
	// If the string does not contain spaces, return it unchanged
	return strings;
  }
}

let results = strings.map(reverseSpaces);
console.log(results); 

//5)
function commaSpace(strings) {
	if (strings.includes(', ')) {
	let check = strings.split(', ');
	check.reverse();
	let output = check.join(',');
	//TODO: write the code required for this step
  
	return output;
} else {
	return strings;
}
}

let results1 = strings.map(commaSpace);
console.log(results1); 

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
