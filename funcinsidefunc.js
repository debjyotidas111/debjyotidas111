const add= function(){
    var x= 10;
    var z= 10;
    var u= x+z;
    console.log(u);
    return function add2(){
        var y=20;
        console.log(x+y);
    }
}
add();   //20
console.log(add);  // output function add2
const result = add();  //20
console.log(result); //  output function add2
result();   // output 30
 // add2 is only working when add function is being stored into another variable.



function ff(){
    
 var xx =function (){
        var y=20;
        console.log(y);
    };
    return xx();
    //return 1; //if we dont return anything inside the main function, the output will be undefined.
    // return and console.log works differently.
}
 console.log(ff());
