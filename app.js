//Using .push(String.fromCharCode()) to push all possible characters into array

let arrayChar = []
for (let i=33; i<127; i++){
  arrayChar.push(String.fromCharCode(i));
}

//Since it requires to generate 4 different passwords, 4 separate for-loops needs to be created
//----PASSWORD SET 1 ------
let nthPosition_setOne = Math.floor(Math.random()*arrayChar.length); //Create a variable and assign the random number to it

let pwdOne = arrayChar[nthPosition_setOne]; //Create a new variable and assign the characters correspoding to above random number

for (let i=0; i<14; i++){
    let nthPosition_setOne = Math.floor(Math.random()*arrayChar.length);
    pwdOne += arrayChar[nthPosition_setOne];
    }

//----PASSWORD SET 2 ------

let nthPosition_setTwo = Math.floor(Math.random()*arrayChar.length);
let pwdTwo = arrayChar[nthPosition_setTwo];
for (let i=0; i<14; i++){
    let nthPosition_setTwo = Math.floor(Math.random()*arrayChar.length);
    pwdTwo += arrayChar[nthPosition_setTwo];
    }

//----PASSWORD SET 3 ------

let nthPosition_setThree = Math.floor(Math.random()*arrayChar.length);
let pwdThree = arrayChar[nthPosition_setThree];
for (let i=0; i<14; i++){
    let nthPosition_setThree = Math.floor(Math.random()*arrayChar.length);
    pwdThree += arrayChar[nthPosition_setThree];
    }

//----PASSWORD SET 4 ------

let nthPosition_setFour = Math.floor(Math.random()*arrayChar.length);
let pwdFour = arrayChar[nthPosition_setFour];
for (let i=0; i<14; i++){
    let nthPosition_setFour = Math.floor(Math.random()*arrayChar.length);
    pwdFour += arrayChar[nthPosition_setFour];
    }

//Insert the calculated passwords into the element <p></p> in document page 

function pwd(){
    document.getElementById("result-box-one").textContent = pwdOne;
    document.getElementById("result-box-two").textContent = pwdTwo;
    document.getElementById("result-box-three").textContent = pwdThree;
    document.getElementById("result-box-four").textContent = pwdFour;
}
