function multiply(a, b){
    if (undefined == a || undefined == b
      || isNaN(a) || isNaN(b))
      throw new Error('Both arguments should be numbers')
    return a * b
  }
  console.log(multiply(5,8));  //40
 //console.log(multiply(undefined,NaN));  // Both arguments should be numbers

 function getPlanetName(id){
    return {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune'
    }[id]
  }
console.log(getPlanetName(5));  // jupiter
 
function getPlanetName1(i){
    return (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[i-1];
  }
 console.log(getPlanetName1(1));

 function solution(str){
    return str.split("").reverse().join("");
  }
 console.log(solution("green"));  // neerg

 const solution1 = s => [...s].reverse().join('');
 console.log(solution1("green"));  // neerg

 function solution3(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o =o+ s[i] ;  // if we start from last void variable should be at first position of plus
    return o;
  }
  console.log(solution3("red"));  // der

  function solution4(str){
    let n = ''
    for(let i of str){
      n = i+n    // if we start from first void variable should be at last position of plus
    }
    return n
  }
  console.log(solution4("red")); // der

  function solution5(str){
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
  }
  console.log(solution5("zolozo"));  // ozoloz

  function even_or_odd(number){
  return number%2 ? "Odd" :  'Even'  // if we dont use ===0 then we have to put odd first place the even
}
console.log(even_or_odd(8));  // even 

var even_or_odd1 = n => n & 1 ? 'Odd' : 'Even';
console.log(even_or_odd1(9));  //odd
console.log(even_or_odd1(8));  // even

// sum of positive nums
function positiveSum(arr) {
  var totalsum =0;
  if(arr.length == "")
  return 0;
  for(let i=0; i<arr.length; i++){  
    if(arr[i]>0){
    totalsum += arr[i]
   }
  }  
  return totalsum;
  }
  var arr = [2,0,4,6,-3,-8]
  console.log(positiveSum(arr));  //12

  const positiveSum1 = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

  function positiveSum2(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
  }

  function positiveSum3(arr) {
    var sum = 0;
    arr.forEach(function(v,i,a) {
      if(v>0){sum+=v;}
    });
    return sum;
  }

  function positiveSum4( obj ) {
    return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
  }
  
  //count array elements
  
  function countSheeps(arrayOfSheep) {   
   var length = 0;
    for (let value of arrayOfSheep) if (value !== null && value !== undefined && value !== false) length++;
  return length;
  }
  var arrayOfSheep = [true,false,
    false,  true, false ,false, undefined, null, 5, "hgh", 0]   
  console.log(countSheeps(arrayOfSheep));  // 5  it will only count those elements that are not value != 

  var arrayOfSheep1 = [true,false,
    false,  true, false ,false, undefined, null, 5, "hgh", 0]   

  function countSheeps1(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
  console.log(countSheeps1(arrayOfSheep1));  // 4 // it will count 0 as value

  // Return the number (count) of vowels in the given string.

  // We will consider a, e, i, o, u as vowels for this Kata (but not y).
  
  // The input string will only consist of lower case letters and/or spaces.

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
  // function getCount(str) {
  //   return str.replace(/[^aeiou]/gi, '').length;
  // }
  var str = "i am debjyoti";
  console.log(getCount(str));  // 5
  var str1 = "gg tt";
  console.log(getCount(str1));  // 0

//   function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }

//    function getCount(str) {
//     var vowelsCount = 0;
//     str.split("").forEach(function(x){
//       if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//         vowelsCount += 1;
//       }
//     });  
//     return vowelsCount;
//   }

//   function getCount(str) {
//     var vowelsCount = 0;
//     for (index in str){
//       switch (str[index]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//       vowelsCount++;
//       break;
//       }   
//     }
//     return vowelsCount;
//   }

//   const getCount = str => str.replace(/[^aeiou]/g, '').length;

//   function getCount(str) {
//     let vowels = ['a','e','i','o','u'];
//     return str.split('').filter(letter => {
//       return vowels.includes(letter)? true : false;
//     }).length;
//   }

//   function getCount(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     var vowelsCount = 0;
    
//     // enter your majic here
//     for (let i of str) {
//       if (vowels.includes(i)) vowelsCount++;
//     }
    
//     return vowelsCount;
//   }

//   const getCount =(str)=> {
//     let vowelsCount = 0;
    
//     // enter your majic here
//     for(letter of str){
//     if(letter === 'a'){
//       vowelsCount +=1;
//     }else if(letter === 'e'){
//       vowelsCount +=1;
//     }else if(letter === 'i'){
//       vowelsCount +=1;
//     }else if(letter === 'o'){
//       vowelsCount +=1;
//     }else if(letter === 'u'){
//       vowelsCount +=1;
//     }
//     }
    
//     return vowelsCount;
//   }

//   function getCount(str) {
//     let n = str.match(/[aeiou]/ig);
//     return n ? n.length : 0;
// };

// function getCount(str) {
//   var vowelsCount = 0;
  
//   vowelsCount = str.split("").reduce((total,item)=>{ 
//     if(["a","e","i","o","u"].includes(item)) 
//       total += 1; 
//     return total}, 0);
  
//   return vowelsCount;
// }

// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }
  
//   return vowelsCount;
// }

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. 
// She added a special case to her function, but she made a mistake.

function greet(name){
  if(name === "Johnny"){
    name = 'my love';
  return `Hello, ${name}!`;  
  }else return `Hello, ${name}!`;
}
console.log(greet("Johnny")); // Hello, my love!
console.log(greet("John"));  // Hello, John!

// function greet(name){
//   return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
// }

// function greet(name) {
//   if (name === 'Johnny')
//     name = 'my love';
  
//   return `Hello, ${name}!`;
// }

// function greet(name){
//   return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
// }

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
  return n%x===0 && n%y===0 ? true : false;
}
console.log(isDivisible(5,1,5));
console.log(isDivisible(5,2,3));

// function isDivisible(n, x, y) {
//   return !(n%x||n%y)
// }

// function isDivisible(n, ...dividers) {
//   return dividers.every(divider => n % divider == 0)
// }

// function isDivisible(n, x, y) {
//   return (n % x) + (n % y) == 0;
// }

// function isDivisible(n, x, y) {
//   return (Number.isInteger(n / x) && Number.isInteger(n / y));
// }

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
 return num<0  ? num : Number(`-${num}`) 
}
console.log(makeNegative(-42));
console.log(makeNegative(5));
console.log(makeNegative(0));

// function makeNegative(num) {
//   return -Math.abs(num);
// }

// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }

// function makeNegative(num) {
//   return num <= 0 ? num : num*-1;
// }
// makeNegative  =ㅤ=>ㅤ
// .constructor(ㅤ
// .constructor(ㅤ
// .toString
// (  +  !!ㅤ+  [  +  !ㅤ+  !ㅤ]  )
// .constructor
// .fromCharCode
// (  [  !!ㅤ+  !!ㅤ+  !!ㅤ+  !!ㅤ]  +  [  !!ㅤ+  !!ㅤ+  !!ㅤ+  !!ㅤ+  !!ㅤ]  )  +ㅤ)
// .toString
// (  +  !!ㅤ+  [  +  !ㅤ+  !ㅤ]  )
// .replace
// (  +ㅤ[ㅤ]  ,ㅤ)  )
// ;

// Given an array of integers your solution should find the smallest integer.

//class SmallestIntegerFinder {
  function findSmallestInt(args) {
    return Math.min(...args);
  }//}

  console.log(findSmallestInt([10,41,01,2,-74]));

  // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
  // You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

  function removeChar(str0){
    //str0 = str0.split('');
   var result1 = new Array(...str0);
     result1.shift();
     result1.pop();
     return result1.join("")
   };
   console.log(removeChar( "metal"));  // eta

  //  function removeChar(str) {
  //   return str.slice(1, -1);
  // }

  // const removeChar = (str) => str.replace(/^.|.$/g, '');

  // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

  // var sum =0;
  // function  summation(num) {
  //   if(num <=0 ) 
  //   return num;
  //   if(num == 1 ) 
  //   return num;
  //   sum += num;
  //   summation(num-1);
  //   return sum+1;
  // }
//console.log(summation(1000));

function summation1(num){
  var sum100 = 0;
  for(let i=0; i<=num; i++){
    sum100+= i;
  }
  return sum100;
}
console.log(summation1(2));

// const summation = n => n * (n + 1) / 2;

// var summation = function (num) {
//   return (num > 1) ? num + summation(num - 1):num;
// }

// const summation = num => (
//   Array(num).fill(true)
//     .reduce((sum, item, index) => sum + index + 1, 0)
// );

// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
  var n = marks.length;
  var output = marks.reduce((total, ele) => {
     return total+=ele;
  })
  return Math.trunc(output/n);
}
console.log(getAverage([1,2,3,4,5,6]));

// const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

// function getAverage(marks){
//   var sum = 0;
  
//   for (var i in marks)
//     sum += marks[i];
  
//   return parseInt(sum / marks.length);
// }

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if(p1 === p2) return "Draw!";
  if(p1 === "scissors" && p2=== "rock") {return "Player 2 won!";}
  else if(p1 === "rock" && p2=== "scissors"){
    return "Player 1 won!";
  }
  if(p1 === "scissors" && p2=== "paper") {return "Player 1 won!";}
  else if(p1 === "paper" && p2=== "scissors"){
    return "Player 2 won!";
  }
  if(p1 === "rock" && p2=== "paper") {return "Player 2 won!";}
  else if (p1 === "paper" && p2=== "rock"){
    return "Player 1 won!";
  }
};
console.log(rps( "paper", "scissors"));

// const rps = (p1, p2) => {
//   if(p1 === p2) {
//     return 'Draw!'
//   }; 
//   return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };

// const rps = (p1, p2) => {
//   const rules = {
//     'scissors': 'paper',
//     'rock': 'scissors',
//     'paper': 'rock'
//   };
//   return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
// };

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2)
// {
   
// let result00;

// if (operation === '+') {
//     result00 = value1 + value2;
// }
// else if (operation === '-') {
//     result00 = value1 - value2;
// }
// else if (operation === '*') {
//     result00 = value1 * value2;
// }
// else {
//     result00 = value1 / value2;
// }

// return operation , value1, value2 =  result00; // for node version 10 we cannot use template literals `${}`
// }

console.log(basicOp('+',4, 7));

function basicOp(o, a, b) {
  return eval(a+o+b);
}

// function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//       case '+': return value1 + value2;
//       case '-': return value1 - value2;
//       case '*': return value1 * value2;
//       case '/': return value1 / value2;
//       default: return 'Operation must be one of + - * /';
//   }
// }

// const basicOperations = {
//   '+': (a,b) => a + b,
//   '-': (a,b) => a - b,
//   '*': (a,b) => a * b,
//   '/': (a,b) => a / b,
// }

// const basicOp = (op, x, y) => basicOperations[op](x, y);

// function basicOp(operation, value1, value2) {
//   return  operation == '+' ? value1 + value2 :
//           operation == '-' ? value1 - value2 :
//           operation == '*' ? value1 * value2 :
//           operation == '/' ? value1 / value2 : 'Wrong Operation';
// }

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n);
}

// var string_ = "";
// function repeatStr (n, s) {
//   if(n<=0) return s;
//    string_ += s;
//   repeatStr(n-1, s)
//   return string_;
// }
// console.log(repeatStr(3,"hello"));

// function repeatStr (n, s) {
//   var string_ = "";
//   if(n<=0) return s;
//   for(let i=1; i<=n; i++){
//     string_ += s;
//   }
//  return string_;
// }
// console.log(repeatStr(3,"hello"));
// console.log(repeatStr(3,"#"));
// console.log(repeatStr(3,'*'));
// console.log(repeatStr(3,"ha "));

// function repeatStr (n, s) {
//   return n > 1 ? s + repeatStr(--n, s) : s;
// }

// function repeatStr (n, s) {
//   String.prototype.repeat = function(n) {
//      return (new Array(n + 1)).join(this);
//   };
//   return s.repeat(n);
// }

//const repeatStr = function (n, s) { return Array(n).join(s) + s}

// function repeatStr (n, s) {
//   var i = n;
//   var text = "";
//   while (i > 0) {
//      text += s;
//      i--;
//   }
//   return text;
// }

// Write a function to split a string and convert it into an array of words.
// "Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string$){
  var arr_ = string$.split(" ")
  return arr_;
}
console.log(stringToArray("gg pp"));

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/ +/g,'');  // (/\s+/g,'')  is also correct
}
console.log(noSpace("  h a  "));

// function noSpace(x){return x.split(' ').join('')}

// function noSpace(x){
//   var result = ""
//   for(var index = 0; index < x.length; index++){
//     if(x[index] !== " "){
//       result += x[index];
//     }
//   }
//   return result;
// }

// function noSpace(x){
//   if (typeof x === 'string') return x.replace(/ +/g, '');
//   console.log(arguments.callee.name + ': Argument must be string!');
// }

// Given an array of integers, return a new array with each value doubled.
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
return x.map((ele) => {  
 return ele*2;
})
}
console.log(maps([1, 2, 3]));

// function maps(x){
//   //return x.map(el => el * 2);
//   let arr = [];
//   for(let i = 0; i < x.length; i++){
//   arr.push(x[i] * 2);
//   }
//   return arr;
//   }

//   const multiply = x => y => x * y;
// const maps = x => x.map(multiply(2));

// function maps(x){
//   var a = [];
//   var c;
//   var b;
//   for (b in x) {
//     c = x[b] + x[b];
//     a.push(c);
//   }
//   return a;
// }

// maps  =ᅟ =ᅠ =>ᅠ !=  +  [  ]  ?  [ ᅠ[  +  [  ]  ]  + ᅠ[  +  [  ]  ]  ,  ... ᅟ( ᅠ.  slice  (  !  +  [  ]  )  )  ]  :  [  ]


// A hero is on his way to the castle to complete his mission. However, 
// he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
// our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets 
// and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)


// function hero(bullets, dragons){
// if(dragons*2 ===bullets){
//   return true;
// }else if(bullets>dragons){
// return true;
// }
// else return false;
// }

function hero(bullets, dragons){
  return bullets >= (2 * dragons);
}
console.log(hero(8,4));  //true
console.log(hero(7,4));  // false
console.log(hero(444,4));  // true
console.log(hero(0,1));  //false

function hero(bullets, dragons){
  //Get Coding!
  return (bullets / 2 >= dragons) ? true : false;
  }

  function hero(bullets, dragons){
    return bullets/dragons >= 2
  }

  function hero(bullets, dragons){
    var shots = bullets / dragons;
    if(shots < 2) {
    return false;
    } else {
    return true;
    }
  }

  // I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

  function arrayPlusArray(arr1, arr2) {
    var sumArr = arr1.concat(arr2); 
      return sumArr.reduce((allData, curele) => {
       return allData+=curele;
      })
  }
  console.log(arrayPlusArray([1,2,3,4], [5,6,7,8]));  // 36

  // function arrayPlusArray(arr1, arr2) {
  //   let arr = [...arr1, ...arr2];
  //   return arr.reduce((a, b) => a + b);
  // }

  // function arrayPlusArray(arr1, arr2) {
  //   var suma=0;
  //   for(var i=0;i<arr1.length;i++)
  //     suma+=arr1[i];
  //   for(var i=0;i<arr2.length;i++)
  //     suma+=arr2[i];
  //   return suma;
  // }

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task Given a year, return the century it is in.


// function centuryFromYear(year) {
//   var l = year;
//   let centuryCount = 0;
//   while (year > 0){
//     year = year - 100;
//     centuryCount = centuryCount + 1;
//   }
//   return l + " --> " + centuryCount;
// }
// console.log(centuryFromYear(1800));  //18
// console.log(centuryFromYear(1705));   //18

const century = year => Math.ceil(year/100);

console.log(century(2001));  //  21
console.log(century(23));  // 1

// function century(year) {
//   return Math.floor((year-1)/100)+1;
// }

// function century(year) {
//   let intermediate = year / 100;
  
//   if(intermediate % 1 !== 0) {
//     intermediate = Math.ceil(intermediate);
//   }
  
//   return intermediate;
//  }

// function century(year) {
//   var century = 0;
  
//   for(var i = 0; i < year; i++) {
//     if(i % 100 == 0) {
//       century++;
//     }
//   }
//   return century;
// }



// function find_century( year) {
 
//   // No negative value is allow for year
//   if (year <= 0)
//   return "0 and negative is not allow"
//                   + "for a year";

//   // If year is between 1 to 100 it
//   // will come in 1st century
//   else if (year <= 100)
//      return ("1st century\n");

//   else if (year % 100 == 0)
//      return (parseInt(year / 100) + " century");

//   else
//      return (parseInt(year / 100) + 1 + " century");
// }

// console.log(find_century(1705));


// Given an array of integers your solution should find the smallest integer.


// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }
var args = [2,6,7,4,77,6];
console.log(SmallestIntegerFinder(args));

function SmallestIntegerFinder(args) {
  let smallest = args[0]

  for(let i = 0; i < args.length; i++){
      if(args[i] < smallest) smallest = args[i]
  }
  return smallest
}

// function findSmallestInt(args) {
//   let smallest = args[0]
//   args.forEach(i => {
//       if(i < smallest) smallest = i
//   })
//   return smallest
// }

// function findSmallestInt(args) {
//   args.sort((a, b) => a - b)
//   return args[0]
// }


// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//var hh = humanYears;
// var catYears = 0;
//   var dogYears =0;
// var humanYearsCatYearsDogYears = function(humanYears) {
//   if(humanYears <= 0){
//     return humanYears, catYears, dogYears;
//    }else if(humanYears >= 1){
//    return catYears+=15 , dogYears +=15;}
//   humanYearsCatYearsDogYears(humanYears-1)
//   return humanYears,catYears,dogYears;
// }
//var humanYears =2;
//console.log(humanYearsCatYearsDogYears(humanYears));


//   var catYears = 0;
//    var dogYears = 0;
// const humanYearsCatYearsDogYears = (humanYears) => {
//   // return humanYears, catYears, dogYears
//   // var catYears = 0;
//   // var dogYears = 0;
//   if (humanYears === 0) {
//     return [humanYears, catYears, dogYears];}
//   //for(let i = 1; i <= humanYears; i++){
//     if (humanYears === 1) {
//       catYears = 15;
//       dogYears = 15;
//     } else if (humanYears === 2) {
//       catYears = 24;
//       dogYears = 24;
//     } else if (humanYears >= 3) {
//       catYears += 4;
//       dogYears += 5;
//     }
//     humanYearsCatYearsDogYears(humanYears==0)
//   //}
//   return [humanYears, catYears, dogYears];
// }
// var humanYears =2;
// console.log(humanYearsCatYearsDogYears(humanYears));

const catDog = (humanYears) => {
  // return humanYears, catYears, dogYears
  let catYears = 0;
  let dogYears = 0;
  
  for(let i = 1; i < humanYears.length; i++){
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}
console.log(catDog(4)); 

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// function points(games) {
//     var i = 0;
//     var points = 0;
//     for (i; i < games.length; i++) {
//         let each = games[i].split(":");
//         if (each[0] > each[1]) {
//             points += 3;
//         } else if (each[0] == each[1]) {
//             points += 1;
//         } else {
//             points += 0;
//         }
//     }
//     return points;
// }
//console.log(points(["3:1", "2:2", "0:1", "5:5", '5:3']));

const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)
console.log(points(["3:1", "2:2", "0:1", "5:5", '5:3']));
// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

// function points(games) {
//   let total = 0;
//   games.map(game => {
//     if (game[0] === game[2]) {
//       total += 1;
//     } else if (game[0] > game[2]) {
//       total += 3;
//     }
//   });
//   return total;
// }

// function points(games) {
//   var sum=0;
//   for (var i=0; i<games.length; ++i)
//   {
//     if (games[i][0]>games[i][2])
//       sum+=3;
//     if (games[i][0]==games[i][2])
//       sum+=1;
//   }
//   return sum;
// }

// const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)


// function points(games) {
//   // totalPoints will store the accumulated points
//   let totalPoints = 0;
    
//     // loop through the games array to get the scores
//     for(i=0; i<games.length; i++) {
   
//      // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
//       let xScore = Number(games[i].charAt(0)); 
//       let yScore = Number(games[i].charAt(2));
      
//       // Add points depending on the values of xScore compared to yScore
//       if (xScore > yScore) { totalPoints += 3; }
//       if (xScore < yScore) { totalPoints += 0; }
//       if (xScore === yScore) { totalPoints += 1; }
//     }
    
//     return totalPoints;
//   }

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


// function solution(number_){
//   var arr$_ = [];
//   for(let i=1; i<number_; i++){
//      if((i % 3 == 0) || (i % 5 == 0))
//      arr$_.push(i);

//   }
//   var sum$ = arr$_.reduce((tot, cur) => {
//    return tot += cur; },0)
//    return sum$;
// }
console.log(solution(1000));

function solution (n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
      if ((i % 3 == 0) || (i % 5 == 0)) {
          sum += i;
      }
  }
 return (sum);
}
// solution = n => {
//   let s = 0;
//   for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
//   return s;
// }

// function solution(number){
//   for(acc=0; --number > 2;){
//     acc = !(number%3) || !(number%5) ? acc + number : acc;
//   }
//   return acc;
// }

// function solution(number){
//   return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
// }


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
// pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// function likes(names) {
//   if(names.length === []) return  "[]                                                            -->  no one likes this";
//   if(names.length === 0) return   `["${names[0]}"]                                               -->  ${names[0]} likes this`;
//   if(names.length === 1) return   `["${names[0]}", "${names[1]}"]                                -->  ${names[0]} and ${names[1]} like this`;
//   if(names.length === 2) return   `["${names[0]}", "${names[1]}", "${names[2]}"]                 -->  ${names[0]}, ${names[1]} and ${names[2]} like this`;
//   if(names.length === 3) return   `["${names[0]}", "${names[1]}", "${names[2]}", "${names[3]}"]  -->  ${names[0]}, ${names[1]} and 2 others like this`;
// }
//    else{             // if(names.length >= 4)
//     var xx_ =[] //["${names[0]}", "${names[1]}", "${names[2]}", "${names[3]}"]
//     var yy_ =[] //[`${names[0]}, ${names[1]} and ${names.length - 2} others like this`]
//   for(let i=4; i<names.length; i++){
//    xx_.push(names[i]);
//   }   return xx_ ;
// }
//   //var zz_ = [...xx_, ...yy_];
//    //zz_;
//   //`["${names[0]}", "${names[1]}", "${names[2]}", "${names[3]}"]  -->  ${names[0]}, ${names[1]} and 2 others like this`;}
// }
// function likes(names) {
//   if(Array.isArray(names)){
   
//    return names.length > 3 ? names.slice(0,2).join(', ') + ' and ' + (names.length - 2) +' others like this'
//         : names.length === 3 ? names.slice(0,2).join(', ') + ' and ' + names[2] + ' like this'
//         : names.length === 2 ? names.join(' and ') + ' like this'
//         : names.length === 1 ? names[0] + ' likes this' : 'no one likes this'
//   } else {
//     throw 'params must be a array.'
//   }
// }
console.log(likes(["gg","hh","mm","yy","ee","ll"]));
console.log(likes(["gg","hh","mm","yy","ee"]));


function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

// function likes (names) {
//   var templates = [
//     'no one likes this',
//     '{name} likes this',
//     '{name} and {name} like this',
//     '{name}, {name} and {name} like this',
//     '{name}, {name} and {n} others like this'
//   ];
//   var idx = Math.min(names.length, 4);
  
//   return templates[idx].replace(/{name}|{n}/g, function (val) {
//     return val === '{name}' ? names.shift() : names.length;
//   });
// }



// function likes(peopleNames) {
//   var feels = new FeelingsParty('like', 'this');
//   for(var name in peopleNames) feels.addFeeler(new Person(peopleNames[name]));
//   return feels.shareTheseFeelings();
// }

// function Person(name) {
//  this.name = name;
// }

// Person.prototype.getName = function() {
//   return this.name;
// }

// function FeelingsParty(emotion, target) {
//  this.emotionalContext = emotion;
//  this.emotionalSubject = target;
//  this.peopleFeelingThisWay = [];
//  this.numPeopleFeelingThisWay = 0;
// }

// FeelingsParty.prototype.getEmotionalContext = function() {
//  return this.type;
// }

// FeelingsParty.prototype.addFeeler = function(person) {
//     this.numPeopleFeelingThisWay++;
//     this.peopleFeelingThisWay.push(person);
// }

// FeelingsParty.prototype.shareTheseFeelings = function() {
//     this.findTheRightWords();
//     if(this.numPeopleFeelingThisWay == 0) return 'no one ' + this.emotionalContext + ' ' + this.emotionalSubject;
//     if(this.numPeopleFeelingThisWay == 1) return '' + this.peopleFeelingThisWay[0].getName() + ' ' + this.emotionalContext + ' ' + this.emotionalSubject;
//     if(this.numPeopleFeelingThisWay == 2) return '' + this.peopleFeelingThisWay[0].getName() + ' and ' + this.peopleFeelingThisWay[1].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//     if(this.numPeopleFeelingThisWay == 3) return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + this.peopleFeelingThisWay[2].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//     return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + (this.numPeopleFeelingThisWay - 2) + ' others ' + this.emotionalContext + ' ' + this.emotionalSubject;
// }

// FeelingsParty.prototype.findTheRightWords = function() {
//     if(this.numPeopleFeelingThisWay == 0 || this.numPeopleFeelingThisWay == 1) this.emotionalContext += 's';
// }



// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//  because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("").every(function(x){
//       return string.indexOf(x) !== -1;
//   });
// }

// function isPangram(string){
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((x) => string.toLowerCase().includes(x));
// }

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

// function isPangram(string) {
//   return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
// }

// function isPangram(str) {
//   var s = str.toLowerCase();
//   var letters = "zqxjkvbpygfwmucldrhsnioate";
//   for (var i = 0; i < 26; i++)
//       if (s.indexOf(letters.charAt(i)) == -1)
//           return false;
//   return true;
// }

console.log(isPangram("The quick brown fox jumps over the lazy dog"));  //true
console.log(isPangram("The quick brown"));  //false


// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array) {
  var string = array.join("");
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}
console.log(findMissingLetter(["a","b","c","d","f"]));  //e
  

const findMissingLetter1 = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};


// function findMissingLetter(array)
// {
//   let i = array[0].charCodeAt(0);
//   return String.fromCharCode(array.find(el => el.charCodeAt(0) != i++).charCodeAt(0) - 1);
// }


// function findMissingLetter(array) {
//   var codes = array.map(a => a.charCodeAt(0))
//   ,    last = codes.length - 1
//   ,     sum = codes.reduce((a, b) => a + b)
//   ,  expect = (codes[last] + codes[0]) * (codes[last] - codes[0] + 1) / 2;
  
//   return String.fromCharCode(expect - sum);
// }


// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }

// function findMissingLetter(array) {
//   let first = array[0].charCodeAt(0)
//   for (let i = 1; i < array.length; i++) {
//     if (first + i !== array[i].charCodeAt(0)) {
//       return String.fromCharCode(first + i)
//     }
//   }
//   throw new Error("Invalid input")
// }


// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num__) {
             return          num__.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
  
}
console.log(expandedForm(12));  //10 + 2

// function expandedForm(num) {
//   num = String(num);
//   let result = [];
//   for (var i = 0; i < num.length; i++) {
//     if (num[i] == 0) continue;
//     else result.push(num[i] + "0".repeat(num.length -i -1))
//   }
//   return result.join(" + ")
// }

// var expandedForm = (num) => {
//   var arr = num.toString().split('').reverse();
//   var result = [];
//   for(var i = 0; i < arr.length; i++){
//     arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
//   }
//   return result.reverse().join(' + ')
// }

// function expandedForm(num) {
//   if (num < 10) return `${num}`;
//   let over = num % (Math.pow(10, (num.toString().length - 1)));
//   if (!over) return `${num}`;
//   return `${num-over} + ${expandedForm(over)}`;
// }

// function expandedForm(num) {
//    let str = num.toString()
//    let ans = []
//        for ( let i in str) {
//              ans.push(str[i]+'0'.repeat(str.length-1-parseInt(i)))
//        }
//   return ans.filter(v=> parseInt(v)!==0).join(' + ')
// }


console.log(Math.pow(10, 0));  //1
console.log(Math.pow(10, 1));  //10


// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array 
// of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) 
// and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk 
// the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
// It will never give you an empty array (that's not a walk, that's standing still!).


// function isValidWalk(walk) {
//   let ns = 0, ew = 0; 
//   if(walk.length === 10){
//     for (let i of walk) { 
//       if (i == 'n') ns += 1; 
//       if (i == 's') ns -= 1; 
//       if (i == 'e') ew += 1; 
//       if (i == 'w') ew -= 1; 
//     } 
//   }
//   else
//     return false
//     return ns === 0 && ew === 0; 
// }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));  //true
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));  //false
console.log(isValidWalk(['w']));   //false
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));  //false
console.log(isValidWalk(['n','s','e','w']));


function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}

// function isValidWalk(walk) {
//   var res = {n:0, w:0, s:0, e:0};
//   walk.forEach((c) => res[c]++);
//   return walk.length === 10 && res.n == res.s && res.e == res.w;
// }

// function isValidWalk(walk) {
//   function count(c) { return walk.filter(function (v) { return v == c }).length }
//   return walk.length == 10 && count('w') == count('e') && count('n') == count('s')
// }

// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
//   return dt === 10 && dx === 0 && dy === 0
// }


// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


// function generateHashtag (str) {
//   if(str.length ===0 && str.length > 140) return false;
//   var str_ =  str.split(/\s+/); //str.split("");
//   var hhh = [];
//   for(i of str_){
//    hhh.push([i]);
//   }
//   for(let i=2; i<hhh.length; i++){
//     var spl = hhh.split("");
//     return spl;
//   }
//  // return hhh;
// //   str_.unshift('#');
// //    var ss_ = str_.join("");//.replace(/\s/g, '');
// // return ss_;
// }
function generateHashtag(string) {
  if (string.trim() === '') return false;

  const stringWithCamelCase = string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));  // #HelloThereThanksForTryingMyKata


// function generateHashtag (str = "") {
//   var hashtag = `#${str.trim().replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`
//   return !!str && hashtag.length <= 140 && hashtag
// }

// function generateHashtag (str) {
//   return str.length > 140 || str === '' ? false :
//     '#' + str.split(' ').map(capitalize).join('');
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }


// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, 
// and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, 
// which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board) {
	let valid = true;
	const testvaliditiy = (arr) => {
		let set = new Set(arr);
		if (arr.includes(0) || [...set].length !== 9) {
			return false;
		} else {
			return true;
		}
	}
	console.log("row testing ...")
	for (i = 0; i < board.length; i++) {
		if (!valid) break;
		let row = []
		for (j = 0; j < board.length; j++) {
			row.push(board[i][j])
		}
		// console.log(row)
		valid = testvaliditiy(row)
	}

	//column testing
	console.log("Column testing ...")
	for (i = 0; i < board.length; i++) {
		let col = []
		for (j = 0; j < board.length; j++) {
			col.push(board[j][i])
		}
		valid = testvaliditiy(col)
		if (!valid) break;
	}

	//3x3 testing
	console.log("Cube 3x3 testing ...")
	let row = 0;
	let column = 0;
	while (row < 9 && column < 9) {
		let cube = []
		for (i = row; i < row + 3; i++) {
			for (j = column; j < column + 3; j++) {
				cube.push(board[i][j])
			}
		}
		row += 3
		valid = testvaliditiy(cube)
		if (!valid) break;
		if (row == 9 && column != 9) {
			column += 3
			row = 0;
		}
	}
	return valid
}


// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
    // use URL constructor and return hostname
    var url1 = new URL(url).hostname;
    var url2 = url1.split('.');
    //return url2;
    if(url2.length == 2){
      url2.pop();     
   }
    if(url2.length === 3){
      if(url2.includes('www')){
        url2.pop();
       url2.shift(); 
      }
     else{
      url2.pop();
      url2.pop();
     }  
    }
    if(url2.length == 4){
       url2.pop();
       url2.pop();
       url2.shift();         
    }
    return url2 + '';  // we can also use url2 + [];   
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName( "http://www.zombie-bites.com" ));
console.log(domainName( "https://www.cnet.com" ));
console.log(domainName( "https://www.cnet.co.in" ));
console.log(domainName("http://google.co.jp"));
//console.log(domainName("www.xakep.ru"));

//const domainName = url => url.replace(/https?:\/\/(?:www\.)?/, "").split(".")[0];
//const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;


// const isValidUrl = urlString=> {
//   var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
//   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
//   '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
//   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
//   '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
//   '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
// return !!urlPattern.test(urlString);
// }
// console.log(isValidUrl("http://github.com/carbonfive/raygun"));
// console.log(isValidUrl("www.xakep.ru"));



// Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.

// Business Rules:
// A user starts at rank -8 and can progress all the way to 8.
// There is no 0 (zero) rank. The next rank after -1 is 1.
// Users will complete activities. These activities also have ranks.
// Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
// The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
// A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
// Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). 
// The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
// A user cannot progress beyond rank 8.
// The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.
// The progress is scored like so:

// Completing an activity that is ranked the same as that of the user's will be worth 3 points
// Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
// Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
// Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference
//  between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.
// Logic Examples:
// If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
// If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
// If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
// If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 
// and having earned 60 progress towards their next rank
// If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)
// Code Usage Examples:
// var user = new User()
// user.rank // => -8
// user.progress // => 0
// user.incProgress(-7)
// user.progress // => 10
// user.incProgress(-5) // will add 90 progress
// user.progress # => 0 // progress is now zero
// user.rank # => -7 // rank was upgraded to -7


// function User() {
//   this.rank = -8;
//   this.progress = 0;
//   this.HUNDRED = 100;
//   this.HIGHEST = 8;
// }

// User.prototype.incProgress = function(rank) {
//   if (rank == 0 || rank > this.HIGHEST || rank < -this.HIGHEST) throw new RangeError("rank input out of range");
//   if (this.rank == this.HIGHEST) return;

//   var diff = (rank > 0 && this.rank < 0) || (rank < 0 && this.rank > 0) ? Math.abs(this.rank) + Math.abs(rank) : rank - this.rank;
//   if (rank > 0 && this.rank < 0) diff--;
//   if (rank < 0 && this.rank > 0) diff = -diff;
//   if (diff > 0) {
//     this.progress += (rank == 1 && this.rank == -1) ? 10 : (10 * diff * diff);
//   } else {
//     this.progress += diff == 0 ? 3 : 1;
//   }

//   if (this.progress > this.HUNDRED && this.rank < this.HIGHEST) {
//     this.rank += Math.floor(this.progress / this.HUNDRED);
//     if (this.rank == 0) this.rank++;
//     this.progress %= this.HUNDRED;
//   }
//   if (this.rank == this.HIGHEST) this.progress = 0;

//   console.log("current rank = " + this.rank + "; progress = " + this.progress);
//   return diff;
// };



// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


// function pigIt(strr){
//   if(strr.includes('!') || strr.includes('?') || strr.includes('$') || strr.includes('&') || strr.includes('@') || strr.includes('~') || strr.includes('#') || strr.includes('%') || strr.includes('*')){
//     var newOne = strr.split(' ');
//      var strr1 = newOne.pop();
//     var neww= newOne.map(e => e.substr(1) + e[0] + 'ay').join(' ');
//    return neww.concat(' '+ strr1);
  
//    }
//    else if(strr){
//  return strr.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');}
// }

//pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');

console.log(pigIt('Hello world !')); // elloHay orldway !
console.log(pigIt('Pig latin is cool ?')); // igPay atinlay siay oolcay ?
console.log(pigIt('Hello world #'));
console.log(pigIt('Hello world &'));
console.log(pigIt('Hello world *'));
console.log(pigIt('Hello world ~'));
console.log(pigIt('Hello world @'));
console.log(pigIt('Hello world &'));

function pigIt(str){
  return str.replace(/\w+/g, match => match.slice(1) + match.charAt(0) + "ay");
}


// function pigIt(str){
//   return str
//     .split(' ')
//     .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
//     .join(' ')
// }


// function pigIt(strr){
//   return strr.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }


// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }


// function pigIt(str) {
//   var arrayWord = str.split(' ');
//   return arrayWord.map(function(word) {
//     var firstLetter = word.charAt(0);
//     return word.slice(1) + firstLetter + 'ay';
//   }).join(' ');
// }


// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end) {
  start = start.split('.');

  return end.split('.').reduce(function(sum, x, i) {
    return (sum << 8) + Number(x) - Number(start[i])
  }, 0);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); //50
console.log(ipsBetween("10.0.0.0", "10.0.1.0"));  //256
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));  //246


// function ipsBetween(start, end){
//   function val(ip){return ip.split('.').reduce(function(tot,cur,i){return tot+cur*Math.pow(256,3-i)}, 0);}
//   return val(end)-val(start);
// }


// function ipsBetween(start, end){
//   const num = ip => ip.split('.')
//                       .map(x => parseInt(x))
//                       .reduce((acc, e) => acc * 256 + e);  
  
//   return num(end) - num(start);
// }


// function ipToNum(ip) {
//   return ip.split('.').reduce((sum, x)=> sum << 8 | x, 0) >>> 0;
// }
// function ipsBetween(start, end){
//   return ipToNum(end)-ipToNum(start);
// }


// const hex = ip => ip.split('.').map(x => (+x).toString(16).padStart(2,0)).join('');
// const ipsBetween = (ip1, ip2) => parseInt(hex(ip2), 16) - parseInt(hex(ip1), 16);



// const ipsBetween = (start, end) => convertToNum(end) - convertToNum(start)

// const convertToNum = ip => ip.split(".")
//   .map(Number).reduce((a,b) => a*256+b);


// function ipsBetween(start, end){
//   //TODO
//   var startArr = start.split('.');
//   var endArr = end.split('.');
//   var diffIndex = 0;

//   for(var i = 0; i < 4; i++) {
//     if(startArr[i] != endArr[i]){
//        diffIndex = i;
//        break;
//     }
//   }
//   if(diffIndex == 3) {
//     return Number(endArr[3] - startArr[3]);
//   } else if (diffIndex == 2) {
//     return (Number(endArr[2]) - Number(startArr[2])) * (256 - startArr[3]);
//   } else if(diffIndex == 1) {
//     let all = endArr[2] === startArr[2] ? Math.pow(2,16) : 65793;
//     return all;
//   } else {
//     let all = Number(endArr[0]) === 181 ? 16777216 : 67372036;
//     return all;
//   }
// }


// function ipsBetween(start, end){
//   return ipToInt32(end) - ipToInt32(start);
// }
// function ipToInt32(ip) {
//   return parseInt(ip.split('.').map(function(v) {
//     var bin = parseInt(v).toString(2);
//     return new Array(9 - bin.length).join('0') + bin;
//   }).join(''), 2);
// }


// In this kata you have to create all permutations of a non empty input string and remove duplicates, 
// if present. This means, you have to shuffle all letters from the input in all possible orders.

// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


// function divisibleBy60(str_$){
//   var found_$ = true;
//   var spill = str_$.split('');
//   console.log(spill); 
//   var letters_ = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   //console.log(letters_);
//   for(let i = 0; i<letters_.length; i++){
//        found_$ = true;
//        for(let j = 0; j<spill.length; j++){
//           if(!spill.includes(i.toString()[j])){
//               found_$ = false;
//               break;
//           }
//        }
//        if(found_$){
//           console.log(i);
//        }
//   }
// }
console.log(permutations('aabb'));  // [ 'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa' ]


// function permutations(string){
//   var hash = {};
//   var resArr = [];
//   var subroutine = function(testStr, newString){
//     newString = newString || '';
//     if(newString.length === string.length){
//       hash[newString] = true;
//       return;
//     }
//     for(var i = 0; i < testStr.length; i++){
//       var cur = testStr[i];
//       var str = newString + cur;
//       var excision = testStr.substring(0, i) + testStr.substring(i+1);
//       subroutine(excision, str);
//     }
//   }; 
//   subroutine(string);
//   for(var key in hash){
//     resArr.push(key);
//   }
//   return resArr;
// }


function permutations(str) {
  return (str.length <= 1) ? [str] :
          Array.from(new Set(
            str.split('')
               .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
               .reduce((r, x) => r.concat(x), [])
          ));
 }


// const unique = xs => [ ...new Set(xs) ]
// const concat = (a, b) => [ ...a, ...b ] 
// const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]
// const permute = (x, i, xs) => 
// combinations(drop(i)(xs)).map(y => x + y)
// const combinations = s =>
//   s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)
// const permutations = s => unique(combinations(s))


// function permutations(string) {
//   var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
//   if(string.length == 1) return [string];
//   arr.forEach(function(v, i, arr) {
//     if(heads.indexOf(v) == -1) {
//       heads.push(v);
//       tmp.splice(tmp.indexOf(v), 1);
//       permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
//       tmp.push(v);
//     }
//   });
//   return out;
// }


// function permutations(string) {
//   let perms = string.split('').reduce((acc, element) => {
//     let updatedPerms = new Set();
//     acc.forEach((word) => {
//       for(let i = 0; i <= word.length; i++) {
//         updatedPerms.add(word.substring(0, i) + element + word.substring(i));
//       }
//     });
//     return updatedPerms;
//   }, new Set(['']));
  
//   return [...perms];
// }


// function permutations(chs) {
//   return [...new Set(
//       Array.from( heapsPerms((chs+'').split('')),
//       str => str.join('') )
//   )];
// }
// function *heapsPerms(chs, n = chs.length) {
//   if (n <= 1) yield chs.slice();
//   else for (let i = 0; i < n; i++) {
//       yield *heapsPerms(chs, n-1);
//       swap(chs, (n % 2 !== 0) ? 0 : i, n-1);
//   }
// }
// function swap(iterable, i, j) {
//   [iterable[i], iterable[j]] = [iterable[j], iterable[i]];
// }



// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse,
//  where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. 
//  Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally).
//  E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, 
// they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits.



// function getPINs(observed) {

// 	var combos = [];
// 	var neighbors = {
// 		"0": ["8"],
// 		"1": ["2", "4"],
// 		"2": ["1", "3", "5"],
// 		"3": ["2", "6"],
// 		"4": ["1", "5", "7"],
// 		"5": ["2", "4", "6", "8"],
// 		"6": ["3", "5", "9"],
// 		"7": ["4", "8"],
// 		"8": ["5", "7", "9", "0"],
// 		"9": ["6", "8"]
// 	};
// 	var strDigits = observed.toString().split("");
// 	getCombos(strDigits, 0, "");
// 	return combos;
// 	// Depth first combinatorial traversal
// 	function getCombos(digits, idx, curCombo) {
// 		// Get possible candidates
// 		var curDigit = digits[idx];
// 		var candidates = new Set(neighbors[curDigit]);
// 		candidates.add(curDigit);
// 		//console.log(digits, idx, curCombo, candidates); // Pretty cool
// 		candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper);
// 		// (Avoiding anon funcs)
// 		function reachedEnd(candidate) { combos.push(curCombo + candidate); }
// 		function goDeeper(candidate) {
// 			getCombos(digits, idx + 1, curCombo + candidate)
// 		}
// 	}
// }


function getPINs(observed) {
  return observed.split('')
  .map( t => ({
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}


console.log(getPINs('5'));  // [ '2', '4', '5', '6', '8' ]
console.log(getPINs('25')); //  [ [ '1', '2', '3', '5' ], [ '2', '4', '5', '6', '8' ] ]
console.log(getPINs('0'));  // [ '0', '8' ]
// function getPINs(observed) {
//   var adjacent = [
//     /* 0 */ [0, 8],
//     /* 1 */ [1, 2, 4],
//     /* 2 */ [1, 2, 3, 5],
//     /* 3 */ [2, 3, 6],
//     /* 4 */ [1, 4, 5, 7],
//     /* 5 */ [2, 4, 5, 6, 8],
//     /* 6 */ [3, 5, 6, 9],
//     /* 7 */ [4, 7, 8],
//     /* 8 */ [5, 7, 8, 9, 0],
//     /* 9 */ [6, 8, 9]
//   ];
//   return observed
//     .split('')
//     .map(function(d) { return adjacent[d|0]; })
//     .reduce(function(pa, da) {
//       return da.reduce(function(pv, d) {
//         return pv.concat(pa.map(function(p) {
//           return '' + p + d;
//         }));
//       }, []);
//     }, ['']);
// }


// function mixNMatch(add, addTo) {
//   var out = [];
//   add.forEach(function(v, i) {addTo.forEach(function(w, j) {out.push(v + w);});});
//   return out;
// }
// function getPINs(observed) {
//   var map = {1:['1','2','4'], 2:['1','2','3','5'], 3:['2','3','6'], 4:['1','4','5','7'], 5:['2','4','5','6','8'],
//              6:['3','5','6','9'], 7:['4','7','8'], 8:['5','7','8','9','0'], 9:['6','8','9'], 0:['8','0']};
//   return observed.length == 1 ? map[observed[0]] : mixNMatch(map[observed[0]], getPINs(observed.slice(1)));
// }



// var adj = [[0,8],
//            [1,2,4],
//            [2,1,3,5],
//            [3,2,6],
//            [4,1,5,7],
//            [5,2,4,6,8],
//            [6,3,5,9],
//            [7,4,8],
//            [8,0,5,7,9],
//            [9,6,8]];
// var getPINs = observed => adj[observed[0]]
//   .map(x => observed.length == 1 ? [x.toString()] : getPINs(observed.slice(1)).map(y => x + y))
//   .reduce((x,y) => x.concat(y));



//   function getPINs(observed) {
//     var observed = observed.split('');
//     var pins = [];
//     var va = {
//       0: ["0", "8"],
//       1: ["1", "2", "4"],
//       2: ["1", "2", "3", "5"],
//       3: ["2", "3", "6"],
//       4: ["1", "4", "5", "7"],
//       5: ["2", "4", "5", "6", "8"],
//       6: ["3", "5", "6", "9"],
//       7: ["4", "7", "8"],
//       8: ["0", "5", "7", "8", "9"],
//       9: ["6", "8", "9"]
//     };
    
//     for (var i in observed) {
//       var possible = va[observed[i]];
//       pins.push(possible);
//     }

//     return pins.reduce(function(a, b) {
//       var result = [];
//       for (var x in a) {
//         for (var y in b) {
//           result.push(a[x]+b[y]);
//         }
//       }
//       return result;
//     });
//   }