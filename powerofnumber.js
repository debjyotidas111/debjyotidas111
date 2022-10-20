function XpowY(x, y)
{
	if(y ===0)
	return 1
	let ans = 1;
	while(y!=0){
		y--
    ans *=x;
	
    }
	return ans
}

console.log(XpowY(3, 3));
console.log(XpowY(10, 3));
console.log(XpowY(3, -3));
console.log(XpowY(-3, 3));






// function XpowY(x, y)
// {
	
// 	let ans = 1;

// 	for(let i = 0; i < y; i++){
//     ans = (ans * x);
//     }
// 	return ans;
    
// }



// console.log(XpowY(3, 3));