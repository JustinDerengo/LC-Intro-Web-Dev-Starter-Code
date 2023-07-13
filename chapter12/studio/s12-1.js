// 12.8.1. Select the Crew

// Code your selectRandomEntry function here:
// let crewArray = [];
// function selectRandomEntry (selection) {
//   let i = 0;
//   while (crewArray.length < 3) {
//     let index = Math.floor(Math.random()*selection.length);
//     let outterIndex = []
//     if (outterIndex.includes(selection[index])) {
      
//     }
//     i++
//     if (crewArray.length >= 3) break;
// //   }
// let crewArray = [];

function selectRandomEntry (selection) {
  let i = 0;
  let crewArray = [];
  while (i < 3) {
    let index = Math.floor(Math.random()*selection.length);
    if(!crewArray.includes(selection[index])){
      crewArray.push(selection[index]);
      i++
    }
  }
  
  return crewArray;

}

// return crewArray; 
//     for (i = 0; i < 3; i ++) {
//       let index = Math.floor(Math.random()*selection.length);
//       crewArray.push(selection[index]);
//     }
//     return crewArray;
// }


// Code your buildCrewArray function here:

function buildCrewArray (animalArray,numberArray){

  let crew = [];

  for (i = 0; i < animalArray.length; i++) {

    if (numberArray.includes(animalArray[i].astronautID)) {

      crew.push(animalArray[i].name);

    }

  } return `${crew[0]}, ${crew[1]}, and ${crew[2]} are going to into space!`

}

// function buildCrewArray (a, b) {
//   let crew = [];
//   for (i = 0; i < a.length; i++) {
//     for (j = 0; j < j < b.length; j++) {
//       if (a[i].includes(b[j].astronautID)) {
//         crew.push(b[j].name);
//       }
//     }
//   }
//  return `${crew[0]}, ${crew[1]}, and ${crew[2]} are going into space!`;
// }

let idNumbers = [291, 414, 503, 599, 796, 890];

console.log(selectRandomEntry(idNumbers));
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
console.log(buildCrewArray(animals, selectRandomEntry(idNumbers)));