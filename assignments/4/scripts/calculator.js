//Element references
const screen = document.getElementById("calc-screen");
const buttons = document.querySelectorAll(".buttons button");

//Variable to hold input
let currentInput = "";

//Loop
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.textContent;

        currentInput += value;
        screen.textContent = currentInput;
    });
});