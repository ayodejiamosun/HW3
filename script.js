// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Array of special characters to be included in password
var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//Alert to begin!
function start () {
  alert("Press Generate Password to begin!");
}

start();

function generatePassword () {
  var lengthCriteria = prompt("How long would you like the password to be?");
  lengthCriteria = parseInt(lengthCriteria);
  while (lengthCriteria < 8 || lengthCriteria > 128) {
    alert("Password must be between 8 and 128 characters.");
    lengthCriteria = prompt("How long would you like the password to be?");
    lengthCriteria = parseInt(lengthCriteria);
    
  }

  var lowercaseCriteria = confirm("Would you like to include lowercase characters?");
  var uppercaseCriteria = confirm("Would you like to include uppercase characters?");
  var numericCriteria = confirm("Would you like to include numeric characters?");
  var specialCriteria = confirm("Would you like to include special characters?");
  
  // function getRandomLowercase () {
  //   var randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
  //   return randomLowercase;
  // }
  // function getRandomUppercase () {
  //   var randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
  //   return randomUppercase;  
  // }
  // function getRandomNumeric () {
  //   var randomNumeric = numeric[Math.floor(Math.random() * numeric.length)];
  //   return randomNumeric;  
  // }
  // function getRandomSpecial () {
  //   var randomSpecial = special[Math.floor(Math.random() * special.length)];
  //   return randomSpecial;  
  // }

  //Where the chosen, random characters will be stored! IN ARRAY FORM!
  var storedChar = [];


  var newArray = [];

  //if lowercaseCriteria == true, then possibly insert lowercase letter
  if(lowercaseCriteria === true) {
    newArray = newArray.concat(lowercase);

  }
  //if uppercaseCriteria == true, then possibly insert uppercase letter
  if(uppercaseCriteria === true) {
    newArray = newArray.concat(uppercase);
  }
  //if numericCriteria == true, then possibly insert numeric letter
  if(numericCriteria === true) {
    newArray = newArray.concat(numeric);
  }
  //if specialCriteria == true, then possibly insert special letter
  if(specialCriteria === true) {
    newArray = newArray.concat(special);
  }
  
  console.log(newArray);

function getRandomChars () {
  for (let i = 0; i < lengthCriteria ; i++) {
    var randomChar = newArray[Math.floor(Math.random() * newArray.length)];
    storedChar.push(randomChar);
    console.log(storedChar);
  }
}

getRandomChars();
var finalPassword = storedChar.toString();
finalPassword = finalPassword.replace(/,/g, "");
console.log(finalPassword);

return finalPassword;


} //<-- this curly bracket is for generatePassword function; don't delete!

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
