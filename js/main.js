// Pin generator
function getPin(){
    // let random = Math.floor(Math.random()*1000);
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];

    if(pin.length === 4){
        return pin;
    }
    else{
        // console.log("shorter pin", pin);
        return getPin();
    }
}
// display pin generator
function generatePin(){
    const pinInput = document.getElementById('pin-screen');
    pinInput.value = getPin();
}


//Handle Calculator button event
let buttonContainer = document.getElementsByClassName('calc-button-row');
let keyValue = "";

for (let i = 0; i < buttonContainer.length; i++) {
    buttonContainer[i].addEventListener('click', function(e){
        let digit = e.target.innerText;
    
        let typedInput = document.getElementById('input-screen');
        if(digit.length == 1){
            if(digit === 'C'){
                //handle clear;
                typedInput.value= "";
            }
            else if(digit === 'B'){
                //handle backspace
                typedInput.value= typedInput.value.slice(0, - 1);
            }
            else{
                typedInput.value = typedInput.value + digit;
            }
        }
    });
}



//connection between pin generator and input section
// function verifyPin(){
//     const pin = document.getElementById('pin-screen').value;
//     const typedPin = document.getElementById('input-screen').value;

//     if(pin === typedPin){
//         document.getElementById('correct-pin').style.display = 'block';
//         document.getElementById('incorrect-pin').style.display = 'none';
//     }
//     else if(pin != typedPin){
//         document.getElementById('incorrect-pin').style.display = 'block';
//         document.getElementById('correct-pin').style.display = 'none';
//     }
// }


//Another Way
function verifyPin(){
    const pin = document.getElementById('pin-screen').value;
    const typedPin = document.getElementById('input-screen').value;

    
    if(pin === "" && typedPin == ""){
        // alert('Error');
    }
    else if(pin === typedPin){
        displayMatchResult('block', 'none');
    }
    else if(pin !== typedPin){
        displayMatchResult('none', 'block');
    }
}

function displayMatchResult(correctStatus, incorrectStatus){
    document.getElementById('correct-pin').style.display = correctStatus;
    document.getElementById('incorrect-pin').style.display = incorrectStatus;
}

//Wrong Count
let maxWrongCount = 5;

document.getElementById('submit').addEventListener('click', function(){
    const pinScreen = document.getElementById('pin-screen');
    let pinScreenNumber = parseInt(pinScreen.value);

    const inputScreen = document.getElementById('input-screen');
    let inputScreenNumber = parseInt(inputScreen.value);

    if(pinScreenNumber === inputScreenNumber){
        document.getElementById('incorrect-pin').style.display = 'none';
        document.getElementById('correct-pin').style.display = 'block';
    }
    else{
        if(maxWrongCount > 0){
            maxWrongCount--;
            document.getElementById('wrong-count').innerText = maxWrongCount;
            document.getElementById('correct-pin').style.display = 'none';
        }
        else{
            alert('You cannot answer more than five times incorrectly. Please reload this page and try again. Thank you');
        }
    }
    
});