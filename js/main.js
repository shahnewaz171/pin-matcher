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
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;

    let typedInput = document.getElementById('input-screen');
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
});


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

    if(pin === typedPin){
        
        displayMatchResult('block', 'none');
    }
    else{
        displayMatchResult('none', 'block');
    }
}

function displayMatchResult(correctStatus, incorrectStatus){
    document.getElementById('correct-pin').style.display = correctStatus;
    document.getElementById('incorrect-pin').style.display = incorrectStatus;
}