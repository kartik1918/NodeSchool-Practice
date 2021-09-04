const fs = require('fs');

let file = fs.readFileSync("test.txt");

// console.log(file.toString());

// let string = `asdfasdfasdf asdf asdfasdf kartik`;

// string = string.split("\n");

// console.log(string);

let array = file.split(" ");

console.log(array);

// for (let i of file) {
//     // let array = file.split("\n");
//     console.log(i);
// }