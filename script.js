
// Variable to store the response to the password length. 
var passwordLen ="";

var userCancelled = false;

// Variables to be searched to create the random password. 
var randomChars = "!#$%&()*+-/:;<=>?@[]~_`^";
var randomNums = "0123456789";
var randomCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomLower = "abcdefghijklmnopqrstuvwxyz";



var randomStringToSearch = "";

// This will contain the final string to output. 
var randomString = "";


// Initialize the boolean variables.
var useChars = 0;
var useNums = 0;
var useCaps = 0;
var useLower = 0;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword()  {
  if(passwordLen >= 8 && passwordLen <= 128) {
    // This criteria has been met, so go on to the next prompt. 
    
    } else {
     
       // This criteria hasn't been met, prompt the user for the length of the password. 
      passwordLen = prompt("How many characters do you want in your password, choose between 8 and 128 characters?")

       // The user cancelled so exit. 
       if(!passwordLen) {
        console.log(userCancelled);
        passwordLen = "";
        randomStringToSearch = "";
        return "";   
      }

      if(passwordLen  < 8 || passwordLen > 128) {
        alert("Invalid password length, password must be between 8 and 128 characters!")
        // Clear the variable and call generatePassword again to start over. 
        passwordLen = "";
        generatePassword();

    } else if(!passwordLen) {
        // The cancel button was clicked, reset the passwordLen variable and exit. 
        passwordLen = "";
        randomStringToSearch = "";
        userCancelled = true;
        return "";

    } else {
      useChars = confirm("Press OK to use special characters in your password\nPress Cancel to not use special characters!");
      useNums = confirm("Press OK to use numbers in your password\nPress Cancel to not use numbers!");
      useCaps = confirm("Press OK to use Capital letters in your password\nPress Cancel to not use Caps!");
      useLower = confirm("Press OK to use Lower case letters in your password\nPress Cancel to not use lower case!");

      // Build the random search string. 
     
      if(useChars) {
        randomStringToSearch = randomChars;
      }
      if(useNums) {
        randomStringToSearch = randomStringToSearch  + randomNums;
      }
      if(useCaps) {
        randomStringToSearch = randomStringToSearch  + randomCaps;
      }
      if(useLower) {
        randomStringToSearch = randomStringToSearch  + randomLower;
      }

      console.log(randomStringToSearch)
      searchStringLen = randomStringToSearch.length;

      // loop through the string to generate the password.
      randomString = "" // Make sure this string has been reset for subsequent calls for a password.  
      for (var i = 0; i < passwordLen; i++ ) {
        randomString = randomString + randomStringToSearch[Math.floor(Math.random() * searchStringLen)];
      }

      console.log(randomString.length)
      passwordLen = "";
      return randomString;

    }
  }
}
