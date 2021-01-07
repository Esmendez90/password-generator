// GIVEN I need a new, secure password
// need a button or link to get a new password
// need to show the password on the page

// Variable generateBtn will find (in the html) the element with an id of 'generate' 
var generateBtn = document.querySelector("#generate");
// When the user clicks on the element with an id of 'generate' it will execute the function called writePassword
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  // After selecting the desired criteria for my password, 
  // the password is written to the page in the area with an id of 'password'.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// ************************ function here *********************************
// Write a function called generatePassword which will have a series of prompts for user input
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
  // otherwise, we tell user to input a value greater than or equal to 8, and less than or equal to 128.
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

  // If no criteria is selected then we tell the user they have to choose at least one criteria
  if (!askUpperCase && !askLowerCase && !askNumber && !askSymbol) {
    alert("Choose at least one criteria");
    return "";
  }

  var randomPassword = "";

  // Criteria chosen by the user will be stored into the variable called randomPassword
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
  // AND all the characters chosen, random characters will be added to our password X number of times,
  // THEN a random password, composed of the characters the user selected, will be generated.
  var password = "";
  for (var i = 0; i < userLength; i++) {
    password =
      password +
      randomPassword[Math.floor(Math.random() * randomPassword.length)];
  }

  return password;
}
// ************************ function ends here *********************************

