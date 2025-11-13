//Element references
const screen = document.getElementById("calc-screen");
const buttons = document.querySelectorAll(".buttons button");

//Variable to hold input
let currentInput = "";

//Loop
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.textContent;

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