//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.age = mass;
        this.scores = scores;
    }


    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        let average = sum / this.scores.length;
        return Math.round(10 * average) / 10;
    }

    status() {
        let avg = this.average();
        if (avg >= 90) {
            return 'Accepted';
        } else if (avg >= 80 && avg <= 89) {
            return 'Reserve';
        } else if (avg >= 70 && avg <= 79) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }


}

const bearBubba = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);
const dogMaltese = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);
const alliGator = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62])

console.log(bearBubba);
console.log(dogMaltese);
console.log(alliGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bearBubba.addScore(83);
console.log(bearBubba.scores);

console.log(dogMaltese.average());

console.log(`${bearBubba.name} earned an average test score of ${bearBubba.average()}% and has a status of ${bearBubba.status()}.`)
console.log(`${dogMaltese.name} earned an average test score of ${dogMaltese.average()}% and has a status of ${dogMaltese.status()}.`)
console.log(`${alliGator.name} earned an average test score of ${alliGator.average()}% and has a status of ${alliGator.status()}.`)

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let testCount = 0;

while (alliGator.status() === 'Probationary') {
    alliGator.addScore(100);
    testCount++;
}

console.log(`it will take ${testCount} to reach Glad Gator "Reserve" status`);

while (alliGator.status() === 'Reserve') {
    alliGator.addScore(100);
    testCount++;
}

console.log(`it will take ${testCount} to reach Glad Gator "Accepted" status`);
