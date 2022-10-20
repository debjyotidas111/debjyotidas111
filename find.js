const name = [{
    fname:"gg",
    lname:"tt"
},
{
    fname:"aa",
    lname:"tj"
},
{
    fname:"at",
    lname:"ut"
},
{
    fname:"as",
    lname:"ti"
},
{
    fname:"ng",
    lname:"jt"
},
]

const findSimilarFname = name.find((obj)=> obj.fname.startsWith("a"));
console.log(findSimilarFname);
const findSimilarFnames = name.filter((obj)=> obj.fname.startsWith("a"));
console.log(findSimilarFnames);
const findSimilarLname = name.find((obj)=> obj.lname.startsWith("t"));
console.log(findSimilarLname);
const findSimilarLnames = name.filter((obj)=> obj.lname.startsWith("t"));
console.log(findSimilarLnames);
