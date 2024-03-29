

const verifyCardModule = require("./promise1");

function placeOrder(){
    // 1. verify card
    const promise = verifyCardModule.promise1(2022);

    promise.then(
        // when promise is fullfilled
        (msg)=>{
                console.log(msg);
                deductAmount();
            },
        // when promise is rejected
        (err)=>{
            console.log(err);
        }
    
    );
}

function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}

placeOrder()