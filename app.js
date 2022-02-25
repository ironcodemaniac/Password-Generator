//Using .push(String.fromCharCode()) to push all possible characters into array

let arrayChar = []
for (let i=33; i<127; i++){
  arrayChar.push(String.fromCharCode(i));
}

function getRandomIndex(){
    let randomNumber = Math.floor(Math.random()*arrayChar.length);
    return randomNumber
}

function getPasswords(){
    let randomPassword = arrayChar[getRandomIndex()];
    for (let i=0; i<14; i++){
    randomPassword += arrayChar[getRandomIndex()];
    }
    return randomPassword;
}

function generatePasswords(){
    document.getElementById("result-box-one").textContent = getPasswords();
    document.getElementById("result-box-two").textContent = getPasswords();
    document.getElementById("result-box-three").textContent = getPasswords();
    document.getElementById("result-box-four").textContent = getPasswords();
}

