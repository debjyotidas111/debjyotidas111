function fruitcheck(fruits){
    switch(fruits){
        case "banana":{
            console.log("banana is good");
            break;
        }
        case "orange":{
            console.log("I am not fan of orange");
            break;
        }
        case "apple":{
            console.log("apple is good for health");
            break;
        }
        default:{
            console.log("It is unknown");
        }
}
}
fruitcheck("banana");
fruitcheck("orange");
fruitcheck("apple");
fruitcheck("grapes");