// User input variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
alphaUp = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  passString = generatePassword();
  document.getElementById("password").placeholder = passString;
});

// Start function to generate password
function generatePassword() {
  // Asks for user input for criteria
  enter = parseInt(prompt("How many characters would you like for your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
    alert("Please enter a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose a number between 8 and 128"));

  } else {
    // Continues once user input criteria is validated
    confirmNumber = confirm("Will the password contain numbers?");
    confirmCharacter = confirm("Will the password contain special characters?");
    confirmUppercase = confirm("Will the password contain Uppercase letters?");
    confirmLowercase = confirm("Will the password contain Lowercase letters?");
  };

  // Check for 4 negative options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose criteria! Click 'Generate Password' to begin again.");

  }
  // First if statement that uses user input prompts to determine criteria choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alphaUp);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alphaUp);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alphaUp);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alphaUp);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alphaUp);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alphaUp);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alphaUp);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }
  // Uses space variable to fill uppercase conversion
  else if (confirmUppercase) {
    // choices = space.concat(alphaUp);
    choices = alphaUp;
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables
  // Random selection for all variables: 
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // Joins the password array and converts it to a string 
  var passString = password.join("");
  UserInput(passString);
  return passString;
}

// Write password to the #password input
// Changed function input to use textcontent
function UserInput(passString) {
  document.getElementById("password").textContent = passString;
}


