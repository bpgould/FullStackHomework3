// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var p1 = prompt("Please input the desired length of the password (8-128 characters)");
    var p1Int = parseInt(p1);
    checkInput(p1Int);


    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//helper functions
function checkInput(input){
    if(input>7&&input<128){
        return true;
    }
    else{
        return false;
    }
}