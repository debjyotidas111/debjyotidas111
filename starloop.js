// function loop(num){
//     for(let row = 1; row<num; row++){
//         let stars = "";
//         for(let column =1; column<=row; column++){
//             stars += "*";
//         }
//         console.log(stars);
//     }
// }
// loop(5);

let n = 5;
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    process.stdout.write(' ')
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}