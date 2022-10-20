const verifyCardModule = require("./async_await1");

async function placeOrder(){
    // 1. verify card
   
    try{
        const result = await verifyCardModule.async_await1(2022);
        console.log(result);
        //deductAmount();
    }catch(err){
        console.log(err);
        return;
    }
    deductAmount();
}

function deductAmount(err){
    if(err){
        console.log(err);
    }else{
        console.log("Amount deducted");
    }
}

placeOrder()