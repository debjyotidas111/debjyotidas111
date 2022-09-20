const obj = {
    "name" : "relevel"
}
Object.seal(obj); // seal allows the value of the attribute to be changed but don't allow the existing property/attribute to be changed or nonexisting property added.
obj.website = "www.relevel.com"; // that's why this part is ignored.......can't add, delete but can update.
obj.name = "unacademy"; // this part is printed
console.log(obj);

//delete obj/tws.name; //to delete object property and value

const tws = {
    "gggg" : "tttt"
}
Object.freeze(tws);  // freeze makes the whole object unchangeable.....can't add, update, delete.
obj.name = "unacademy"; // this part is printed
tws.website = "www.tttt.com"; 
tws.gggg = "unacademy";
console.log(tws); // that's why whole new actions are ignored.

//to check object is sealed or not
console.log(Object.isSealed(obj));
// to check object is frozen or not
console.log(Object.isFrozen(tws));
console.log(Object.isSealed(tws));
console.log(Object.isFrozen(obj));