// function arrReduced(arr){
// var n = arr.length;
// var copieedArr = [...arr];
// copieedArr.sort((a, b) => a - b);

// //create a Object(Hash Table)
// let obj = {};

// for(let i=0; i<n; i++){
//  obj[copieedArr[i]]=i;
// }
   
// for(let i=0; i<n; i++){
//     arr[i]=obj[arr[i]];
// }

// console.log(arr); 
// }


arrReduced([1,2,5,10,3,4]);  // [ 0, 1, 4, 5, 2, 3 ]
arrReduced([10, 20, 15, 12, 11, 50]); // [ 0, 4, 3, 2, 1, 5 ]
//with same value twice like 10 here it's not working, one index position is skipped because of the double same value
arrReduced([1,2,5,10,3,10]);  //[ 0, 1, 3, 5, 2, 5 ]
//node reducedarr.js


function arrReduced(arr){
    var n = arr.length;
    var copieedArr = [...arr];
    copieedArr.sort((a, b) => a - b);
    
    //create a Map(Hash Table)
    let map = new Map();
    
    let counter = 0;
    for(let i=0; i<n; i++){
    map.set(copieedArr[i], counter++);
    }
       
    for(let i=0; i<n; i++){
        arr[i]=map.get(arr[i]);
    }
    
    console.log(arr); 
    }



// function convert(arr, n)
// {

//     let temp = [...arr];

//     temp.sort((a, b) => a - b);


//     let umap = new Map();

    
//     let val = 0;
//     for (let i = 0; i < n; i++)
//         umap.set(temp[i], val++);

    
//     for (let i = 0; i < n; i++)
//         arr[i] = umap.get(arr[i]);
// }

// function prletArr(arr, n)
// {
//     for (let i = 0; i < n; i++)
//         console.log(arr[i]);
// }


//     let arr = [10, 20, 15, 12, 11, 50];
//     let n = arr.length;

//     console.log("Given Array is" );
//     prletArr(arr, n);

//     convert(arr , n);

//     console.log("Converted array is");
//     prletArr(arr, n);
    //   0
    //   4
    //   3
    //   2
    //   1
    //   5