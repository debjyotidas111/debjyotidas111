function verify(n)
{
	return (n <= 2
				? false
				: (n % 2 == 0
					? true
					: false));
}


console.log((verify(8) ? "YES" : "NO") + "\n");
console.log((verify(0) ? "YES" : "NO") + "\n");
console.log((verify(33) ? "YES" : "NO") + "\n");
