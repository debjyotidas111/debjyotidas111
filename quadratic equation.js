var a = 1;
var b = 5;
var c = 1;

var result = b * b - 4.0 * a * c;

if (result > 0.0) {
  var r1 = (-b + Math.pow(result, 0.5)) / (2.0 * a);
  var r2 = (-b - Math.pow(result, 0.5)) / (2.0 * a);
  console.log("The roots are " + r1 + " and " + r2);
} else if (result == 0.0) {
  var r1 = -b / (2.0 * a);
  console.log("The root is " + r1);
} else {
  console.log("no real roots.");
}