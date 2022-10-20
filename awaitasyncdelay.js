function delay(i){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(i);
        }, i*1000);
    });
}

async function test(){
    console.log("started");
    for(let i=1; i<=10; i++){
        const result = await delay(i);
        console.log(result);
    }
    console.log("ended")
}
test();

const users = ["deb@gmail.com", "gg@gmail.com", "tt@gmail.com", "ss@gmail.com"];

function delay(user){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(`email sent to ${user}`);
        }, 1000);
    });
}

async function sendEmail(){
    for(user of users){
        const confirmation = await delay(user);
        console.log(confirmation);
    }
    console.log("Email sent to everyone")
}
sendEmail();