
class Player {
    constructor() {
        this.health = 100;
        this.attack = 10;
        this.xp = 0;
        this.level = 1;
    }

    levelUp() {
        this.level++;
        this.health += 10;
        this.attack += 5;
        gameOutput(`You leveled up! Level: ${this.level}, Health: ${this.health}, Attack: ${this.attack}`);
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            gameOutput("You died!");
            return false;
        }
        return true;
    }

    heal(amount) {
        this.health += amount;
        gameOutput(`You healed for ${amount} health. Current health: ${this.health}`);
    }
}
