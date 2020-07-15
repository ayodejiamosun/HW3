// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*";

function generatePassword () {
  var lengthCriteria = prompt("How long would you like the password to be?");
  lengthCriteria = parseInt(lengthCriteria);
  while (lengthCriteria < 8 || lengthCriteria > 128) {
    alert("Password must be between 8 and 128 characters.");
    lengthCriteria = prompt("How long would you like the password to be?");
    lengthCriteria = parseInt(lengthCriteria);
    
  }
  //add validation to these
  var lowercaseCriteria = confirm("Would you like to include lowercase characters?");
  var uppercaseCriteria = confirm("Would you like to include uppercase characters?");
  var numericCriteria = confirm("Would you like to include numeric characters?");
  var specialCriteria = confirm("Would you like to include special characters?");
  
  function getRandomLowercase () {
    var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
    return randomLowercase;
  }
  function getRandomUppercase () {
    var randomUppercase = lowercase[Math.floor(Math.random() * uppercase.length)];
    return randomUppercase;  
  }
  function getRandomNumeric () {
    var randomNumeric = lowercase[Math.floor(Math.random() * numeric.length)];
    return randomNumeric;  
  }
  function getRandomSpecial () {
    var randomSpecial = lowercase[Math.floor(Math.random() * special.length)];
    return randomSpecial;  
  }

  var randomFunctionArray = [];
  var storedChar = "";

  //if lowercaseCriteria == true, then possibly insert lowercase letter
  if(lowercaseCriteria === true) {
    randomFunctionArray.push(getRandomLowercase);
    getRandomFunction();
  }
  //if uppercaseCriteria == true, then possibly insert uppercase letter
  if(uppercaseCriteria === true) {
    randomFunctionArray.push(getRandomUppercase);
  }
  //if numericCriteria == true, then possibly insert uppercase letter
  if(numericCriteria === true) {
    randomFunctionArray.push(getRandomNumeric);
  }
  //if specialCriteria == true, then possibly insert uppercase letter
  if(specialCriteria === true) {
    randomFunctionArray.push(getRandomSpecial);
  }

function getRandomFunction () {
  for (let i = 0; index < lengthCriteria ; i++) {
    var randomFunction = randomFunctionArray[Math.floor(Math.random() * randomFunctionArray.length)];
    storedChar.push(randomFunction);
  }
}

} //for generatePassword function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
