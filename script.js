var modal = document.getElementById("myModal");// Get the modal
var btn = document.getElementById("myBtn");// Get the button that opens the modal
var checkBtn = document.getElementById("checkBtn");//Get the checkValues button
var postBtm = document.getElementById("postBtn");//Get the button for posting password to main page
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal

//global variables needed from user then passed to generator
var numQuantInput = 0;
var numLowerInput = 0;
var numUpperInput = 0;
var numNumsInput = 0;
var numSpecialInput = 0;

var errorList = [];

//When the user clicks the button, open the modal 
btn.onclick = function(){
    modal.style.display = "block";
}

//When the user clicks the button, check the input values
checkBtn.onclick = function(){
    checkInput(); //checkInput and handle errors before closing modal
}

//When the user clicks this button, it checks that there are no errors then prints password to the main page
postBtn.onclick = function(){
    var x=0;
    var error = document.getElementById("error");
    for(e in errorList){
        if(errorList[e]===1){
            x++;
        }
    }
    if(x!==5){
        error.textContent = "Please check input values before generating."; 
        error.style.color = "red"; 
    }
    else{
        error.textContent = "Exit the page to see your new password on the main screen."; 
        error.style.color = "green";
        writePassword();
    }
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
    //get values, this allows me to avoid individual listeners for now since I am just checking with the button
    //need to do this here that way the value is current when we go to check them, not at the top of the page
    var field1 = document.getElementById("quantity").value;
    var field2 = document.getElementById("lowercase").value;
    var field3 = document.getElementById("uppercase").value;
    var field4 = document.getElementById("numbers").value;
    var field5 = document.getElementById("specialcharacters").value;
    //check user entered values
    
    if(field1!=""){
    checkQuantInput(field1);
    }
    if(field2!=""){
    checkLowerInput(field2);
    }
    if(field3!=""){
    checkUpperInput(field3);
    }
    if(field4!=""){
    checkNumInput(field4);
    }
    if(field5!=""){
    checkSpecialInput(field5); 
    }
    //dynamically check for error, even if they user fixes one, but messed up another, this will update each time the button is pressed
    checkForErrors();
}
//For now I have added separate function in case I need to modify these later so that they have different requirement
//This is done largely for program readability/ ease of use
//This more easily allows for custom output messages -- I could put them in a String array, I may re-work this later
function checkQuantInput(input){
    var error = document.getElementById("error");
    if(input<8){
        errorList[0]=0;
        error.textContent = "Please enter a larger number of 'Total Length'"; 
        error.style.color = "red" 
    }
    if(input>128){
        errorList[0]=0;
        error.textContent = "Please enter a smaller number of 'Total Length'"; 
        error.style.color = "red";
    }
    else if(input>7 && input <129){
         errorList[0]=1;
    }
}
function checkLowerInput(input){
    var error = document.getElementById("error");
    if(input<1){
        errorList[1]=0;
        error.textContent = "Please enter a larger number of 'Lowercase'"; 
        error.style.color = "red";
    }
    if(input>128){
        errorList[1]=0;
        error.textContent = "Please enter a smaller number of 'Lowercase'"; 
        error.style.color = "red";
    }
    else if(input>0&&input<129){
        errorList[1]=1;
    }
}
function checkUpperInput(input){
    var error = document.getElementById("error");
    if(input<1){
        errorList[2]=0;
        error.textContent = "Please enter a larger number of 'Uppercase'"; 
        error.style.color = "red";    
    }
    if(input>128){
        errorList[2]=0;
        error.textContent = "Please enter a smaller number of 'Uppercase'"; 
        error.style.color = "red";
    }
    else if(input>0&&input<129){
        errorList[2]=1;
    }
}
function checkNumInput(input){
    var error = document.getElementById("error");
    if(input<1){
        errorList[3]=0;
        error.textContent = "Please enter a larger number of 'Numbers'"; 
        error.style.color = "red"; 
    }
    if(input>128){
        errorList[3]=0;
        error.textContent = "Please enter a smaller number of 'Numbers'"; 
        error.style.color = "red";
    }
    else if(input>0&&input<129){
        errorList[3]=1;
    }
}
function checkSpecialInput(input){
    var error = document.getElementById("error");
    if(input<1){
        errorList[4]=0;
        error.textContent = "Please enter a larger number of 'Special Characters'"; 
        error.style.color = "red"; 
    }
    if(input>128){
        errorList[4]=0;
        error.textContent = "Please enter a smaller number of 'Special Characters'"; 
        error.style.color = "red";
    }
    else if(input>0&&input<129){
        errorList[4]=1;
    }
}
function checkForErrors(){
    var x=0;
    var error = document.getElementById("error");
    for(e in errorList){
        if(errorList[e]===1){
            x++;
        }
    }
    if(x===5){
        error.textContent = "No errors found."; 
        error.style.color = "green"; 
    }
}
