console.log(400.4 === 200.2 * 2);  // true
console.log(900.9 === 300.3 * 3);  // false

console.log(200.2 * 2); // 400.4
console.log(300.3 * 3); // 900.9000000000001

//to fix this problem 

console.log((300.3 *10 * 3)/10);  // 900.9

// just for information All numeric types in javascript are
//IEEE-754 Doubles. 
// javascript treats decimals as floating point numbers which means operations like addition might be subject to rounding error.
// because javascript uses the IEEE-754 standard for math, it makes use of 64 bit floating numbers. this causes precision errors when doing floating point (decimal)
// calculations, in short, due to computers working in base 2 while decimal is base 10.