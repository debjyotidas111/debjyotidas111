let myName = 'Debjyoti Das';
var instaName = myName;

myName = "_deb_the_mastermind";

console.log(instaName); // Debjyoti Das          instaname and myname will have different value
console.log(myName);  // deb_the_mastermind
// output Debjyoti Das
//  for string case it is working as pass by value. primitive data types as number , string, boolean, null, undefined work like this



const obj1 = {
    id:1,
    name: "Debjyoti"
};

const obj2 = obj1;
obj2.name = "Alex";

console.log(obj1);   // alex     both obj1 and obj2 will have the same value
console.log(obj2);   // alex
// output id: 1, name:Alex
//  for object case it is working as pass by reference.     non-primitive data types as function, object, array work like this


let arr1 =[1,2,3];
let arr2 = arr1;

arr2.push[4];

console.log(arr1);  //[1,2,3]
console.log(arr2);  // [1,2,3]