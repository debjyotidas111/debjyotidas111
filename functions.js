const add = function(a, b){
    console.log(a+b);
}

function addgg(c, d){
    c(10,20);
    console.log(d);
}
addgg(add, "welcome");