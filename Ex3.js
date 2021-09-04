const fs = require('fs');

let file = fs.readFileSync("test.txt");

let fileArray = file.toString().split("\r\n");

let count = 0;
for (let i of fileArray) {
    if (i == '') {
        count++;
    }
}

console.log(count);

// let string = `asdfasdfasdf asdf asdfasdf kartik`;

// string = string.split("\n");

// console.log(string);

// let array = file.split(" ");

// console.log(array);

// for (let i of file) {
//     // let array = file.split("\n");
//     console.log(i);
// }