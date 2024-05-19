const display = document.querySelector('#display');

function displayInput(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Invalid'
    }
}