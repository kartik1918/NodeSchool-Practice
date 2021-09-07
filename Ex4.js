const fs = require('fs');

let file = fs.readFile('test.txt', callBackFn);

console.log(file);

function callBackFn(error, response, file) {
    if (error) {
        console.log('Error : ', error);
    } else {
        printNewLines(file);
    }
}

function printNewLines(file) {
    let fileArray = file.toString().split("\r\n");

    let count = 0;
    for (let i of fileArray) {
        if (i === '') {
            count++;
        }
    }
    console.log(count);
}
