//skipping loop
for(let x=1; x<=10; x++){
    if(x==5)
    continue;
    console.log(x);  // for continue case console.log should be after if
}

//breakng loop
for(let y=1; y<=10; y++){
    console.log(y);  // for break case console.log should be before if
    if(y==5)
    break;
    //console.log(y);
}