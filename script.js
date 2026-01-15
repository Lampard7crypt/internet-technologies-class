let count = 0;
function counter() {
    let name = prompt("What is your name:");
    document.getElementById("text").innerHTML = "Hello " + name;
}

function greetings() {
    alert("Helloow, I'm Lampard");
}


function square(a) {
    return a * a;
}

console.log(square(4));

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

// Adding event listener to the button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
