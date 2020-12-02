

document.addEventListener('DOMContentLoaded', (event) => {
    //DOM loaded
    let firstNumber = true;
    let preString = null;
    let postString = null;
    let operator = null;
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    console.log(firstNumber);
 
    const content = document.querySelector('.container');
    let display = document.querySelector('.display');

    content.addEventListener("click", function(event) {
        if(numbers.includes(parseInt(event.target.innerText)))
        {
            if(firstNumber === true)
            {
                display.innerHTML = event.target.innerText;
                firstNumber = false;
                operator != null ? postString = event.target.innerText : preString = event.target.innerText;
            }
            else {
                display.innerHTML += event.target.innerText;
                operator != null ? postString += event.target.innerText : preString += event.target.innerText;
            }
        }
        switch(event.target.innerText) {
            case "C":
                clearAll();
                break;
            case "+":
                operator = "+";
                clearDisplay();
                break;
            case "-":
                operator = "-";
                clearDisplay();
                break;
            case "×":
                operator = "×";
                clearDisplay();
                break;
            case "÷":
                operator = "÷";
                clearDisplay();
                break;
            case "←":
                backspace();
                break;
            case "=":
                calculate();
                break;

        }
    });

    function clearAll() {
        display.innerHTML = "0";
        preString = null;
        postString = null;
        firstNumber = true;
        operator = null;
    }

    function clearDisplay() {
        display.innerHTML = "0";
        firstNumber = true;
    }

    function backspace() {
        if (display.innerHTML.length != 1)
        {
            let number = display.innerHTML.slice(0, -1);   
            display.innerHTML = number;
            postString === null ? preString = number : postString = number;
        }
    }

    function calculate() {
        // Select function dependend on which operator was clicked
        switch(operator) {
            case "+":
                add(preString,postString);
                break;
            case "-":
                subtract(preString, postString);
                break;
            case "×":
                multiply(preString, postString);
                break;
            case "÷":
                divide(preString, postString);
                break;
            default:
                break;
        }

        // reset operator, firstNumber, postString and set output to preString
        firstNumber = true;
        operator = null;
        postString = null;
        preString = display.innerHTML;
    }

    function add(preString, postString) {
        let number = parseInt(preString) + parseInt(postString);
        display.innerHTML = number.toString();

    }
    function subtract(preString, postString) {
        let number = parseInt(preString) - parseInt(postString);
        display.innerHTML = number.toString();
    }
    function multiply(preString, postString) {
        let number = parseInt(preString) * parseInt(postString);
        display.innerHTML = number.toString();
    }
    function divide(preString, postString) {
        let number = parseFloat(preString) / parseFloat(postString);
        display.innerHTML = number.toString();
    }

  })



