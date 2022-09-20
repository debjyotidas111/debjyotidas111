function findDesignation(Names){
switch(Names){
    case "Alex":{
        console.log("Alex is a Developer");
        break;
    }
    case "John":{
        console.log("Jhn is an Artist");
        break;
    }
    case "Strek":{
        console.log("Strek is a Singer");
        break;
    }
    case "Smith":{
        console.log("Smith is an Actor");
        break;
    }
    default:{
        console.log("It is unknown");
    }
  }
}

findDesignation("Alex");
findDesignation("Smith");
findDesignation("Strek");
findDesignation("John");






// // {
// if(Alex){
//     console.log("Developer");
//      return Alex;
// }else if(John){
//     console.log("Artist");
//     return John;
// }else if(Strek){
//     console.log("Singer");
//     return Strek;
// }else{
//     console.log("Actor");
//     return Smith;
// }
// }