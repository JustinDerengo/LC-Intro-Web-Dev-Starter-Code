//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let scoreSum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            scoreSum += this.scores[i];
        }
        // let average = Math.round(scoreSum / this.scores.length) / 10
        return Math.round(scoreSum / this.scores.length * 10) / 10
    }
    status(score) {
        let acceptance = '';
        if (score >= 90) {
            acceptance = 'Accepted';
        } else if (score >= 80) {
            acceptance = 'Reserve';
        } else if (score >= 70) {
            acceptance = 'Probationary';
        } else {
            acceptance = 'Rejected';
        }
        
        return `${this.name} has earned an average test score of ${score} and has a status of ${acceptance}`;
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let dog = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let alligator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bear);
console.log(dog);
console.log(alligator);

bear.addScore(99);
console.log(bear.scores);
console.log(dog.average());
alligator.addScore(100);


console.log(alligator.status(alligator.average()));
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.