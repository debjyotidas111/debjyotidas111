//importing a library to read input from terminal
const readline = require("readline");

//create an interface to read data from terminal
//process and readline are inbuilt javascript object
const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rlInterface.question("enter a number: ", (answer)=>{
    console.log(answer);
    rlInterface.close();
});