let randomNumber = Math.floor(Math.random() * 10,000) + 1;
let attemptCount = 0;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    if (!userGuess) {
        message.innerText = "Please enter a number!";
        return;
    }

    attemptCount++;

    if (userGuess === randomNumber) {
        message.innerText = "🎉 Correct! You guessed the number!";
    } 
    else if (userGuess > randomNumber) {
        message.innerText = "Too High! Try again.";
    } 
    else {
        message.innerText = "Too Low! Try again.";
    }

    attempts.innerText = "Attempts: " + attemptCount;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10,000) + 1;
    attemptCount = 0;
    document.getElementById("message").innerText = "";
    document.getElementById("attempts").innerText = "";
    document.getElementById("guessInput").value = "";
}