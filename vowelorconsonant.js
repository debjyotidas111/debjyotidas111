const chalk = require("chalk");

const findVowelOrNot = ()=>{
   let char = "A";
   char = char.toLocaleLowerCase();
   if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    console.log(chalk.green.bold("this is vowel"));
   }else{
    console.log(chalk.red.bold("this is consonent"));
   }
};

findVowelOrNot();
findVowelOrNot();