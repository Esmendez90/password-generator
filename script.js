// Assignment Code
// GIVEN I need a new, secure password
// need a button or link to get a new password
// need to show the password on the page

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;
}

// ************************ function here *********************************
// write a function called generatePassword which will have a series of prompts for user input
function generatePassword() {
  var upperL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerL = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*+";

  var userLength = prompt(
    "How many characters will your password have? Choose between 8 and 128 characters."
  );

  //...if userLength(above) is true, then the code below will execute...
  if (userLength < 8 || userLength > 128) {
    alert("Please input a value between 8 and 128");
    return "";
  }
  var askUpperCase = confirm("do you want uppercase letters?");
  var askLowerCase = confirm("do you want lowercase letters?");
  var askNumber = confirm("do you want numbers?");
  var askSymbol = confirm("do you want symbols?");

  if (
    !askUpperCase &&
    !askLowerCase &&
    !askNumber &&
    !askSymbol
  ) {
    alert("Choose at least one criteria");
    return "";
  }
  
  var randomPwd = "";
  
  if (askUpperCase) {
    randomPwd += upperL;
  }
  if (askLowerCase) {
    randomPwd += lowerL;
  }
  if (askNumber) {
    randomPwd += numbers;
  }

  if (askSymbol) {
    randomPwd += symbols;
  }

  console.log(randomPwd);

  var password = "";
  for (var i = 0; i < userLength; i++) {
    password =
      password + randomPwd[Math.floor(Math.random() * randomPwd.length)];
  }

  return password;

  //...curly bracket below closes grandparent conditional statement...

  
}
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// We have to ask the user for how many characters they want in a password
// we have to check to make sure it is between 8 and 128
// otherwise, we tell user to fix their input.

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// confirm if they want lowercase
// confirm if they want uppercase
// confirm if they want numeric
// confirm if they want special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// we need to show an error if they gave us no characters to choose from

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// from all the characters chosen, choose one randomly and add it to our password X number of times
//

// ************************ function ends here *********************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
