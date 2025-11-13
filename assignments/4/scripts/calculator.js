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

        currentInput += value;
        screen.textContent = currentInput;
    });
});