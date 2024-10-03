const player = new Player();
let encounterCount = 0;

function gameOutput(message) {
    const outputDiv = document.getElementById("game-output");
    outputDiv.innerHTML += `<p>${message}</p>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function waitForInput(callback) {
    const inputField = document.getElementById("user-input");
    const submitButton = document.getElementById("submit-action");

    submitButton.onclick = () => {
        const userInput = inputField.value.trim();
        inputField.value = "";
        callback(userInput);
    };
}

function mainGame() {
    gameOutput("Welcome to the Endless RPG! Survive through 100 encounters!");

    function nextEncounter() {
        if (encounterCount < 100 && player.health > 0) {
            gameOutput(`\nEncounter ${encounterCount + 1}/100`);
            randomEncounter(player);
            encounterCount++;
        } else if (player.health > 0) {
            gameOutput("Congratulations! You've completed all 100 encounters.");
        } else {
            gameOutput("You fought bravely but have fallen.");
        }
    }

    waitForInput(nextEncounter);
}

document.addEventListener("DOMContentLoaded", () => {
    mainGame();
});
