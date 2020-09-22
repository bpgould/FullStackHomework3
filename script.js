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
// function checkInput(input){
//     if(input<8){
//         alert("Please input a larger value");
//         pForSize();
//     }
//     if(input>128){
//         alert("The random generator only supports a maximum password sixze of 128 characters at this time, please enter a smaller value or chain multiple");
//         pForSize();
//     }
// }
// function pForSize(){
//     var p1 = prompt("Please input the desired length of the password (8-128 characters)");
//     p1Int = parseInt(p1);
//     checkInput(p1Int);
// }
// function pForCharTypes(){
//     var p1 = alert("Click 'OK' to select your preferred character types");
//     if(varp1){
        
//     }
// }
// modal stuff
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}