function checkPrimePalindrome(num) {
    let rev = 0, x = 0, original = num;
    while (num > 0) {
        x = num % 10;
        rev = (rev * 10) + x;
        num = parseInt(num / 10);
    }
    if (rev == original) {
        console.log(original);
    }
}
for (let i = 1; i < 50; i++) {
    // program for prime
    let count = 0, temp = 0;
    for (let k = 2; k <= (i / 2); k++) {
        if (i % k == 0) {
            count += 1;
            break;
        }
    }
    // checking palandrome only when num is confirmed prime .
    if (count == 0 && i !== 1) {
        checkPrimePalindrome(i);
    }
}

checkPrimePalindrome(50);