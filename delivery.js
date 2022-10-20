function deliveryboy(A, B, C) {
    let count = 0;
    for (var i = C; i <= B; i++) {
      if (i == B && count != A) {
        i = 0;
      }
      count++;
      if (count == A) {
        break;
      }
    }
    console.log(i);
  }
  
  deliveryboy(2, 5, 1);
  deliveryboy(8, 5, 2);



  // function solve(A, B, C){
  //   return (C + A - 1) % B;
  //   }
  //   A=8;
  //   B=5;
  //   C=2;
  //   console.log(solve(A,B,C));