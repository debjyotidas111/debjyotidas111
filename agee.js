function checkAge(age){
    if (age>=18){
        console.log("you are eligible to vote");
        return true;
    }
    else{
        console.log("you are not eligible to vote");
        return false;
    }
}
checkAge(19);
checkAge(16);
console.log(checkAge(55));
console.log(checkAge(12));