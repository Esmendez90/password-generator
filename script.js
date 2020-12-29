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
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*+";

  // Prompt the user for length of password
  var userLength = prompt(
    "How many characters will your password have? Choose between 8 and 128 characters."
  );

  // We have to check to make sure it is between 8 and 128
  // otherwise, we tell user to fix their input.
  if (userLength < 8 || userLength > 128) {
    alert("Please input a value between 8 and 128");
    return "";
  }

  // WHEN prompted for password criteria
  // THEN the user selects which criteria to include in the password
  // The user chooses uppercase, lowercase, numeric, and/or symbols
  // confirm if they want uppercase
  // confirm if they want lowercase
  // confirm if they want numeric
  // confirm if they want symbols
  var askUpperCase = confirm("do you want uppercase letters?");
  var askLowerCase = confirm("do you want lowercase letters?");
  var askNumber = confirm("do you want numbers?");
  var askSymbol = confirm("do you want symbols?");

  // If no criteria is selected then we tell the user they have to choose at least one
  if (!askUpperCase && !askLowerCase && !askNumber && !askSymbol) {
    alert("Choose at least one criteria");
    return "";
  }

  var randomPassword = "";

  if (askUpperCase) {
    randomPassword += upperCase;
  }
  if (askLowerCase) {
    randomPassword += lowerCase;
  }
  if (askNumber) {
    randomPassword += numbers;
  }

  if (askSymbol) {
    randomPassword += symbols;
  }

  console.log(randomPassword);

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // from all the characters chosen, choose one randomly and add it to our password X number of times
  var password = "";
  for (var i = 0; i < userLength; i++) {
    password =
      password +
      randomPassword[Math.floor(Math.random() * randomPassword.length)];
  }

  return password;
}
// ************************ function ends here *********************************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
