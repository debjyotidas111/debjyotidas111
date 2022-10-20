function loop(num){
    
    for(row=1; row<=num; row++){
        let lines="";
        for (column=0; column<=row; column++){
            lines += " ";
        }
         for (gg=row; gg<=num; gg++){
            lines +=gg +" ";
         }
         console.log(lines);    
    }
     
}


loop(5);