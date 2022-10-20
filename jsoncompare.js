var isEqual = (p1,p2)=>{
    keys1 = Object.keys(p1);
    keys2 = Object.keys(p2);
    return keys1.length == keys2.length && keys1.every  // Object.keys(p1)
    ((key) => p1[key] == p2[key]);
}
var nn = {
    name:"George",
    age:23,
    country: "India"
};
//console.log(Object.keys(p1));   only to print the keys of an object -  [ 'name', 'age', 'country' ]
// console.log(Object.values(p1));    only to print the values of an object -  [ 'George', 23, 'India' ]
var yy = {
    country: "India",
    name:"George",
    age:23
};
//console.log(Object.keys(p2));   only to print the keys of an object - [ 'country', 'name', 'age' ]
// console.log(Object.values(p2));   //only to print the values of an object -  [ 'India', 'George', 24 ]
console.log(isEqual(nn, yy));

// to compare only the values inside object
var isEqualValue = (p1,p2)=>{
    value1 = Object.values(p1);
    value2 = Object.values(p2);
    return value1.length == value2.length && value1.every  // we can also write it this way - ((value, index) => value ==p2[index]);
    ((value) => p1[value] == p2[value]); 
}
var xx = {
    name:"George",
    age:23,
    country: "India"
};
//console.log(Object.keys(p1));   only to print the keys of an object -  [ 'name', 'age', 'country' ]
// console.log(Object.values(p1));    only to print the values of an object -  [ 'George', 23, 'India' ]
var oo = {
    name:"George",
    country: "India",
    age:23
    
};
//console.log(Object.keys(p2));   only to print the keys of an object - [ 'country', 'name', 'age' ]
// console.log(Object.values(p2));   //only to print the values of an object -  [ 'India', 'George', 24 ]
console.log(isEqual(xx, oo));