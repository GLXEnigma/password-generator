//This is where my functions are
var generateBtn = document.querySelector("#generate");

function getLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function getSymbol(){
  const symbols = "~!@#$%^&*()_+-=`{}|:',./"
  return symbols[Math.floor(Math.random() * symbols.length)];
}



//Hit the button to open up prompts and confirm pages
function generatePassword() {
  var length = prompt('How long do you want your password to be?');
  var numLength = parseInt(length);
  if(numLength < 8 || numLength > 128) {
    alert('password must stay between 8 and 128 digits');
    return null;
  }
  var userAskedForUppercaseLetters = confirm("Do you want uppercase letters included in password?");
  var userAskedForLowercaseLetters = confirm("Do you want lowercase letters included in password?");
  var userAskedForNumbers = confirm("Do you want numbers included in password?");
  var userAskedForSymbols = confirm("Do you want symbols included in password?");
  var password = getFullPassword(numLength, userAskedForUppercaseLetters, userAskedForLowercaseLetters,userAskedForNumbers, userAskedForSymbols);
  return password;
}

//combining the functions/variables to get a full password
function getFullPassword(length, userAskedForUppercaseLetters, userAskedForLowercaseLetters, userAskedForNumbers, userAskedForSymbols) {
  var password = '';
  i = length;
  while (i > 0) {
    if (userAskedForLowercaseLetters === true) {
      if (i !== 0) {
        password = password + getLower();
        i--;
      }
    }

    if (userAskedForUppercaseLetters === true) {
      if (i !== 0) {
        password = password + getUpper();
        i--;
      }
    }

    if (userAskedForNumbers === true) {
      if (i !== 0) {
        password = password + getNumber();
        i--;
      }
    }
    
    if(userAskedForSymbols === true) {
      if (i !== 0) {
      password = password + getSymbol();
      i--;
    }

    }
  }    
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
