class Monster {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    takeDamage(damage) {
        this.health -= damage;
        return this.health > 0;
    }
}
