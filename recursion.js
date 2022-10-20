function countdown(n){
    for( let i=n; i>0; i--){
     console.log(i);
    }
}
  countdown(3);
// using recusion to make countdown

function recusiveCountdown(n){
    if(n==0){
     return;
    }
    console.log(n);
    recusiveCountdown(n-1);
}

recusiveCountdown(5);

function calculateTotal(n){
 let total = 0;
    for(let i=0; i<=n; i++){
      total+=i;
 }
 return total;
}
console.log(calculateTotal(5));

// calculating total using recusrion

function recursionCalculation(n, total=0){
    if(n===0)
    return total;
    
   return recursionCalculation(n-1, total+=n);
}
console.log(recursionCalculation(4));

const teamDeatils= {
      name: "Debjyoti",
      team: [
        {
            name: " Alex",
            team: [
                {
                    name: "Biraj",
                    team: [],
                }
            ]
        },
        {
            name: "Swadesh",
            team: [],
        }
      ]
}
function getTeamDetails(t){
    //base case
    
    if(t.team.length ===0)
    return;

    t.team.forEach(tt => {
        console.log(tt.name);
        getTeamDetails(tt);
    })
}
getTeamDetails(teamDeatils);

function findIfSorted(array, i){
    // base condition  
    if(i==array.length-1){
        return true;
    }
    if(array[i]>array[i+1]){
        return false;
    }
    // how to reach towards base condition
    return findIfSorted(array, i+1)
}
const array = [1,2,9,4,5];

console.log(findIfSorted( array, 0));



function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
//const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome("oyo");

console.log(value);

// using recursion to check string palindrome

function chkpalindrome (str, i, j){
    // TO CHECK IF WE R IN CENTRE OR NOT
    // base condition 
    if(i==j || i>j){
        return true;
    
    }
    // to check if values are not same
    if(str[i]!=str[j]){
        return false;
    }
      return chkpalindrome(str, i+1, j-1);
}
const str = "oyo";
console.log(chkpalindrome(str, 0, str.length-1));

// print increasing number using recursion

function printIncreasingnumber(n){
    if(n==0){
        return;
    }
    printIncreasingnumber(n-1);
    console.log(n);
}
printIncreasingnumber(5);

// find fibonacci using recursion

function findFibonacci(n){
    if(n==0 || n==1){
        return n;
    }
    return findFibonacci(n-1)+ findFibonacci(n-2);
}
console.log(findFibonacci(3));

// find length of string using recusion
function findStringLength(str){
    if(str==""){
        return 0;
    }
    let result = findStringLength(str.substring(1));
    return result+1;
}
console.log(findStringLength("Debjyoti"));

// we have to reach zero from a value by subtracting its given number from one of its number.
// exam 27> 27-7=20, 20-2>18,  18-8>10, 10-1>9, 9-9>0;
var step =0;
function reahZero(num){
    if(num==0){
        console.log(step);
        return;
    }
     step= step+1;
    let array = num.toString().split('').map(i=> Number(i));
    let max = Math.max(...array);
    reahZero(num-max);   
}
reahZero("27"); // 5 steps

// we have to return total number of steps to reach 1
// step 1> n=n-1, step 2> (n%2==0)  step 4> (n%3==0)
var count =0;
function reach1(num){
    if(num==1){
        console.log(count);
        return;
    }
    count = count+1;
    num = num-1;
    if(num%2==0){
        num = num/2;      
    }
    if(num%3==0){
        num = num/3;       
    } 
    //return num;
    reach1(num); 
}
reach1(20);
//console.log(count);

// we have to print possible elements combination of an array that matched with given sum.

/* Returns true if the there is a subarray
of arr[] with sum equal to 'sum' otherwise
returns false. Also, prints the result */
function subArraySum(arr, n, sum)
{
    let currentSum=0;
 
    // Pick a starting point
    for (let i = 0; i < n; i++) {
        currentSum = arr[i];
 
        // try all subarrays starting with 'i'
        for (let j = i + 1; j <= n; j++) {
            if (currentSum == sum) {
                console.log("Sum found between indexes "+i+" and "+(j - 1));
                return;
            }
            if (currentSum > sum || j == n)
                break;
            currentSum = currentSum + arr[j];
        }
    }
 
    console.log("No subarray found");
    return;
}
 
// Driver Code
 
let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
subArraySum(arr, n, sum);


function findCombination(arr, sum){
if(!sum){

}
    var curSum =0;

}
findCombination([1,2,1], 2);

// generate parenthesis
let result1 =[];
let num1 =2;
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
console.log(result1);  //  Sum found between indexes 1 and 4
// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]  for 3
//  [ '(())', '()()' ] for 2