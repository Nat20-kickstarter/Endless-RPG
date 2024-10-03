function fight(player, monster) {
    gameOutput(`A ${monster.name} appears! (Health: ${monster.health}, Attack: ${monster.attack})`);

    let fightInterval = setInterval(() => {
        if (monster.takeDamage(player.attack)) {
            gameOutput(`You attack the ${monster.name}! Monster's health is now ${monster.health}.`);
        } else {
            gameOutput(`You defeated the ${monster.name}!`);
            player.xp += 10;
            if (player.xp >= 20) {
                player.levelUp();
            }
            clearInterval(fightInterval);
        }

        if (player.takeDamage(monster.attack)) {
            gameOutput(`The ${monster.name} attacks you! Your health is now ${player.health}.`);
        } else {
            gameOutput("Game Over!");
            clearInterval(fightInterval);
        }
    }, 1000); // Simulate turns every second
}

function puzzle(player) {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = a + b;
    gameOutput(`Puzzle: What is ${a} + ${b}?`);

    waitForInput((input) => {
        if (parseInt(input) === correctAnswer) {
            gameOutput("Correct! You gained 10 XP.");
            player.xp += 10;
            if (player.xp >= 20) {
                player.levelUp();
            }
        } else {
            gameOutput("Wrong answer! You lose 5 health.");
            player.takeDamage(5);
        }
    });
}

function locationEvent(player) {
    const locations = ["a dark forest", "a sunny meadow", "a mountain cave", "a quiet village"];
    const chosenLocation = locations[Math.floor(Math.random() * locations.length)];
    gameOutput(`You arrive at ${chosenLocation}. Nothing happens. You heal 5 health.`);
    player.heal(5);
}

function randomEncounter(player) {
    const encounterType = Math.random() < 0.5 ? "monster" : Math.random() < 0.75 ? "puzzle" : "location";

    if (encounterType === "monster") {
        const monsters = [
            new Monster("Goblin", 30, 5),
            new Monster("Orc", 50, 10),
            new Monster("Dragon", 100, 20),
        ];
        const chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
        fight(player, chosenMonster);
    } else if (encounterType === "puzzle") {
        puzzle(player);
    } else {
        locationEvent(player);
    }
}
