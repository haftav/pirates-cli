module.exports = class Chest {
    constructor(gold) {
        this.gold = gold;
        this.opened = false;

        this.open = this.open.bind(this);
    }

    open(action, player) {
        if (this.opened) {
            console.log("You already opened this!\n");
        }
        else if (player.inventory.key) {
            this.opened = true;
            console.log("You opened the chest!\n");
        } else {
            console.log("You can't open a chest without a key.\n");
        }
        return
    }

    describe(action, player) {
        if (this.opened) {
            console.log("An empty chest.\n");
        } else {
            console.log("A locked chest with something inside. If only you had a key!\n");
        }
    }
}