//Element references
const screen = document.getElementById("calc-screen");
const buttons = document.querySelectorAll(".buttons button");

//Variable to hold inputs
let currentInput = "";
let previousInput = null;
let currentOperator = null;

//Loop
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.textContent;

        //Handling Addition Operator
        if(button.id === "add") {
            if(currentInput !== "") {
                previousInput = parseFloat(currentInput);
                currentOperator = "+";
                currentInput = "";
            }
            return;
        }

        //Handling Equals button
        if(button.id === "equals") {
            if(currentOperator === "+" && previousInput !== null && currentInput !== "") {
                let result = previousInput + parseFloat(currentInput);
                screen.textContent = result;
                currentInput = result.toString();
                previousInput = null;
                currentOperator = null;
            }
            return;
        }


        //Handling Clear button
        if(button.id === "clear") {
            currentInput = "";
            screen.textContent = 0;
            return;
        }

        //Handling Delete button
        if(button.id === "backspace") {
            currentInput = currentInput.slice(0, -1);
            screen.textContent = currentInput || 0;
            return;
        }

        //Handling Plus/Minus button
        if(button.id === "plus-minus") {
            if(currentInput){
                let number = parseFloat(currentInput);
                if(!isNaN(number)) {
                    number = number * -1;
                    currentInput = number.toString();
                    screen.textContent = currentInput;
                }
            }
            return;
        }
        currentInput += value;
        screen.textContent = currentInput;
    });
});