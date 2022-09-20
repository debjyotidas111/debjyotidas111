const studentIds =  [2,5,7,34,88,5]
console.log(studentIds.map((num)=>num*2));
// map function creating a new array as a result of operation on every element in original array

const studentName = ["debjyoti", "alex","biraj", "kamalika", "kanan", "swadesh"]
console.log(studentName.map((name)=>name.length)); //  const name = (x)=> x.length;
// normal lenghty process to get the similar output.

//  function multiplyBy2(studentIds){
//        const result = [];
//        for(let i=0; i<studentIds.length; i++){
//         result.push(studentIds[i]*2);
//    }
//         console.log(result);
// }
// multiplyBy2(studentIds);

//Filter Function
const numbers = [12,33,54,77,90,54]
//const findEven = (num)=> num%2==0;
//console.log(numbers.filter(findEven));
console.log(numbers.filter((findEven)=>findEven%2==0));


const gg = [12,33,54,77,90,54]
console.log(gg.map((even)=>even%2==0));


const names = ["debjyoti", "alex","biraj", "kamalika", "kanan", "swadesh"]
console.log(names.filter((namee)=>namee.length<=5));

const vv = [
    {"name":"deb", "age":30},
    {"name":"bed", "age":80},
    {"name":"vvf", "age":60},
    {"name":"nfn", "age":40},
    {"name":"mnf", "age":41},
]

console.log(vv.filter((obj)=>obj.age<50));

const fusion = [4, 12, 41, 48 ]
console.log(fusion.reduce((preNum, currNum)=> preNum+currNum));
console.log(fusion.reduce((preNum, currNum)=> preNum+currNum/fusion.length));

