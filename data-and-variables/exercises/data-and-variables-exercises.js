// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let distanceToMarsMi = distanceToMarsKm * milesPerKm;
let hoursToMars = distanceToMarsMi / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
let willTTake = "will take";
let daysToReach = "days to reach Mars.";
// Print the results of the space mission calculations below
//"_____ will take ___ days to reach Mars."
//console.log(shuttleName, willTTake, daysToMars, daysToReach);  
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let distanceToMoonMi = distanceToMoonKm * milesPerKm;
let hoursToMoon = distanceToMoonMi / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
//"_____ will take ___ days to reach the Moon."
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");