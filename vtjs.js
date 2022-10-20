var x = 5;
var y = 5;
console.log("sum of two numbers " +( x==y));
// if we don't put brackets x==y then it's showing false

//prefix operator - the variable is incremented first and then the expression is evaluated using the new value of the variable.
//and postfix operator - the expression is evaluated first using the original value of the variable thrn the variable is incremented.

var num = 6;
var newNum = num++;
console.log(num);  // 7
console.log(newNum);   //  6

var num1 = 5;
var newNum1 = ++num1;
console.log(num1);  // 6
console.log(newNum1); //   6

var num2 = 2;
var newNum2 = --num2;
console.log(num2);  // 1
console.log(newNum2); //   1


var num3 = 9;
var newNum3 = num3--;
console.log(num3);  // 8
console.log(newNum3); //  9

// exponentiation operator
console.log(3**3);
console.log(10**-1);

// swap two values of variable without using third variable
var a = 5;
var b= 10;

a= a+b;  // 15
b=a-b;    //  5
a= a-b;  //    10
console.log("the value of a is " + a);
console.log("the value of b is " + b);

// we have total five falsy values in js -- 0, "" , undefined, null, NaN. and obviously false also.

// use of conditional (ternery) operator
// the conditional (ternery) operator is the only js operator that takes three operands
var age = 18;
console.log((age>=18) ? "you can vote" : "you can not vote");

//switch statement
// evaluates an expression , matchinmg the expression's value to a 
// case clause and executes statements associated with that case
// fint the area of circle , triangle and rectangle

// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;

var area = "triangle";
var PI = 3.142, l=5, b=4, r=3;

switch(area){
    case "circle":
    console.log("the rea of circle is " + PI*r**2);
    break;
case "triangle":
    console.log("the rea of triangle is " + l*b/2);
    break;
case "rectangle":
    console.log("the rea of rectangle is " + l*b);
    break;
default:
    console.log("the is invalid");
}

// if(area == "circle"){
//     console.log("the rea of circle is " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("the rea of triangle is " + l*b/2);
// } 
// else if(area == "rectangle"){
//     console.log("the rea of rectangle is " + l*b);
// }else{
//     console.log("the is invalid");
// }

//table of number
for(let num=1; num<=10; num++){
    var table = 5;
    console.log(table + "*" + num + "=" + table*num);
}

//difference between for in and for of loop
var array = ["gg", "tt", 'yy',"dd"];
for(elements in array){
    console.log(elements); // output 0,1,2,3
}

for(elements of array){
    console.log(elements);  // output gg,tt,yy,dd
}

const months = ["jan", "feb","mar", "apr", "may"];

var ee = months.splice(months.length, 0 , "june");
console.log(months);
var tt =months.splice(months.length-1, 0 , "july");
console.log(months);
var gg =months.splice(7, 0 , "aug");
console.log(months);
//shortcut method to exchange value
indexofMar = months.indexOf("mar");
if(indexofMar!= -1){
    cutData = months.splice(indexofMar,1, "Mar");  
    console.log(months);
    cutData1 = months.splice(indexofMar,Infinity); // Infinity is used to delete all the rest of the elements
    // in an array from the given position
    console.log(months);
}else{
    console.log("no such data found");
}

console.log(cutData);  // output ['mar']
console.log(cutData1);  // output [ 'Mar', 'apr', 'may', 'july', 'june', 'aug' ]
console.log(...cutData); //  output mar
console.log(typeof(NaN));   // output number
console.log(typeof(undefined)); // output undefined
console.log(typeof(null));     // output object
console.log(typeof(Symbol)); // output function
console.log(typeof(BigInt));   // output function
console.log(typeof(Function));     // output function
console.log(typeof(Number));   // output function
console.log(typeof(Boolean));   // output function
console.log(typeof(Array));   // output function
console.log(typeof(Object));    // output function
console.log(typeof(String));   // output function


















// function sumaverage(n){
//     let sum=0;
//     let average=0;
// for(let i=0; i<=n; i++){ 
//    sum+=i;
//    average =(sum/i);
//    var r= parseInt(average);
// }
// console.log(sum, r);
// console.log(average);

// let n = parseInt(readline(5));
// function sumAndAverage(n) {
//     let sum=0;
//     let average =0;
//      for(let i=0; i<=n; i++){
//      sum+=n;
//      average = sum%n;		
// }
// console.log(sum, average);
//  }
// sumAndAverage(5);
function sumAndAverage(n) {
    let sum=0;
    let average =0;
     for(let i=0; i<=n; i++){
     sum+=i;
     average = sum/n;
     var newAverage = parseInt(average);		
}
console.log(sum, newAverage);
}
sumAndAverage(6);

var  arr =[3,7,10,5,8,2];
var count =0;
newArr = arr.filter(element=>{ 
    
       element= element%2!=0;
       count++;   
      return element;        
    }
   )
   console.log(arr,newArr, count );
   // [ 3, 7, 10, 5, 8, 2 ] [ 3, 7, 5 ] 6
   // when we use filter method output is [ 3, 7, 5 ]

   var  arr2 =[3,7,10,5,8,2];
var count2 =0;
newArr2 = arr2.map(element=>{ 
    
       element= element%2!=0;
       count2++;   
      return element;        
    }
   )
   console.log(arr2,newArr2, count2 );
   // output  [ 3, 7, 10, 5, 8, 2 ] [ true, true, false, true, false, false ] 6
   // when we use forEach method, output is  [ true, true, false, true, false, false ]

   var  arr1 =[3,7,10,5,8,2];
   var count1 =0;
newArr1 = arr1.forEach(element1=>{ 
    
       element1= element1%2!=0;
       count1++;
      return element1;           
    }
   )
   console.log(arr1,newArr1, count1 );
// output  var  arr =[3,7,10,5,8,2];undefined, 6
// when we use forEach method, output is undefined


var  arr3 =[64,49,25,81];
newArr3 = arr3.map(element1=>{ 
   return Math.sqrt(element1);           
 }
)
console.log(newArr3 );
// output 8,7,5,9

//this is called chaining style
var  arr4 =[6,4,2,8];
newArr4 = arr4.map(element2 => element2*2).filter(curElement => curElement>10).reduce((accumulator, curele) => 
accumulator+=curele , 2);  // this ,2 is used as initial value
console.log(newArr4);

// if we do not use return in fat arrow function it is okay. It will give ouput but we don't have to use ;

var  arr5 =[[64,49],[25,81]];
newArr5 = arr5.reduce((accum, curval) => 
{
    return accum.concat(curval);
}
)
console.log(newArr5 ); // output [ 64, 49, 25, 81 ]

// escape character
let anySentence = "we are \"awesome\""; // we can use \ for same result using "" only
let anySentence1 = 'we are "awesome"'; // we can use both '' and ""
console.log(anySentence);
console.log(anySentence1);

// find string in a string
var line = "this is good stuff";
console.log(line.indexOf("t", 10)); //  14
console.log(line.indexOf("u"));  // 15
console.log(line.lastIndexOf("o")); // to find the last "o" letter position
// output 10, here 10 is strating point which is not mandatory

//search method

console.log(line.search("g")); 

//slice method
var line1 = "apple, banana";
console.log(line1.slice(0, 4));  // output appl
// slice method begins from the starting point but ends before 
// the end argument that's why e of apple is not printed. 
// the original array and string will not be changed because slice gives output
// as a new array and string.
console.log(line1.slice(8, -2)); // output ana
console.log(line1.slice(-6, -1));  // output banan
// if we give negative value as ending position, it will count all till end point not like normal number
// substring method
console.log(line1.substring(8, -2)); // output apple, b // substring doest not county negative value as ending position
// , and space will also be counted and -2 means last two characters will be ignored
var line3 = "apple, banana, gg";
console.log(line3.substring(-1)); // output apple, banana, gg // it will print everything by using negative value

console.log(line1.slice(7)); // output banana.  end position is not mandatory. it will print rest all the strings from given position 
console.log(line1.slice(7, 13)); // output banana
// to print the last letter, we have to add one extra index value like here 13, while it should be 12
// substr method
var line2 = "apple, banana";

console.log( line2.substr(8, -2)); // output nothing blank
console.log( line2.substr(8));  // output anana
console.log( line2.substr(-2));  // output na

var line4 = "apple, banana, banana";
// replace method
console.log( line4.replace("banana", "BANANA")); // output apple, BANANA, banana
console.log( line4.replace("BANANA", "BANANA")); // OUTPUT WILL REMAIN SAME BECAUSE SEARCHING BANANA IS CASE SENSITIVE
console.log( line4); // output apple, banana, banana // in all the above mentioned methods original values of variable will not change

// charAt method
console.log( line4.charAt(7));  // output b , gives the string of that index position

// charCodeAt method
 // output 97 //we can use both letter and index number of a string
// it returns UTF-16 unicode integer value between 0 to 65535 of each letter
console.log( line4.charCodeAt(-1)); // output Nan
let newLine = line4.length-1;
console.log(line4.charCodeAt(newLine)); // output 97 for a letter
console.log( line4.charCodeAt(10));  // output 97 for a letter

// property access
console.log(line4[0]); // when we finding some string value inside string it's called property access not array

// convertion to upper case and lwer case
console.log(line4.toUpperCase());  // output  APPLE, BANANA, BANANA
console.log(line4.toLowerCase()); // output apple, banana, banana

// concat method
let fName = "Debjyoti";
let lName = "Das";
console.log(fName + lName); // output DebjyotiDas
console.log(`${fName} ${lName}`); //   Debjyoti Das
console.log(fName.concat(lName));  //  DebjyotiDas
console.log(fName.concat(" ", lName));  // Debjyoti Das

// trim method
let ggname = "          Hello     World        ";
console.log(ggname.trim()); // output Hello     World
// it does not remove spaces in between two string
// trim method removes whitespaces from both sides of a string

// split method
let txt = "a,b,c,d,e";
let txt1 = "a,b c,d e";
let txt2 = "a,b|c,d|e";
console.log(txt.split(",")); // [ 'a', 'b', 'c', 'd', 'e' ]   spillted where , is found
console.log(txt1.split(" ")); // [ 'a,b', 'c,d', 'e' ]  splitted where space is found
console.log(txt2.split("|"));  //  [ 'a,b', 'c,d', 'e' ]  spillted where | is found

// new Date constructor
let curentDate = new Date();
console.log(curentDate);  // 2022-09-02T12:36:34.252Z
console.log(new Date().toLocaleString()); // 2/9/2022, 6:11:32 pm
console.log(new Date().toString()); // Fri Sep 02 2022 18:12:38 GMT+0530 (India Standard Time)
console.log(Date.now()); //  1662122763337 // jan 1st , 1970 - till today this is the count of miliseconds

let curentDate1 = new Date(2022, 11, 05, 18, 54, 54,40  );
console.log(curentDate1.toLocaleString()); // 5/12/2022  6:54:54 pm
let curentDate2 = new Date(2022 ); 
  // 1/1/1970   5:30:02 am
// here new Date(year, month, date, hour , minute, second, milisecond)
// here month is argument is mandatory if not present then output is 1/1/1970
// here month is from 0-11
let curentDate3 = new Date(2022 , 2);
console.log(curentDate3.toLocaleString()); // 1/3/2022, 12:00:00 am // default time is here 12:00:00 am
let curentDate4 = new Date(" Octotber 12 2021 11:12:34:52");
console.log(curentDate4.toLocaleString());  // 12/10/2021, 11:12:34 am
// when we type month name in argument then output is normal 1-12.
let curentDate5 = new Date(1662124864344);
console.log(curentDate5.toLocaleString()); // 2/9/2022, 6:51:04 pm // current date and time from milisecond to real data
let curentDate6 = new Date(86400000*2);
console.log(curentDate6.toLocaleString()); // 3/1/1970, 5:30:00 am 
// here we are getting next date from 1/1/1970 as 1 day equals to 86400000 miliseconds

let onlyDate = new Date();
console.log(onlyDate.toLocaleString()); // 2/9/2022, 7:02:53 pm
console.log(onlyDate.getFullYear()); // 2022
console.log(onlyDate.getMonth()); // 8
console.log(onlyDate.getDate());  //2
console.log(onlyDate.getDay());  // 5

console.log(onlyDate.getTime()); // it returns output in milliseconds
console.log(onlyDate.getHours()); // 19 //0-23 hour format
console.log(onlyDate.getMinutes());  //
console.log(onlyDate.getSeconds());  // 
console.log(onlyDate.getMilliseconds()); //

console.log(onlyDate.setFullYear(2002 ,7,4)); // 1028469684126
console.log(onlyDate.setMonth(10)); // 1036418484126
console.log(onlyDate.setDate(12));  //
//console.log(onlyDate.setDay(5));  // we can't use setDay 

//console.log(onlyDate.setTime()); // NaN because of blank
console.log(onlyDate.setHours(5)); // 
console.log(onlyDate.setMinutes(25));  //
console.log(onlyDate.setSeconds(42));  // 
console.log(onlyDate.setMilliseconds(757));  //
// all results will come in milliseconds format but in browser it will
//show normal time

console.log(onlyDate.toLocaleDateString()); // to get only date
console.log(onlyDate.toLocaleTimeString()); // to get ony time

//math
console.log(Math.PI);
let num6 = 52.4;
console.log(Math.round(num6)); // 52  // round does not increment value till .0  -  .4
console.log(Math.ceil(52.1));  // 53   // in every scenario ceil will increment value
console.log(Math.pow(2,3));  // 8
console.log(Math.floor(11.99)); // 11  // in every scenario ceil will remain same num without .000 except negative number
console.log(Math.floor(-11.99));  // 12
console.log(Math.sqrt(81)); // 9
console.log(Math.sqrt(52));  // 7.2111.....
console.log(Math.abs(-52));  // abs = absolute value ,to make it positive number
console.log(Math.abs(8-10)); // 2
console.log(Math.min(8,10,-40,100,-100)); // -100
console.log(Math.max(8,10,-200,85,-10)); //   85
console.log(Math.random()); // 0.12125405136918066 // it will give random number between 0 - 1 in .0000 format
console.log(Math.random()*10); // any random number between 0-9 in .000 format
console.log(Math.floor(Math.random()*10));  // any random number between 0-9
console.log(Math.trunc(81.99));  // 81 // it removes after . values and only integer before .


// array destructuring
let newarr12 = ["gg","tt","yy","pp"];
let [fst,sec,thi,fou, fiv = 5] = newarr12;
console.log(sec);
console.log(fiv);

// object destructuring
const newobj2 = {
    fname : "deb",
    lname : "Das",
    newage : 24
}
let {fname, lname, newage, BloodG = "B+"} = newobj2;
console.log(lname);
console.log(BloodG);
console.log(newage);

// object properties
// we can use dynmamic  properties
let myname = "Debjyoti";
let mybiodata = {
     myname : "Biraj",
    26  : "is my age"
} // { '26': 'is my age', myname: 'Biraj' }
console.log(mybiodata);

let myname1 = "Debjyoti";
let mybiodata1 = {
     [myname1] : "is my name", // by using [] we refer to dynamic datain an object
    [20+6]  : "is my age"  // we can write both any number or calculation inside []
} // { '26': 'is my age', Debjyoti: 'is my name' }
console.log(mybiodata1);

// if both key and value are same then we no need to write key and value pair , only key is enough
let one = 1;
let two = 2;
let total = {
    one : one,
    two : two
} // { one: 1, two: 2 }
console.log(total);

let one1 = 1;
let two2 = 2;
let total1 = { // without key and value pair
    one1,
    two2
} // { one: 1, two: 2 }
console.log(total1);

// The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. 
//But the spread syntax expands iterables into individual elements.
// rest operator 
let colors = ["red", "green", "blue", "pink"];
let colors2 = ["black", "white", "grey", "brown"];
let myfavcolors = [ "purple",...colors, ...colors2, "yellow"];
console.log(myfavcolors); //  [
//     'purple', 'red',
//     'green',  'blue',
//     'pink',   'black',
//     'white',  'grey',
//     'brown',  'yellow']
//   ]
//we can also use spread operator in object after 2018 update
let cars  = { fst: "bmw", sec: "mercedes", thi:"rolls" };
cars1 = {...cars};
console.log(cars);  // // { fst: 'bmw', sec: 'mercedes', thi: 'rolls' }
console.log(cars1); // { fst: 'bmw', sec: 'mercedes', thi: 'rolls' }
// spread operator 
console.log(...myfavcolors);  //  purple red green blue pink black white grey brown yellow

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));
  
  // The invocation above will return:
  //["CodeSweetly", "Web Developer", "Male"]

  // Define a function with three parameters:
function myBio1(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
  // Use spread to expand an array’s items into individual arguments:
  console.log(myBio1(...["Oluwatobi", "Sofela", "CodeSweetly"]));  // Oluwatobi Sofela runs CodeSweetly // same output
  //console.log(myBio1("Oluwatobi", "Sofela", "CodeSweetly")); // Oluwatobi Sofela runs CodeSweetly
  
  // The invocation above will return:
  //“Oluwatobi Sofela runs CodeSweetly”

  // es7 features
  // include method
  let colors3 = ["black", "white", "grey", "brown"];
  let newcolor = colors3.includes("white");
  let newcolor1 = colors3.includes( "pink");
  console.log(newcolor, newcolor1 ); // true false

  // exponential operator
  console.log(2**3);  // 8

  //es8 features
  //padStart and padEnd method
  let voila = "Deb";
  let holla  = "alex";
  console.log(voila.padStart(4)); // " Deb"   
  console.log(voila.padEnd(5, " x")); // "Deb x"  // includes the passed variable value and space added extra value
  console.log(holla.padStart(7, "hi ")); // hi alex
  console.log(holla.padEnd(8, " bye")); // alex bye

  // object values converts object into an array
  const details = { name1: "Deb", year: 1998};
  console.log(Object.entries(details)); // [ [ 'name1', 'Deb' ], [ 'year', 1998 ] ]
  let entriesobj = Object.entries(details);
  console.log(Object.fromEntries(entriesobj));  // { name1: 'Deb', year: 1998 }
  console.log(Object.values(details));// [ 'Deb', 1998 ]
  console.log(Object.keys(details));// [ 'name1', 'year' ]

  console.log(Object.seal(details)); // { name1: 'Deb', year: 1998 } // returns object
  console.log(Object.isSealed(details));  // true
 console.log(Object.freeze(details));  // { name1: 'Deb', year: 1998 }
 console.log(Object.isFrozen(details));  // true

 // flat array
 let flatarr = [ "gg",["tt", [ "yy" , [ "oo"]]]];
 console.log(flatarr.flat(Infinity));  // [ 'gg', 'tt', 'yy', 'oo' ]

 let flatarr1 = [ "gg",["tt", [ "yy" , [ "oo"]]]].flat(3);
 console.log(flatarr1); // [ 'gg', 'tt', 'yy', 'oo' ]

 let flatarr2 = [["gg", "pp"] ,["tt", "ll"], [ "yy" , [ "oo"]]];
let resultflat = flatarr2.reduce((accum, currentval) => {
    return accum.concat(currentval);
})
console.log(resultflat); // [ 'gg', 'pp', 'tt', 'll', 'yy', [ 'oo' ] ]
// it can only flat upto two level or 2d array not more than that

//trim start and trim end
let trimsten = " 'deb' ";
console.log(trimsten.trimStart(1).trimEnd(1)); // 'deb'

//BigInt datatype

console.log(9007199254740991n + 4n); // 9007199254740995n
// we havee to add n at the end of number to deal with above max safe
//number that is bigint datatype
console.log(typeof(9007199254740991n + 4n));  // bigint

let greatNum = Number.MAX_SAFE_INTEGER; 
console.log(Number.MIN_SAFE_INTEGER);  //  -9007199254740991
console.log(greatNum);  // 9007199254740991
console.log(Number.NEGATIVE_INFINITY); // -INFINITY
console.log(Number.MAX_VALUE);  //  1.7976931348623157e+308
console.log(Number.MIN_VALUE);  //   5e-324
console.log(Number.POSITIVE_INFINITY); //  INFINITY
console.log(Number.EPSILON);  // 2.220446049250313e-16

var result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);// expected output: true

// nullish coalescing
// to check nullish value instead of falsey value.
// to check if it is either null or undefined
const foo = null ?? "it;s nullish";
const chu = undefined ?? "it's nullish";
const chu1 = NaN ?? "it's nullish";
const chu2 = 0 ?? "it's nullish";
const chu3 = false ?? "it's nullish";
console.log(foo); // it's nullish
console.log(chu);  // it's nullish
console.log(chu1);  // NaN
console.log(chu2);  //  0
console.log(chu3); //  false

// use strict mode

"use strict";
x = 3.14;

"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

//event propagation - Capturing Phase (outermost element to inner element) and Bubbling Phase
// by default it's always strats from bubbling phase from innermost element to outer element
 // for example
//const parentId = document.getElementById('parentId');
//const childId = document.getElementById('childId');

 const parentCall = () => {
    alert('Parent Div Call');
 }
 const childCall = () => {
    alert('Child Div Call');
    //if we want to stop propagation to child div(example) then use stop propagation
    //event.stopPropagation();
 }
// using addeventlistener
//  parentId.addEventListener('click', parentCall, false);
//  childId.addEventListener('click', childCall, false);
//by default third argument remains false
//if we want capturing phase result as opposite of bubbling phase
// then we need to use true argument, if we click on inside outside result will show first
//  parentId.addEventListener('click', parentCall, true);
//  childId.addEventListener('click', childCall, true);

//higher order function - it accepts another function as an argument
// and callback function - it passes itself inside another function as an argument

const sub = (a,b) => {
    return Math.abs(a-b);
}
const add = (a,b) => {
    return (a+b);
}
const mul = (a,b) => {
    return (a*b);
}
const div = (a,b) => {
    return (a/b);
}
const calc  = (num1, num2, operator) => {
    return operator(num1, num2);
}
console.log(calc(5,2,sub));

// lexical scoping
//lexical scoping means the inner function can get access to their parent function variables
//but the vice versa is not true
// the scope chain is used to resolve the value of variable names in js

// closure - closure gives you access to an outer function's scope from inner function.
// a closure is the combination of a function bundled together ( encolsed) 
//with references to its surrounding state (the lexical environment)
// closures are created everytime a function is created at function creation time

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a+b;
        console.log(sum);
    }
    return innerFun;  /// if we return the function ouput is the function name
}
console.log(outerFun(5));  //  [Function: innerFun]
// let checkClosure = outerFun(5);
// checkClosure();  // 15  // if we store the function in a variable then call it. it's giving right result
//console.dir(checkClosure); //  [Function: innerFun]

const outerFun1 = (a) => {
    let b = 10;
    const innerFun1 = () => {
        let sum = a+b;
        console.log(sum);
    }
     innerFun1(); // if we call the function after creation, result is fine
}
outerFun1(5); // 15

console.log(typeof 10); // we can also use typeof operator without brackets
var jkj = "__yeah,,";
console.log(jkj.slice(2,6));
var jhj = `I'm "Debjyoti"`;
console.log(jhj);

const arr11 = [10, 20, 30];
	var result11 = 0;
	
	arr11.forEach(myFunction1);
	
	console.log("Result: " , result11)
	function myFunction1(value1, index, array) {
	  result11 += value1; 
	}

    const values = [10, 20, 30];
	const result12 = values.map(myFunction);

	console.log("Result: ", result12);

	function myFunction(value, index, array) {
	  return value * value;  //  Result:  [ 100, 400, 900 ]
	}

//asynchronous programming
// it will do the work which takes less time first, settimeout will be executed later
//  const fun2 = () => {
//     setTimeout(() => {
//         console.log('this is called 1')
//     }, 2000);
//  }

//  const fun1 = () => {
//     console.log('this is called 2');
//     fun2();
//     console.log("this is called 3");
//  }
// fun1();

function findIndex(nums, target) {
    var xyx = [];
   
    if(nums.includes(target))
    return nums.indexOf(target);
    else
    {
        for(let i=0; i<=Math.MAX_SAFE_INTEGER; i++){
            xyx = [i];
            var ttt = [...nums, ...xyx];
            xyx.push(ttt);
            var ooo = xyx.sort();
            if(ooo.includes(target)){
              return ooo.indexOf(target);
            }
        }
    }
};
    var nums = [1,3,5,6];
    var target = 2;
    console.log(findIndex(nums, target));

    //function currying
  // currying is technique of evaluating function with multiple arguments , into sequence
  //of function with single argument
    function sum(num1){
        console.log(num1);
        return function(num2){
            console.log(num2);
            return function(num3){
                console.log(num3);
                console.log(num1 + num2 + num3);
            }
        }
    }
    sum (5) (10) (20);

    // we can also write the above code in one line with fat arrow function

    const sum1 = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
    sum1 (5) (10) (20);

 // callback hell

setTimeout(() => {
    console.log('1 work is done');
    setTimeout(() => {
        console.log("2 work is done");
        setTimeout(() => {
            console.log("3 work is done");
            setTimeout(() => {
                console.log("4 work is done");
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

//XML HTTP REQUEST OR AJAX
// const container = document.querySelector('#nameofid');

// const request = new XMLHttpRequest();
// request.open('GET', "website url");
// request.send();
// //to get the response
// request.addEventListener("load", function(){
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data.capital);
//      const htmldata = '';
//     container.insertAdjacentHTML("afterbegin", htmldata)
// })

//to convert object to JSON format
var my_obj = { key1: "ss", key2: "dd"};
var objasstring = JSON.stringify(my_obj);
console.log(objasstring); //  {"key1":"ss","key2":"dd"}
console.log(typeof(objasstring)); // string

//to convert JSON to an object format
var jsontoObj = JSON.parse(objasstring);
console.log(jsontoObj);  // { key1: 'ss', key2: 'dd' }
console.log(typeof(jsontoObj));  //object

//promise //use of then is resent in promise

// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn');
// const generateJokes  = () => {
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }
//     fetch('website url', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         jokes.innerHtml = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })
// }

//async and await
//using position of async

// const asyncData = async () => {}
// async function asyncdata2 (){}
// // same with async and await
// const jokes1 = document.querySelector('#joke');
// const jokeBtn1 = document.querySelector('#jokeBtn');
// const generateJokes1  = async () => {
    
//     try{
//         const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }
//         const res  = await fetch('website url', setHeader);
//         const data = await res.json();
//         jokes1.innerHtml = data.joke;
//         }catch(error){
//         console.log(error);
//     }
//     }

    // find method reutrns one value that is the first element in the array that satisfies condition
    // only find method returns undefined if condition not satisfies
    // other array methods return -1 if not found
    var arr$ = [200,388,43,-67,43,100];
    var out = arr$.find((ele) =>
      ele < 100  );
      console.log(arr$.find((ele) =>
      ele > 1000  )); // undefined
      console.log(arr$.find((ele) =>
      ele < 100  )); // 43  both we can use
      console.log(out);  // 43
      console.log(arr$.findIndex((ele) =>
      ele == 43  )); //  2 // it also returns only first matching result
      console.log(arr$.findIndex((ele) =>
      ele == 430  ));  // -1
      console.log(arr$.filter((ele) =>
      ele == 430  )); // []
      // filter method returns [] if condition not satisfies
      console.log(arr$.sort());  // [ -67, 100, 200, 388, 43, 43 ]
      // sort metthod sorts number by comparing first single number of each number from 1 to end num.
      // but if - num presents then that will come first as output
      var arr$_ = ['dec', 'may', 'apr', 'aug', 'sep']
      console.log(arr$_.sort());  // [ 'apr', 'aug', 'dec', 'may', 'sep' ]

      
      function sumNaturalNum (nn){
        
        for(let i=0; i<=nn; i++){
            //result += num$;
            var result$ = nn*(nn+1)/2;
             return result$;
        }
      }
      console.log(sumNaturalNum(5));
        
      
      function sumNaturalNum2 (nn){
        var result$1 = 0;
        for(let i=1; i<=nn; i++){
             result$1 += i;
        }
        return result$1;
      }
      console.log(sumNaturalNum2(5));
// 
    //   function sumNaturalNum1 (nn){
        
    // //     for(let i=1; i<=nn; i++){
    // //         for(let j=1; j<=i; j++){
    // //         nn++;
    // //         }
    // //     }
    // //   }
    // //   console.log(sumNaturalNum1(5));

    // every method // comparing two array is same or not
    var array21= [1,2,3,45,6,7];
    var array22= [2,3,6,7,1,45,5];
    var isSame1 = array22.length == array21.length && array21.every((curele) => {
        if(array22.indexOf(curele)>-1 ){
            return curele = array22[array22.indexOf(curele)]
        }
    })
    console.log(isSame1); // true // if value not found or length not matching then false

    // recursion mcq
// void print( n)
// {
//   if (n == 0)
//     return;
 
//   printf("%d", n%2);
  
//   print(n/2);
// }
// console.log(print(12));  // 0011


var city = new Array("delhi", "agra", "akot", "aligarh","palampur");
console.log(city.slice(2));  //  [ 'akot', 'aligarh', 'palampur' ]

function dog() {
    print("I am a dog.");
 }
 dog.sound = "Bark"; // nothing happens
