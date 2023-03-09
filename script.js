// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // set password to an empty string that can be added upon
  var password = "";
  // set variables for all character types
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  // set empty character set variable
  var characterSet;

  // set the length of password variable to be the nurmerical value given by user
  var passwordLength = prompt(
    "Length of password? (must be between 8 and 128 characters)"
  );

  // sets condition ensuring the user input for password length is between 8 and 128 characters
  if (passwordLength >= 8 && passwordLength <= 128) {
    // by using confirm, response is a boolean value
    var lowercaseConfirm = confirm(
      "Do you want the password to include lowercase characters?\n If yes, select OK"
    );
    var uppercaseConfirm = confirm(
      "Do you want the password to include uppercase characters?\n If yes, select OK"
    );
    var numbersConfirm = confirm(
      "Do you want the password to include numerical characters?\n If yes, select OK"
    );
    var specialcharsConfirm = confirm(
      "Do you want the password to include special characters?\n If yes, select OK"
    );
    // if at least one response has a value of true
    // meaning at least one character type has been selected
    // then the following code will run and generate a password
    if (
      lowercaseConfirm ||
      uppercaseConfirm ||
      numbersConfirm ||
      specialcharsConfirm
    ) {
      // sets character set if all character types are selected
      // concatenates the character type variables based on the types selected
      // to create character type array based on user preferences
      if (
        lowercaseConfirm &&
        uppercaseConfirm &&
        numbersConfirm &&
        specialcharsConfirm
      ) {
        characterSet = lowerCase.concat(upperCase, numbers, specialCharacters);

      // accounts for all variations in which the user selects three character types to include
      } else if (lowercaseConfirm && uppercaseConfirm && numbersConfirm) {
        characterSet = lowerCase.concat(upperCase, numbers);
      } else if (lowercaseConfirm && uppercaseConfirm && specialcharsConfirm) {
        characterSet = lowerCase.concat(upperCase, specialCharacters);
      } else if (lowercaseConfirm && numbersConfirm && specialcharsConfirm) {
        characterSet = lowerCase.concat(numbers, specialCharacters);
      } else if (uppercaseConfirm && numbersConfirm && specialcharsConfirm) {
        characterSet = upperCase.concat(numbers, specialCharacters);

      // accounts for all variations in which the user selects two character types
      } else if (lowercaseConfirm && uppercaseConfirm) {
        characterSet = lowerCase.concat(upperCase);
      } else if (lowercaseConfirm && numbersConfirm) {
        characterSet = lowerCase.concat(numbers);
      } else if (lowercaseConfirm && specialcharsConfirm) {
        characterSet = lowerCase.concat(specialCharacters);
      } else if (uppercaseConfirm && numbersConfirm) {
        characterSet = upperCase.concat(numbers);
      } else if (uppercaseConfirm && specialcharsConfirm) {
        characterSet = upperCase.concat(specialCharacters);
      } else if (numbersConfirm && specialcharsConfirm) {
        characterSet = numbers.concat(specialCharacters);

      // variations if only one character type is selected
      } else if (lowercaseConfirm) {
        characterSet = lowerCase;
      } else if (uppercaseConfirm) {
        characterSet = upperCase;
      } else if (numbersConfirm) {
        characterSet = numbers;
      } else if (specialcharsConfirm) {
        characterSet = specialCharacters;
      }

      // uses the variable 'characterSet'
      // the character set variable used is determined by the user selections, and corresponding conditional statement
      // for loop is iteraterad the to create as many indices as password length
      // value of index is randomised using the function, and is chosen from the character type array
      for (var i = 0; i < passwordLength; i++) {
        password =
          password +
          characterSet[Math.floor(Math.random() * characterSet.length)];
      }

    // else statements to return alerts if user inputs are invalid
    } else {
      alert("Must select at least one character type");
    }
  } else if (isNaN(passwordLength)) {
    alert("Must enter numerical value");
  } else {
    alert("Password must be between 8 and 128 characters");
  }
  // inputs the generated password into the HTML User Interface
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
