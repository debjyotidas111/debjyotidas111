//circular brackets are used take inputs into function.
//curly brackets are used to define body of a function.
function addTwoNumbers(x, y){
var result = x+y;
return result;}
// return is used to return output to caller.
// function is a block of code to perform task.
// reusability and modularity
// how to call a function
var output = addTwoNumbers(10, 20);
console.log("result is",output);
output = addTwoNumbers(10, 0);
console.log("result is",output);
output = addTwoNumbers(10, -20);
console.log("result is",output);
output = addTwoNumbers(50, -20);
console.log("result is",output);

function addTwoNumbers1 (x, y){
    var result = x*y;
    return result;}

    var output = addTwoNumbers1 (10, 20);
console.log("result is",output);


function addTwoNumbers12 (x, y, z){
    var result = x*y%z;
    return result;}

    var output = addTwoNumbers12 (10, 20, 44);
console.log("result is",output);