function findTrailingZeros(n)
{

	if(n < 0) 
	return -1;
	

	let count = 0;

	for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
		count += Math.floor(n / i);
     
	return count;
}

	let n = 50;
console.log("Count of trailing 0s in " + 100
		+ "! is " + findTrailingZeros(n));
