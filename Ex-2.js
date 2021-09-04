let arguments = process.argv.slice(2);

let sum = 0;
for (let ele of arguments) {
    sum += parseInt(ele);
}

console.log(sum);

// inputArr = parseInt(inputArr.slice(2));

// console.log(arguments);