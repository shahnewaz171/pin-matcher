// Pin generator


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
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}