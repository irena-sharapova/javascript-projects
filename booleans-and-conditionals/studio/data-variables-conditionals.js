// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Austronaut count complited");
} else {
    console.log ("Error Austronaut count");
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Austronaut status ready");
} else {
    console.log ("Error Austronaut status not ready");
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total mass is OK");
} else {
    console.log ("Error Total mass is not OK");
    preparedForLiftOff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= -300 || fuelTempCelsius <= -150) {
    console.log("Fuel temperature is OK");
} else {
    console.log ("Error Fuel temperature not OK");
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === 100) {
    console.log("Fuel level is good");
} else {
    console.log ("Error Fuel level is not good");
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Wether status is good");
} else {
    console.log ("Wether is not good");
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff = false){
    console.log ("All systems not working all together STOP LAUNCH SHATTLE");
} else {
    console.log ("All SYSTEMS GO");
    console.log ("Date:", date);
    console.log ("Time:", time);
    console.log ("Austronaut count:", astronautCount);
    console.log ("Crew mass:", crewMassKg, "kg");
    console.log ("Fuel mass:", fuelMassKg, "kg");
    console.log ("Shuttle mass:", shuttleMassKg, "kg");
    console.log ("Total mass", totalMassKg, "kg");
    console.log ("Fuel Temperature", fuelTempCelsius, "C");
    console.log ("Wether Status:", weatherStatus);
    console.log ("Wish you a safe flight Austronautus");
}
