var countOfObjects = 0;

class FunctionApp{
    // whenever function is created, constructor is invoked.
    constructor(){
        countOfObjects++;
    }

    countObjects(){
        console.log("Count of Objects = "+countOfObjects);
    }
    doLogic2(){
        console.log("performing logic 2");
    }
    doLogic3(){
        console.log("performing logic 3");
        console.log(this);   // for example purpose of this.
        //calling another method using same object.
        this.doLogic2();
    }
}
const obj1 = new FunctionApp();
const obj2 = new FunctionApp();
const obj3 = new FunctionApp();
obj3.countObjects(); // we can use obj1, obj2, obj3 to check count of objects
obj1.doLogic3();