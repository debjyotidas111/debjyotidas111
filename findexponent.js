// Write a JavaScript program to compute the exponent of a number. Note : The exponent of a
// number says how many
// times the base number is used as a factor.
// 82= 8 x 8 = 64. Here 8 is the base and 2 is the exponent.


function exponent(a, b) {
    if (b === 0) {
      return 1;
    } else {
      return a * exponent(a, b - 1);
    }
  };
  var base = 8;
  var power = 2;
  document.write(exponent(base,power));
  