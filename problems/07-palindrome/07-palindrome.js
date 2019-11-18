/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
   
    let length = Math.floor(someStr.length / 2);
    for( let i = 0; i < length; i++)
    if( someStr[i] !== someStr[someStr.length - i -1])
    return false;
 return true;
}