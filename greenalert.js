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