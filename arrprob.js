const arr1 = [
    ["name", "id", "age", "weight"],
    ["susan", "3", "20", "120"],
    ["john", "1", "21", "150"],
    ["bob", "2", "23", "90"],
    ["ben", "4", "20", "100"]
];
const arr2 = [
    ["name", "id", "height"],
    ["bob", "2", "50"],
    ["john", "1", "45"],
    ["ben", "4", "43"],
    ["susan", "3", "48"]
];
const arr3 = [
    ["name","id", "parent"],
    ["bob", "2", "yes"],
    ["john", "1", "yes"]
];

function parseArr(arr){
  const [headings, ...data] = arr;
  return data.reduce((acc, data, ind) => {
    //loop over the headings and assign the peops to an object
    const person = {};
    for(const  [index, heading] of headings.entries()) {
        person [ heading] = data [index];
    }
    //otherwise add a new person in
    return [...acc, person];
}, []);
}
const alldData =[
...parseArr(arr1),
...parseArr(arr2),
...parseArr(arr3),
];
// console.table(parseArr(arr1));
// console.table(parseArr(arr2));
// console.table(parseArr(arr3));
//console.log(alldData);

const merged = alldData.reduce((acc, currentperson) => {
    //console.log((`starting ${currentperson}`));

const existingPersonIndex = acc.findIndex(person => 
    person.id=== currentperson.id);

if(existingPersonIndex >= 0){
    acc[existingPersonIndex] = {
        ...acc[existingPersonIndex],...currentperson
        //these are the new fields we are addimng in
    }
    return acc;
}
//otherwise add a new pweson in
return [...acc, currentperson];
},[]);
console.table(merged);


// multiply each number in an array with other numbers but exclude the
//the current index position number
function productOfAllNum(arr){
    let beforeProduct= 1;
    const productOfbeforeNums =[];
    for(let i=0; i<arr.length; i++){
        productOfbeforeNums[i] = beforeProduct;
        beforeProduct *= arr[i];
        
    }  //return beforeProduct;
    let afterProduct =1;
    const productOfAfterNums =[];
    for(let j=arr.length-1; j> -1; j--){
        productOfAfterNums[j] = afterProduct;
        afterProduct *= arr[j];
       
    } //return  afterProduct;
    const products =[];
    for(let k=0; k<arr.length; k++){
        products[k] = productOfbeforeNums[k] * productOfAfterNums[k];
    }
    return products;
}
console.log(productOfAllNum([1,2,3,4]));  //  [ 24, 12, 8, 6 ]  6, 8 12 24
//console.log(productOfAllNum([5,6,7,8]));  //  [ 336, 280, 240, 210 ]
//console.log(productOfAllNum([9,10,11,12]));  //  [ 1320, 1188, 1080, 990 ]




// const array1 = [5,2,3,4];
// var resultproduct = 0;
// var n = array1.length;
// function findProductArr(array1){
    
//     if(resultproduct.length == array1.length){
//         return resultproduct;
//     }
//     for(let i=0; i<=n; i++){      
//         for(let j=n-1; j>=-1; j--){
//             if(array1[i]!=array1[j])
//             resultproduct = array1.reduce((allval, curele) => {
//            return  allval *=curele;
//            //return resultproduct;
//            })
//            return [resultproduct];
//         }
//     }
//     findProductArr(array1.length-1);
    
// }
// console.log(findProductArr(array1));