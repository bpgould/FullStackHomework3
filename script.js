// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", writePassword);

// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }


// modal


var modal = document.getElementById("myModal");// Get the modal
var btn = document.getElementById("myBtn");// Get the button that opens the modal
var checkBtn = document.getElementById("checkBtn");
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal

//global variables
var numQuantInput = 0;
var numLowerInput = 0;
var numUpperInput = 0;
var numNumsInput = 0;
var numSpecialInput = 0;

//When the user clicks the button, open the modal 
btn.onclick = function(){
  modal.style.display = "block";
}

//When the user clicks the button, check the input values
checkBtn.onclick = function(){
    checkInput(); //checkInput and handle errors before closing modal
}

//When the user clicks on <span> (x), close the modal
span.onclick = function(){
    modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
  if (event.target == modal) {
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
    var error = document.getElementById("error");
    if(input<8){
        error.textContent = "Please enter a larger number of 'Total Length'" 
        error.style.color = "red" 
    }
    if(input>128){
        error.textContent = "Please enter a smaller number of 'Total Length'" 
        error.style.color = "red" 
    }
}
function checkLowerInput(input){
    var error = document.getElementById("error");
    if(input<0){
        error.textContent = "Please enter a larger number of 'Lowercase'" 
        error.style.color = "red"
    }
    if(input>128){
        error.textContent = "Please enter a smaller number of 'Lowercase'" 
        error.style.color = "red"
    }
}
function checkUpperInput(input){
    var error = document.getElementById("error");
    if(input<0){
        error.textContent = "Please enter a larger number of 'Uppercase'" 
        error.style.color = "red"    
    }
    if(input>128){
        error.textContent = "Please enter a smaller number of 'Uppercase'" 
        error.style.color = "red"
    }
}
function checkNumInput(input){
    var error = document.getElementById("error");
    if(input<0){
        error.textContent = "Please enter a larger number of 'Numbers'" 
        error.style.color = "red" 
    }
    if(input>128){
        error.textContent = "Please enter a smaller number of 'Numbers'" 
        error.style.color = "red"
    }
}
function checkSpecialInput(input){
    var error = document.getElementById("error");
    if(input<0){
        error.textContent = "Please enter a larger number of 'Special Characters'" 
        error.style.color = "red" 
    }
    if(input>128){
        error.textContent = "Please enter a smaller number of 'Special Characters'" 
        error.style.color = "red" 
    }
}
