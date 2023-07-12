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

    }
    console.log(`${testObj.name} is a ${testObj.species}. They are ${testObj.age} years old and ${testObj.mass} kilograms. Their ID is ${testObj.astronautID}.`);
}

console.log(crewReports(waterBear));
// Start an animal race!