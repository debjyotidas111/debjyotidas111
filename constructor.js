
      // creating function constructor using in built javascript function
      
      var myFunction = new Function("a", "b", "return a+b");
      var x = myFunction(5,2);
      console.log(x);

      // self invoking function
      (function gg(){
        console.log("hello");
      }) ()
       

    // function as objects
    var body = "return Math.PI * rad * rad";
    var circle = new Function("rad", body);
    console.log(circle(5));