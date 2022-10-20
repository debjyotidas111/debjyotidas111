var body = "return Math.PI * rad * rad"
var circle = new Function("rad", body);
console.log(circle(5));

//generator function
// function* generateFunc(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let generator = generateFunc();
// let one = generator.next();
// let two = generator.next();
// let three = generator.next();
// alert(JSON.stringify(one));
// alert(JSON.stringify(two));
// alert(JSON.stringify(three));

// predefined function
// eval . parseint, parsefloat, escape, unescape
let x =5;
let y = 8;
let z = "gg";
console.log(escape(z)); // gg
console.log(unescape(z));   // gg
console.log(eval(x+y));  // 13
console.log(eval(y));  // 8
console.log(parseFloat(x+y)); //13
console.log(parseInt(x+y));  // 13
console.log(parseFloat(z)); // NaN
console.log(parseInt(z)); // NaN