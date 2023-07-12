// 11.10.1. Practice Your Skills
//Create an anonymous fucntion and set it equal to a variable.

let input = function (n) {
  if (typeof(n) == 'number') {
    return n *3;
  } else if (typeof(n) == 'string') {
    return "ARRR!";
  } else {
    return n;
  }
}

console.log (input(200));
console.log (input('help'));
console.log (input([1,2,3]));


/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

console.log (arr.map(input));

console.log(arr);