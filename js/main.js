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


// Input Section
let screen = document.getElementById('screen');
let buttons = document.getElementsByClassName('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log('Button text is:', buttonText);
        if(buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == "B"){
            screenValue = screen.value.slice(0, - 1);
            screen.value = screenValue; 
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}