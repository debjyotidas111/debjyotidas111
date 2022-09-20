function gg(num){
    if (num%15 == 0){
        console.log("Relevel");
    }
    else if (num%5 == 0){
        console.log("Buzz");
    
    }
    else if (num%3 == 0){
        console.log("MindBuzz");
        
        }
        else{
            console.log("all above condition fail");
        }
}
gg(9);
gg(50);
gg(30);
gg(22);