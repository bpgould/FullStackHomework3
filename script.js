// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", writePassword);

// // global variables, needed within scope of multiple functions
// var p1Int = 0;
// var charTypes = [];
// function writePassword() {
//     pForSize();
//     console.log(p1Int);
//     pForCharTypes();
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// //helper functions

// function pForSize(){
//     var p1 = prompt("Please input the desired length of the password (8-128 characters)");
//     p1Int = parseInt(p1);
//     checkInput(p1Int);
// }

// modal

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//global variables
var numQuantInput = 0;
var numLowerInput = 0;
var numUpperInput = 0;
var numNumsInput = 0;
var numSpecialInput = 0;

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    checkInput(); //checkInput and handle errors before closing modal
    
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    checkInput(); //checkInput and handle errors before closing modal

    modal.style.display = "none";
  }
}

//check user inputs and respond accordingly 
function checkInput(){
    //get values, this allows me to avoid individual listeners for now since I am just checking on close
    var field1 = document.getElementById("quantity").value;
    var field2 = document.getElementById("lowercase").value;
    var field3 = document.getElementById("uppercase").value;
    var field4 = document.getElementById("numbers").value;
    var field5 = document.getElementById("specialcharacters").value;
    //check user entered values
    checkQuantInput(field1);
    checkLowerInput(field2);
    checkUpperInput(field3);
    checkNumInput(field4);
    checkSpecialInput(field5); 
}
//For now I have added separate function in case I need to modify these later so that they have different requirement
//This is done largely for program readability/ ease of use
//This more easily allows for custom output messages -- I could put them in a String array, I may re-work this later
function checkQuantInput(input){
    if(input<8){
        alert("Please input a larger value");
    }
    if(input>128){
        alert("The random generator only supports a maximum password size of 128 characters at this time, please enter a smaller value or chain multiple");
    }
}
function checkLowerInput(input){
    if(input<0){
        alert("Please input a larger value");
    }
    if(input>128){
        alert("The random generator only supports a maximum password size of 128 characters at this time, please enter a smaller value or chain multiple");
    }
}
function checkUpperInput(input){
    if(input<0){
        alert("Please input a larger value");
    }
    if(input>128){
        alert("The random generator only supports a maximum password size of 128 characters at this time, please enter a smaller value or chain multiple");
    }
}
function checkNumInput(input){
    if(input<0){
        alert("Please input a larger value");
    }
    if(input>128){
        alert("The random generator only supports a maximum password size of 128 characters at this time, please enter a smaller value or chain multiple");
    }
}
function checkSpecialInput(input){
    if(input<0){
        alert("Please input a larger value");
    }
    if(input>128){
        alert("The random generator only supports a maximum password size of 128 characters at this time, please enter a smaller value or chain multiple");
    }
}