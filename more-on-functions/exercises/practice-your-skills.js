//Create an anonymous function and set it equal to a variable.
let input = function(n) {
    if (typeof n === 'number') {
    return n*3; 
       }   else if (typeof n === 'string') {
            return 'ARRR!';
        } else {
            return n;
        }
    }
  console.log (input('yu'));

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let tripleArr = function (n) {
    if (typeof n === 'number') {
    return n*3; 
       }   else if (typeof n === 'string') {
            return 'ARRR!';
        } else {
            return n;
        }
}
let replaseArr = arr.map(tripleArr);
console.log (replaseArr);



// PART Raid a shuttle
function checkFuel(level) {
    if (level > 100000){
       return 'green';
    } else if (level > 50000){
       return 'yellow';
    } else {
       return 'red';
    }
 }
  
  let nonSuspiciousFunction = function(a) {
    if (checkFuel(a) === 'green') {
        return a - 100001;
     }
     else if (checkFuel(a) === 'yellow') {
        return a - 50001;
     }
     else {
        return a;
     }
     
 } 
 
 function holdStatus(arr){
    if (arr.length < 7) {
       return `Spaces available: ${7 - arr.length}`;
    } else if (arr.length > 7){
       return `Over capacity by ${arr.length - 7} items.`
    } else {
       return "Full";
    }
 }


 let fuelLevel = 200000;
 let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
 
 let swipeCargo = function(arr) {
    let stolenItems = [];
    let valuableItems = ['satellite', 'gold'];
    for (let item of valuableItems) {
        let index = arr.indexOf(item);
        if (index !== -1) {
            // Add the valuable item to stolenItems
            stolenItems.push(arr[index]);
            // Replace the stolen item with something worthless, e.g., 'rocks'
            arr[index] = 'box';
        }
    }
    return stolenItems;
};

let stolen = swipeCargo(cargoHold);
console.log("Stolen items: " + stolen);
console.log("Updated cargo hold: " + cargoHold);

 let irs = function(fuelLevel, cargoHold) {
    let raidedFuel = nonSuspiciousFunction(fuelLevel);
    let stolenItems = swipeCargo(cargoHold);
    return `Raided ${raidedFuel} kg of fuel from the tanks, and stole ${stolen[0]} and ${stolen[1]} from the cargo hold.`
 } 
 
 console.log("Fuel level: "+ checkFuel(fuelLevel));
 console.log("Reduced fuel level " + nonSuspiciousFunction(fuelLevel));
 console.log("Hold status: "+ holdStatus(cargoHold));
 let result = irs(fuelLevel, cargoHold);
 console.log(result);

 //console.log(`Raided ${nonSuspiciousFunction(fuelLevel)} kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`;)
 

 