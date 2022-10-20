function uniqueArr(arr){
    var n = arr.length;
    var incCounter =0;
    var obj ={};
    for(let i=0; i<n; i++){
     if(obj.hasOwnProperty(arr[i])){
        obj[arr[i]]+=1;
     }else{
        obj[arr[i]]=1;
     }
    }
    let max = Math.max(...arr)+n;
    let buffer =[];

    for(let i=0; i<max; i++){
     if(obj.hasOwnProperty(i) && obj[i]>1){
        buffer.push(i);
     }else if(buffer.length>0 && !obj.hasOwnProperty(i)){
        incCounter+= i-buffer.shift();
     }
    }
    console.log(incCounter);
}

uniqueArr([1,0,3,1,2,3]); //5
uniqueArr([5,2,5,1,0]); //1