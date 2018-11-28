

module.exports = class Ship {
    constructor(name, position) {
        this.name = name;

        this.claim = this.claim.bind(this);
    }

    claim(action, currentArea, player) {
        if (player.ship) {
            console.log("You already have a ship.\n");
        } else {
            player.ship = this;
            let newObjects = { ...currentArea.objects };
            delete newObjects.ship;
            currentArea.objects = newObjects;
            console.log("You've taken command of the ship", this.name, "\n");
        }
        return
    }

}