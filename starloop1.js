function loop(num){
    let stars=""
    for(row=1; row<=num; row++){
        for (column=1; column<=num - 1; column++){
            stars += " ";
        }
         for (gg=0; gg<2*row-1; gg++){
            stars +="*";
         }
         stars += "\n";      
    }
    console.log(stars); 
}


loop(5);