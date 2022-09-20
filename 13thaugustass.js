array = [22,52,99,44,77]
var method = {
    "firstElement": array[0]*array[1],
    "lastElement": array[3]*array[4]
}
array.splice(3,2,method.lastElement);
array.splice(0,2,method.firstElement);
console.log(array);