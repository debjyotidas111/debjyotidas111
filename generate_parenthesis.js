// generate parenthesis
let result1 =[];
let num1 =3;
let str1 = "";

function generateParenthesis(str1, left , right){
    if(str1.length==num1*2){
        result1.push(str1);
        return;
    }
    if(left!=num1){
        generateParenthesis(str1 + "(", left+1, right);
    }
    if(right<left){
        generateParenthesis(str1 + ")", left, right+1);
    }

}
generateParenthesis(str1, 0,0);
console.log(result1);