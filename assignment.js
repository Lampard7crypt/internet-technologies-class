// 1. Select the DOM elements we need to interact with
const pythonCheckbox = document.getElementById('pythonCheck');
const jsCheckbox = document.getElementById('jsCheck');
const submitButton = document.getElementById('submit-btn');
const resultText = document.getElementById('resultDisplay');

submitButton.addEventListener('click', function(e) {
    e.preventDefault(); // stop form submission
    // existing checkbox logic...
});

// 2. Add an event listener to the button
submitButton.addEventListener('click', function() {

    // 3. Check the state of the checkboxes using the .checked property
    const isPythonChecked = pythonCheckbox.checked;
    const isJsChecked = jsCheckbox.checked;

    // 4. Logic to determine what to print
    if (isPythonChecked && isJsChecked) {
        resultText.textContent = "You are a Full Stack Wizard! (Python & JS)";
    } else if (isPythonChecked) {
        resultText.textContent = "Data Science or Backend? Nice Python skills!";
    } else if (isJsChecked) {
        resultText.textContent = "The language of the web! Great JavaScript choice.";
    } else {
        resultText.textContent = "Please select at least one skill.";
    }
});