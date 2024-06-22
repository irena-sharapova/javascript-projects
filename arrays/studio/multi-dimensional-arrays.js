const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinetArray = food.split(",").sort();
let equipmentCabinetArray = equipment.split(",").sort();
let petsCabinetArray = pets.split(",").sort();
let sleepAidsCabinetArray = sleepAids.split(",").sort();

console.log("Food Cabinet:", foodCabinetArray);
console.log("Equipment Cabinet:", equipmentCabinetArray);
console.log("Pets Cabinet:", petsCabinetArray);
console.log("Sleep Aids Cabinet:", sleepAidsCabinetArray);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [
    foodCabinetArray,
    equipmentCabinetArray,
    petsCabinetArray,
    sleepAidsCabinetArray
]

console.log(foodCabinetArray);
console.log(equipmentCabinetArray);
console.log(petsCabinetArray);
console.log(sleepAidsCabinetArray);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let question = "Select number Cabinet Array in the cargoHold: "
let userUnswer = "";

function askForNumber () {
    userUnsver = input.question (question);
}
askForNumber ()

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userUnsver < 0 || userUnsver > 3) {
    console.log(`ERROR Invalid input for number.Must be 0-3`);
} else {
    console.log (cargoHold[userUnsver]);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let item = input.question("Enter an item to check: ");

// 6) Use the 'includes' method to check if the cabinet contains the selected item.
if (cargoHold[userUnsver].includes(item)) {
    console.log(`Cabinet ${userUnsver} DOES contain ${item}.`);
} else {
    console.log(`Cabinet ${userUnsver} DOES NOT contain ${item}.`);
}