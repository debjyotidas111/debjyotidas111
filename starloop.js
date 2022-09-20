function loop(num){
    for(let row = 1; row<num; row++){
        let stars = "";
        for(let column =1; column<=row; column++){
            stars += "*";
        }
        console.log(stars);
    }
}
loop(5);