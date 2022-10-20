class environmentalist{  // prototype
    // properties/ attributes
    constructor(name,loaction){
      this.name = name;
      this.loaction = loaction;
    }
    // actions, methods, functions
    surveyarea(){
        console.log("Area Surveyed by " + this.name);
    }
    showAlert(){
        console.log("Plant more trees in " + this.loaction);
    }
    plantTress(){
        console.log("10 trees planted");
    }
}
const Debjyoti = new environmentalist("Debjyoti", "Kolkata");
// how to call actions or object.
Debjyoti.surveyarea();
Debjyoti.showAlert();
Debjyoti.plantTress();
// new keyword is used to create new objects from a prototype
// you can create infinite number of objects from a prototype
console.log(Debjyoti);
console.log(Debjyoti instanceof environmentalist);
const debjyotijson = JSON.stringify(Debjyoti); // to convert normal object to json string to transfer data from client to server or server to client
console.log(debjyotijson);
console.log(Object.keys(debjyotijson));  // when it converts to json string , it cannot show the actual key but instead of that the index positions
// [
//     '0',  '1',  '2',  '3',  '4',  '5',
//     '6',  '7',  '8',  '9',  '10', '11',
//     '12', '13', '14', '15', '16', '17',
//     '18', '19', '20', '21', '22', '23',
//     '24', '25', '26', '27', '28', '29',
//     '30', '31', '32', '33', '34', '35',
//     '36', '37', '38', '39'
//   ]
console.log(Object.values(debjyotijson)); 
//     [
//    '{', '"', 'n', 'a', 'm', 'e', '"',
//     ':', '"', 'D', 'e', 'b', 'j', 'y',
//     'o', 't', 'i', '"', ',', '"', 'l',
//     'o', 'a', 'c', 't', 'i', 'o', 'n',
//     '"', ':', '"', 'K', 'o', 'l', 'k',
//     'a', 't', 'a', '"', '}'
//   ]
console.log(typeof(debjyotijson));
console.log(typeof(Debjyoti));
console.log(debjyotijson instanceof environmentalist);
const debjyotiObject = JSON.parse(debjyotijson); // to convert json string to normal object 
console.log(debjyotiObject);
console.log(debjyotiObject instanceof environmentalist);
console.log(Object.keys(debjyotiObject));
console.log(Object.values(debjyotiObject));