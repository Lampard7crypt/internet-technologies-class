// 1. Select the DOM elements we need to interact with
const pythonCheckbox = document.getElementById('pythonCheck');
const jsCheckbox = document.getElementById('jsCheck');
const submitButton = document.getElementById('submit-btn');
const resultText = document.getElementById('resultDisplay');

submitButton.addEventListener('click', function (e) {
    e.preventDefault(); // stop form submission
    // existing checkbox logic...
});

// 2. Add an event listener to the button
submitButton.addEventListener('click', function () {

    const isPythonChecked = pythonCheckbox.checked;
    const isJsChecked = jsCheckbox.checked;


    if (isPythonChecked && isJsChecked) {
        resultText.textContent = "So you know both JS and Python! Nice!!!";
    } else if (isPythonChecked) {
        resultText.textContent = "Python? Very powerful language!!";
    } else if (isJsChecked) {
        resultText.textContent = "JS, one of the best if not the best scripting languages";
    } else {
        resultText.textContent = "Please select at least one skill.";
    }
});