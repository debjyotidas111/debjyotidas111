var array1 = [1,2,3,4,5];
var array2 = [3,4,5,6,7];

// const intersection = array1.filter((curElement) => {
//  return array2.includes(curElement);
// }
// )
//  console.log(intersection);

 const union = [...new Set([...array1,...array2])];
 console.log(union);


 var array3 = ["a","b","c","d"];
 var array4 = ["c","d","e","f"];

 const union1 = [...new Set([...array3,...array4])];
 console.log(union1);