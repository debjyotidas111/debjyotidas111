function checkPalindrome(str) {

    var len = str.length;
  
    for (i = 0; i < len / 2; i++) {
  
  
      if (str.charAt(i) != str.charAt(len - i - 1))
        return false;
    }
    return true;
  }
  
  
  for (j = 1; j <= 50; j++) {
    if (checkPalindrome(j.toString())) {
      console.log(j);
    }
  }
checkPalindrome(50);  