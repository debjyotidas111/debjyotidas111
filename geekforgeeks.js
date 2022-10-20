// find index numbers of GFG element in an array

var arr = [
    'GFG', 'Geeks', 'Portal',
    'Computer Science', 'GFG',
    'GFG', 'Geek'
];

// newarr=  arr.reduce(( result , Element, index  ) => { 
//     if(Element === "GFG")
//    result.push(index); 
//     return result; 
// }, [])
// console.log(newarr); // [0,4,5]

newarr=  arr.filter(( Element , index ) => { 
    if(Element === "GFG")
    var gg = index ; 
    return gg;
})
console.log(newarr);