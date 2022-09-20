const roll_numbers = [3, 5, 1, 6, 2, 30, 0];

console.log(roll_numbers.sort(function(a, b){
    return a-b; // use b-a to print high to low
}));