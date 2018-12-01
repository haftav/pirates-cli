module.exports = class Chest {
    constructor(gold) {
        this.gold = gold;
        this.opened = false;

        this.open = this.open.bind(this);
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

    open(action, currentArea, player) {
        if (this.opened) {
            console.log("You already opened this!\n");
        }
        else if (player.inventory.key) {
            let chestGold = this.gold;
            let newGold = player.inventory.gold += chestGold;
            player.inventory.gold = newGold;
            this.gold = 0;
            this.opened = true;
            console.log("You opened the chest!");
            console.log(`You add ${chestGold} gold to your inventory. \n`);
        } else {
            console.log("You can't open a chest without a key.\n");
        }
        return
    }

    drop(action, currentArea, player) {
        let newInventory = { ...player.inventory };
        let newObjects = { ...currentArea.objects, [action[1]]: this };

        delete newInventory[action[1]];

        currentArea.objects = newObjects;
        player.inventory = newInventory;
    }

    describe(action, currentArea, player) {
        if (this.opened) {
            console.log("An empty chest.\n");
        } else {
            console.log("A locked chest with something inside. If only you had a key!\n");
        }
    }
}