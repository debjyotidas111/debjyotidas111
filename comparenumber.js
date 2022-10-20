function compareTwoNumber(number_1, number_2){
if(number_1>number_2){
 return `${number_1} is the largest number`;

}else if(number_1 === number_2){
    return `${number_1} and ${number_2} are equal`;                                           
 }
else if (number_1<number_2){
    return `${number_2} is the largest number`;
}
else
   return `numbers can't be compared`;
}
console.log(compareTwoNumber(19,5));
console.log(compareTwoNumber(6,1.2));
console.log(compareTwoNumber(50,50));
console.log(compareTwoNumber(0,-3));
console.log(compareTwoNumber(null,null));


    