let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      let steps = Math.floor(Math.random() * 11); 
      console.log(`${this.species} ${this.name} took ${steps} steps.`);
      return steps;
    }
};
superChimpOne.move();

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      let steps = Math.floor(Math.random() * 11); 
      console.log(`${this.species} ${this.name} took ${steps} steps.`);
      return steps;
    }
};
salamander.move();

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3, 
   move: function() {
      let steps = Math.floor(Math.random() * 11); 
      console.log(`${this.species} ${this.name} took ${steps} steps.`);
      return steps;
    }
};
superChimpTwo.move();

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      let steps = Math.floor(Math.random() * 11); 
      console.log(`${this.species} ${this.name} took ${steps} steps.`);
      return steps;
    }
};
dog.move();

let microAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      let steps = Math.floor(Math.random() * 11); 
      console.log(`${this.species} ${this.name} took ${steps} steps.`);
      return steps;
    }
};
microAnimal.move();


// After you have created the other object literals, add the astronautID property to each one.
// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, microAnimal];
console.log(crew);
// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
 }
 console.log(crewReports(superChimpOne));
 console.log(crewReports(salamander));
 console.log(crewReports(superChimpTwo));
 console.log(crewReports(dog));
 console.log(crewReports(microAnimal));

// Start an animal race!
function fitnessTest(candidates){
   let results = [];
 
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
    }
    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
}
return results;
}

let resultsAll = fitnessTest(crew);
console.log(resultsAll);
