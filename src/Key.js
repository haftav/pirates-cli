module.exports = class Key {
    constructor() {
        this.claim = this.claim.bind(this);
        this.describe = this.describe.bind(this);
    }

    claim(action, currentArea, player) {
        let newInventory = { ...player.inventory, [action[1]]: this};
        let newObjects = { ...currentArea.objects };
        delete newObjects[action[1]];

        currentArea.objects = newObjects;
        player.inventory = newInventory;
        console.log(`You take the ${action[1]}.\n`);
        console.log("Your inventory is now: ", player.inventory);
    }

    describe() {
        console.log("A small golden key.\n");
    }
}