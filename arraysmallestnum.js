function smallestArrayNum(array){
    var smallNum = array[0];
    var secondsmallNum = array[1];
    for(let i=0; i<array.length; i++){
         if(array[i]<smallNum){         
            smallNum = array[i];
            
         }if(array[i]>smallNum && array[i]<secondsmallNum){
                secondsmallNum = array[i];
         }
    }
    console.log(smallNum);
    console.log(secondsmallNum);

}
smallestArrayNum([12,45,65,6]);
