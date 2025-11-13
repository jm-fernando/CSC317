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

        //Handling Subtraction Operator
        if(button.id === "subtract") {
            if(currentInput !== "") {
                previousInput = parseFloat(currentInput);
                currentOperator = "-";
                currentInput = "";
            }
            return;
        }

        //Handling Multiplication Operator
        if(button.id === "multiply") {
            if(currentInput !== "") {
                previousInput = parseFloat(currentInput);
                currentOperator = "*";
                currentInput = "";
            }
            return;
        }

        //Handling Division Operator
        if(button.id === "divide") {
            if(currentInput !== "") {
                previousInput = parseFloat(currentInput);
                currentOperator = "/";
                currentInput = "";
            }
            return;
        }

        //Handling Decimals
        if(button.id === "decimal") {
            if(!currentInput.includes(".")) {
                if(currentInput === "") {
                    currentInput = "0.";
                } else {
                    currentInput += ".";
                }
                screen.textContent = currentInput;
            }
            return;
        }

        //Re-handling Equals button
        if(button.id === "equals") {
            if(currentOperator && previousInput !== null && currentInput !== "") {
                let result;

                if(currentOperator === "+") {
                    result = previousInput + parseFloat(currentInput);
                } else if(currentOperator === "-") {
                    result = previousInput - parseFloat(currentInput);
                } else if(currentOperator === "*") {
                    result = previousInput * parseFloat(currentInput);
                } else if(currentOperator === "/") {
                    if(parseFloat(currentInput) === 0) {
                        screen.textContent = "Error: Div by 0";
                        currentInput = "";
                        previousInput = null;
                        currentOperator = null;
                        return;
                    }
                    result = previousInput / parseFloat(currentInput);
                }

                screen.textContent = result;
                currentInput = result.toString();
                previousInput = null;
                currentOperator = null;
            }
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