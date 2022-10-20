function loop(num){
    let stars=""
    for(row=0; row<=num; row++){
        for (column=0; column<=row-1; column++){
            stars += " ";
        }
         for (gg=0; gg<2*num-1; gg++){
            stars +="*";
         }
         stars += "\n";      
    }
    console.log(stars); 
}


loop(5);