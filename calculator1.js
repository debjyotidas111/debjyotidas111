
const operator = ('Enter operator:');

const number1 = ('Enter first number: ');
const number2 = ('Enter second number:');


let result;


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);

number1 = 10;
number2 = 5;
operator = '+';