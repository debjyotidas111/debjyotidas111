let a = {};
let b = a;
let c= {};

console.log(a ==c);
console.log( 'a +b' + a==b);
console.log( a==a);

// two objects in js are not equal that is why result is coming -1 as it's non-existent
let arrName = [
    {name : "bb",
    pass: "cc",},
    {name: "ss",
     pass: "dd", 
}
]
console.log(
    arrName.indexOf(
        {
            name: "ss",
            pass: "dd",
        }
    )
);