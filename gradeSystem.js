function gradeSystem(score){
    if (score>=90){
        console.log(score+" You have got grade A");
    }else if(score>=80 && score<=89){
        console.log(score+" You have got grade B");
    }else if(score>=60 && score<=79){
        console.log(score+" You have got grade C");
    }else if(score>=33 && score<=59){
        console.log(score+" You have got grade D");
    }else{
        console.log(score+" You have Failed");
    }
}
gradeSystem(95);
gradeSystem(85);
gradeSystem(75);
gradeSystem(55);
gradeSystem(30);
