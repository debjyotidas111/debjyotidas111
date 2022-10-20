// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//      console.log("The number is not a prime number.");
// }







function isPrime(n){
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

// a=4. [i=2], [a-i]=2,

function find2PNums(a){

    for(let i=2; (i<a-2 || a<5); i++){
        if(isPrime(i) && isPrime(a-i)){
            console.log(i, a-i);
            return;
        }
    }
    console.log("No Prime numbers found");
}

find2PNums(10);
find2PNums(15);
find2PNums(4);
find2PNums(200);
find2PNums(11);
