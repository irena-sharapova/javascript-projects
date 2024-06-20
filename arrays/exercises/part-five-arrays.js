let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joinedDefault = arr.join();
console.log(joinedDefault); 

let joinedWithA = arr.join('a');
console.log(joinedWithA); 

let joinedWithSpace = arr.join(' ');
console.log(joinedWithSpace); 

let joinedWithoutSeparator = arr.join('');
console.log(joinedWithoutSeparator); 
//3) Do split or join change the original string/array?
console.log (str.split());
// The split method is used to split a string into an array of substrings based on a specified separator and returns a new array. It does not modify the original string.
// The join method is used to join all elements of an array into a string. It does not modify the original array but returns a new string.
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHold = "water,space suits,food,plasma sword,batteries";
// Step 1: Split the string into an array based on commas
let cargoArray = cargoHold.split(',');

// Step 2: Sort the array alphabetically
cargoArray.sort();

// Step 3: Join the sorted array back into a single string with commas
let sortedCargoHold = cargoArray.join(',');

console.log(sortedCargoHold); 

