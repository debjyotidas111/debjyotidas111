function star(num){
//    let i =1;
//    while(i<=num){
//     return  i=i+1;
//     let j=1;
//     while(j<=num){
      
//         return j=j+1;
//     }
   
 
//    }
    for(let i=1; i<=num;){
        //console.table(i);
        //console.log(count);
        
             for(let j=1; j<=num;){
                "\t",  console.log(i); 
               
               //console.log(count);            
               count = count+1;
               console.log(j);
                j=j+1;
              
             } 
              i=i+1;         
    } 
}
var count =1;
var num =3;
star(3);