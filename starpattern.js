function chk(lines){
    if(lines%2==0){
        console.log("Number should be odd");           // chk() function checking that number of lines must be odd.
    }else{       
       diamond(lines);      // calling diamond making function      // function Hoisting
    }
}

function diamond(lines){
    let pat="";                 //taking pattern variable
    let space = 0;      //for spacing
    let temp = 0;       // temporary value storage for calculation
    var store1=1;           // temporary value storage for calculation
    var store2=2;                    // temporary value storage for calculation
for(let i=1;i<=lines; i++){                 // first loop for diffrent lines
    pat="";
    if(i<=(lines+1)/2){         // checking if if the line is not ahhead of midd of diamond
     for(let y=1;y<=(lines+1)/2-i; y++){        //giving spaces
     pat += " ";
     }
     for(let z=1;z<=(2*i-1); z++){
        if(z>9){
            let g = z;
            g %=10;             // taking remiander in case number is greater then >9
            pat += g;
        }else
        pat += z;     //concating numbers
     }
     console.log("\t\t\t\t\t\t\t\t\t"+pat);          //     \t for tab space
 
 }else {                            //  ahead of mid of diamond
        while(space <=temp){            //giving spaces

            pat += " ";
            space++;
        }
        space=0;
        temp++;
        if(i==(lines+1)/2+1){
        store1 = 2*i-3}             // storing the max numbers of mid in store1
   
        for(let y=1;y<=store1-store2;y++){
            if(y>9){
                let g = y;
                g %=10;             // taking remiander in case number is greater then >9
                pat += g;
            }else
            pat +=y;
        }
        store2+=2;
        console.log("\t\t\t\t\t\t\t\t\t"+pat);
 }
 }
 }
 
 chk(39);               // passing the number of lines as 39