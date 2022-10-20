

function Add(x1, y1){
    var x1 = prompt("Enter a Value","0");
    var y1 = prompt("Enter a Value", "0");
     var nn= Number(x1);
     var nm= Number(y1);
  document.write(nn+nm);
}
function Substract(x11, y11){
    var x11 = prompt("Enter a Value","0");
    var y11 = prompt("Enter a Value", "0");
  document.write(x11-y11);
}
function Multiply(x,y){
 var x = prompt("Enter a Value","0");
 var y = prompt("Enter a Value", "0");
  document.write(x*y);
}
function Divide(x10, y10){
    var x10 = prompt("Enter a Value","0");
    var y10 = prompt("Enter a Value", "0");
  document.write(x10/y10);
}
function Sqrt(num, precision = 0){
 var num = prompt("Enter a Value","0");
    if (num <= 0) {
        return 0;
     }
     let res = 1;
     const deviation = 1 / (10 ** precision);
     while (Math.abs(num - (res ** 2)) > deviation) {
        res -= ((res ** 2) - num) / (2 * res);
     }
     document.write(( Math.round(res * (10 ** precision)) / (10 ** precision))); 
 }
function power(x101,y101){
      var x101 = prompt("Enter a Value","0");
    var y101 = prompt("Enter a Value", "0");
  document.write(x101**y101);
}