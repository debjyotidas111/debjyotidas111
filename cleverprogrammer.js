var sentence = 'hey I am Debjyoti'
console.log(sentence.length);   // 17
function letterCount(sentence){
for(letter in sentence){  //16
// console.log(sentence[letter]); // hey I am Debjyoti
// console.log(letter); // 0-16
// to make it 17 the actual length
//console.log(Number(letter) +1);  0-17
    var result = Number(letter) +1;
}
// to make it look good, we can write it two ways as shown below
return {result : result};   // {result};           // output { result: 17 }
}
//letterCount(sentence);
console.log(letterCount(sentence));

//['❤️','💖','🫦','👣','🎈','🧡','💛','💚','💙','💜','🖤','🤍','💔','❤️‍🔥','💗','💝','💟','💌']
var array__= ['f','r','s','p'];
console.log(array__.length); //4
function arrCount(array__){
    for(var arr of array__){
        console.log(arr);  // 5,2,4,8,1,2,3  //frsp
        //console.log(array__[arr]);  // undefined
    }
    //return arr;  // only print last element here p and 3
}
arrCount(array__);
//console.log(arrCount(array__));

function arrCount1(array__){
    for(var arr in array__){
        console.log(arr); // 0123
        // to make it 4 the actual length
       // console.log(Number(arr) +1);  //1234
        //console.log(array__[arr]);  // //frsp
    }
}
arrCount1(array__);

var res =0;
var array$= [1,2,3,4,5]
function sum(array$){
for(ar of array$){
    res += ar;
//console.log(ar + ar);
}
return {res};
}
console.log(sum(array$));  //  { res: 15 }

function checkBigger(array$){
    let value = array$[0];
    for(ar of array$){
        if(ar > value) value =ar;   //  if(ar < value) value =ar;  to find smallest number is an array  { value: 1 }
    }
    return {value};
    }
    console.log(checkBigger(array$));  //5


    //  checking letter frequency
    var sen = 'ha ha';
    //var sen = [5,2,5,5];
    function letterFrequency(sen){
        var obj = {};
        for(letter of sen){
            if(letter in obj){
                obj[letter]++;   // obj[letter] += 1;
            }else{
                obj[letter] = 1;
            }
        }
        return obj;
    }
    console.log(letterFrequency(sen));  // { h: 2, a: 2, ' ': 1 }  // { '2': 1, '5': 3 }


    //  checking word frequency
    var sen1 = 'ha, ha';
    //var sen = [5,2,5,5];
    function wordFrequency(sen1){
        var newOne = sen1.split(', '); // to make it work for both , and space 
        return letterFrequency(newOne);  /// we are calling the previouly made same function here
        // var obj = {};
        // for(letter of newOne){
        //     if(letter in obj){
        //         obj[letter]++;   // obj[letter] += 1;
        //     }else{
        //         obj[letter] = 1;
        //     }
        // }
        // return obj;
    }
    console.log(wordFrequency(sen1));  // { ha: 2 }


    var actors =[
        {name : 'deb', networth : 50000},
        {name : 'deb1', networth : 10000},
        {name : 'deb2', networth : 40000},
        {name : 'deb3', networth : 60000},
    ]

    let output = actors.filter(actor => actor.networth >=40000);  //this is also working in one line //.map(actor => actor.name).join(', '); //output    // deb, deb2, deb3 
    console.log(output);
    // [
    //     { name: 'deb', networth: 50000 },
    //     { name: 'deb2', networth: 40000 },
    //     { name: 'deb3', networth: 60000 }
    //   ]
//     console.table(output);
// ┌─────────┬────────┬──────────┐
// │ (index) │  name  │ networth │
// ├─────────┼────────┼──────────┤
// │    0    │ 'deb'  │  50000   │
// │    1    │ 'deb2' │  40000   │
// │    2    │ 'deb3' │  60000   │
// └─────────┴────────┴──────────┘

    let names= output.map(actor => actor.name).join(', ');
    console.log(names);  // deb, deb2, deb3

   let totalNet = actors.reduce((pre,cur) =>
    pre + cur.networth,0)
   console.log(totalNet);   // 160000
   //reduce method takes two arguments__ callback function and and an argument after ,
   //if we write only single line of code after => then we don't have to return and put ; at the end and no use of  {}
   // put argument at the end is must when summing up objects


   //higher order function
   //when a function takes another function as an argument 


   let fruits = ['apple', 'banana', 'grape', 'coconut'] //['🍌','🍉','🍎','🍓','🍇']
   function randomFruit(fruits){
    let randomFruitPicker = Math.floor(Math.random() * fruits.length);
    return fruits[randomFruitPicker];
   }
   console.log(randomFruit(fruits));


   console.log("one"<8);  //false // comparing with number shows false
   console.log("one"<='two'); //true  // counting the string length to decide true or false
   //  If both values are undefined and both are null, they are Equal
   console.log(null === null);  // true
   console.log(undefined === undefined);  //true
   var aa =4;
   console.log(aa=+5); 
   console.log(typeof(null)); // object
   console.log(typeof(undefined));  //undefined
   console.log(typeof(aa));  //number 
   console.log(typeof BigInt);  //function
   console.log(typeof Boolean);   //function
//   node cleverprogrammer.js

