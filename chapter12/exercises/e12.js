let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

superChimpOne["astronautID"] = 1;
superChimpOne["move"] = function () {return Math.floor(Math.random() * 11)};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

salamander["astronautID"] = 2;
salamander["move"] = function () {return Math.floor(Math.random() * 11)};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6
};

superChimpTwo["astronautID"] = 3;
superChimpTwo["move"] = function () {return Math.floor(Math.random() * 11)};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5
};

dog["astronautID"] = 4;
dog["move"] = function () {return Math.floor(Math.random() * 11)};

let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1
};

waterBear["astronautID"] = 5;
waterBear["move"] = function () {return Math.floor(Math.random() * 11)};


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];



// Print out the relevant information about each animal.

function crewReports(testObj) {
    for (i = 0; i < testObj.length; i++) {
        console.log(`${testObj[i].name} is a ${testObj[i].species}. They are ${testObj[i].age} years old and ${testObj[i].mass} kilograms. Their ID is ${testObj[i].astronautID}.`);
    }
    // console.log(`${testObj.name} is a ${testObj.species}. They are ${testObj.age} years old and ${testObj.mass} kilograms. Their ID is ${testObj.astronautID}.`);
}

crewReports(crew);

function fitnessTest(racer) {
    let results = [], numSteps, turns;
    for (let i = 0; i < racer.length; i++) {
        numSteps = 0;
        turns = 0;
        while (numSteps < 20) {
            numSteps += racer[i].move();
            turns++;
        }
        results.push(`${racer[i].name} took ${turns} turns to take 20 steps.`);
    }
    return results;
}
fitnessTest(crew);