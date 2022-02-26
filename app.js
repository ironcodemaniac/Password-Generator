//Using .push(String.fromCharCode()) to push all possible characters into array

let arrayChar = []
for (let i=33; i<127; i++){
  arrayChar.push(String.fromCharCode(i));
}

// Set global variable
let resultONe_El = document.getElementById("result-box-one");
let resultTwo_El = document.getElementById("result-box-two");
let resultThree_El = document.getElementById("result-box-three");
let resultFour_El = document.getElementById("result-box-four");


function getPasswordLength(){
  let length = 0;
  if (document.getElementById("passwordlength-5-El").checked){
    length = document.getElementById("passwordlength-5-El").value;
  } 
  else if (document.getElementById("passwordlength-10-El").checked){
    length = document.getElementById("passwordlength-10-El").value;
  } 
  else {
    length = document.getElementById("passwordlength-15-El").value;
  }
  return length;
}

function getPasswords(){
    let randomPassword = "";
    for (let i=0; i<getPasswordLength(); i++){
    let randomNumber = Math.floor(Math.random()*arrayChar.length); //should declare the variable here, so the randomNumber can be generated every time.
    randomPassword += arrayChar[randomNumber];
    }
    return randomPassword;
}

function generatePasswords(){
    resultONe_El.textContent = getPasswords();
    resultTwo_El.textContent = getPasswords();
    resultThree_El.textContent = getPasswords();
    resultFour_El.textContent = getPasswords();
}

