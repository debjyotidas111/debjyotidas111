var str = 'I am alex and i am a web developer. alex is unique.'

//regExp without case sensitivity
var regExpIns = /alex/i;
console.log(str.search(regExpIns)); //5

//string that is not present in search string
console.log(str.search("biraj"));  //-1

//method comparison
//exec()
console.log(/alex/.exec(str));  // [
//     'alex',
//     index: 5,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ]
console.log(/alex/i.exec(str)); 
// [
//     'alex',
//     index: 5,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ]

console.log('g');

//match()
console.log(str.match('Alex')); // null
console.log(str.match('alex'));
// [
//     'alex',
//     index: 5,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ]
console.log(str.match(/Alex/i));
// [
//     'alex',
//     index: 5,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ]
console.log(str.match(/Alex/gi));  // [ 'alex', 'alex' ]

 console.log(...str.matchAll('alex'));
//  [
//     'alex',
//     index: 5,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ] [
//     'alex',
//     index: 36,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ]
 //console.log(...str.matchAll(/alex/i));  not working
 console.log(...str.matchAll(/alex/gi));
//  [
//     'alex',
//     index: 5,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ] [
//     'alex',
//     index: 36,
//     input: 'I am alex and i am a web developer. alex is unique.',
//     groups: undefined
//   ]

//serach
console.log(str.search("Alex")); //-1
console.log(str.search("alex"));  //5
console.log(str.search(/alex/));  //5
console.log(str.search(/Alex/));  //-1
console.log(str.search(/Alex/i)); //5
console.log(str.search(/Alex/gi)); //5
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();