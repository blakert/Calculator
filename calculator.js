let num1;
let num2;
var thisOperator = '';
let result;
let display = document.getElementById('input');
let decimalPressed = false;
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll('.number');
const shortcuts = document.querySelectorAll(".shortcut");

shortcuts.forEach((shortcut) =>{
    if(shortcut.value == '%'){
         shortcut.addEventListener('click',(e) =>{
             num1 = display.textContent;
            if(num1 != ''){
                result = divide(num1,100);
                clearDisplay();
                writeDisplay(result);
                
            }
    });
    } 
   else if(shortcut.value == "+/-"){
        shortcut.addEventListener('click',(e) =>{
            num1=display.textContent;
            if(num1 != 0 && num1 != ''){
                num1 = changeSign(num1);
                clearDisplay();
                writeDisplay(num1);
            }
        });
    } else if (shortcut.value == "C"){
        shortcut.addEventListener('click',(e) =>{
            clearDisplay();
            decimalPressed = false;
            num1 = '';
            num2 = '';
            operator = '';
        });
    }
   
});
numbers.forEach((number) => {
    if(number.value == '.'){
        number.addEventListener('click', (e) => {
        if(e.target.value == '.'){
            if(decimalPressed == false){
                writeDisplay(e.target.value);
                decimalPressed = true;
            }
    }
        
    })
}
    else{
        number.addEventListener('click',(e) => {
            writeDisplay(e.target.value);
        })
    }
})
operators.forEach((operator) => {
    if (operator.value == '+') {
        
        operator.addEventListener('click', (e) => {
            num1 = parseFloat(display.textContent);
            thisOperator = '+';
            decimalPressed = false;
            clearDisplay();
        });
    } else if (operator.value == '=') {

        operator.addEventListener('click', (e) => {
            if (operator != '' && num1 != '') {
                num2 = parseFloat(display.textContent);
                console.log(num2);
                result = operate(thisOperator, num1, num2);
                clearDisplay();
                writeDisplay(result);
            }

        });


    } else if(operator.value == '-'){
        operator.addEventListener('click',(e) =>{
            num1 = parseFloat(display.textContent);
            thisOperator = '-';
            decimalPressed = false;
            clearDisplay();
        });
    }else if(operator.id == 'divide'){
        operator.addEventListener('click',(e) => {
            num1 = parseFloat(display.textContent);
            thisOperator = '&divide;';
            decimalPressed = false;
            clearDisplay();
        });
    } else if (operator.value == 'x'){
        operator.addEventListener('click',(e) => {
            num1 = parseFloat(display.textContent);
            thisOperator = 'x';
            decimalPressed = false;
            clearDisplay();
        });
    }
    
});







function writeDisplay(text) {
    
    display.textContent += text;


}

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function changeSign(num) {
    num = num * -1;
    return num;
}

function clearDisplay() {
    display.textContent = ''
}

function clearGlobals() {
    operator = '';
    num1 = '';
    num2 = '';
}

function operate(operator, num1, num2) {
    let result;
    if (operator == 'x') {
        result = multiply(num1, num2);
    } else if (operator == '+') {
        result = add(num1, num2);

    } else if (operator == '&divide;') {
        result = divide(num1, num2);
    } else if (operator == '-') {
        result = subtract(num1, num2);
    }
    return result;
}

