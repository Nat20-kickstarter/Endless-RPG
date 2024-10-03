// Assuming you already have classes like Player, Monster, etc.
let currentMonster = null; // Global variable for the current monster encounter

// Function to handle different commands entered by the player
function handleCommand(input) {
    input = input.toLowerCase().trim(); // Normalize input
    switch (input) {
        case 'attack':
            if (currentMonster) {
                gameOutput("You attack the monster!");
                fight(player, currentMonster);  // Use your existing fight logic
            } else {
                gameOutput("There's nothing to attack!");
            }
            break;

        case 'heal':
            if (player.health < 100) {
                player.heal(10);  // Assuming you have a heal function in Player class
                gameOutput("You heal yourself. Current health: " + player.health);
            } else {
                gameOutput("Your health is already full!");
            }
            break;

        case 'run':
            if (currentMonster) {
                if (Math.random() > 0.5) {
                    gameOutput("You successfully ran away!");
                    currentMonster = null;  // Escape from the encounter
                } else {
                    gameOutput("You failed to run away!");
                    player.takeDamage(currentMonster.attack);  // Player takes damage if run fails
                    gameOutput("The monster hit you as you tried to flee!");
                }
            } else {
                gameOutput("There's nothing to run from.");
            }
            break;

        case 'stats':
            gameOutput(`Stats: Health = ${player.health}, Attack = ${player.attack}, Level = ${player.level}, XP = ${player.xp}`);
            break;

        case 'explore':
            if (!currentMonster) {
                gameOutput("You venture onward...");
                randomEncounter(player);  // Trigger a random encounter
            } else {
                gameOutput("You can't explore while fighting a monster!");
            }
            break;

        case 'help':
            gameOutput("Commands: attack, heal, run, stats, explore, help");
            break;

        default:
            gameOutput("Unknown command. Type 'help' for a list of commands.");
    }
}

// Function to display text in the game output (replace this with however you're showing messages)
function gameOutput(message) {
    const outputDiv = document.getElementById("game-output");
    outputDiv.innerHTML += message + "<br>";
}

// Listening to the "Enter" key or button click for user input
document.getElementById("submit-action").onclick = function () {
    const input = document.getElementById("user-input").value;
    document.getElementById("user-input").value = "";  // Clear input field
    handleCommand(input);  // Process the command
};

// Alternatively, if you want to handle the "Enter" keypress:
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit-action").click();  // Trigger the click event
    }
});

