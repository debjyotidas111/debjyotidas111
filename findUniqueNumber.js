function finduniquenum(array){
    const result=[];
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length; j++){
            if (i!=j && array[i]==array[j]){
                break;
            }
            if(j==array.length-1){
                result.push(array[i]);
            }
        }
    }
      return result;
    }
    const array =[3,2,1,2,3];
    console.log(finduniquenum(array));
    