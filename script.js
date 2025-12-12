let count=0;
function counter(){
    let name = prompt("What is your name:");
    document.getElementById("text").innerHTML = "Hello " + name;
}

function greetings(){
    alert("Helloow, I'm Lampard");
}

function toggleDarkMode() {
    const body = document.body; // Grab the whole body. 
    body.classList.toggle('dark-mode'); // toggle changes the state of sumn, like if it's in dark mode it removes that, if it's not it adds that. 
    // classList enables me to access the classes used in the "body".
    const button = document.getElementById('darkModeToggle');
    if (body.classList.contains('dark-mode')) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}

// Set initial button text based on default state
if (document.body.classList.contains('dark-mode')) {
    document.getElementById('darkModeToggle').textContent = "☀️ Light Mode";
}

// Add event listener to the button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);


/*
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12) {
        greetingText = "Good Morning";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon";
    } else {
        greetingText = "Good Evening";
    }

    greetingElement.textContent = greetingText;
}
// Run the function when the page loads
updateGreeting();
*/