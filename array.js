var array = ["ball", "grey", "teeth", "egg", "sun"];
var gg = array[0];
console.log(gg);
console.log(array);
array.pop();
console.log(array);
array.splice(1,2 );    //   array.splice(1 );  // this will only print index 1. inside''
console.log(array);
array.splice(1,array.length);
console.log(array);
array[0] = "football";
console.log(array);
array.push("cricket");
console.log(array);
array.splice(1, 0, "Tennis");
console.log(array);

var flower = [["sunflower", "lily"], ["marigold", "tulip"], ["ixora", "hibiscus"],[["toxic", "poisonous"]]];
console.log(flower[0][1]);
console.log(flower[1][0]);
console.log(flower[2][1]);
console.log(flower[0][0]);
console.log(flower[1]);
console.log(flower[3][0][1]);