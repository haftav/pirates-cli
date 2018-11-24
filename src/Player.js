const { validators, prompts } = require('../utils');
const validateMove = validators.validateMove;

module.exports = class Player {
    constructor(name, initialPosition, inventory, ship=null) {
        this.name = name;
        this.position = initialPosition;
        this.ship = ship;
        this.inventory = {}

        this.move = this.move.bind(this);
        this.look = this.look.bind(this);
        this.claim = this.claim.bind(this);
        this.check = this.check.bind(this);
    }
    move(moveAction, currentArea, board) {
        let [action, index, direction] = moveAction;
        let newArea;

        const valid = validateMove(currentArea.name[0].charCodeAt(0), Number(currentArea.name[1]), index, direction);

        if (!valid) {
            console.log("\nYou can't move that way - you're at the edge of the map!\n");
            return (() => {})();
        }
        
        if (index === 0) {
                newArea = String.fromCharCode(currentArea.name[0].charCodeAt(0) + (1 * direction)) + currentArea.name[1];
        } else {
                newArea = currentArea.name[0] + (Number(currentArea.name[1]) + (1 * direction));
        }

        if (board[newArea].type === 'water' && !this.ship) {
            console.log("\nYou can't travel by sea without a ship\n");

        } else {
            this.position = newArea;
            console.log('\nYou decided to move.\n');
            console.log('You are now at location: ', newArea, '\n');
            board[newArea].describe();
            return newArea;
        }
    }
    look(lookAction, currentArea, board) {
        currentArea.describe();
    }
    claim(claimAction, currentArea, board) {
        if (claimAction[1] === 'ship') {
            if (this.ship) {
                console.log("You already have a ship.\n");
                return
            }
            if (currentArea.ship) {
                this.ship = currentArea.ship;
                currentArea.ship = null;
                console.log("You claimed the lovely ship", this.ship.name, "\n");
                return
            } 
        }
        else if (claimAction[1] === 'key') {
            let key = currentArea.objects.find(function(el) {
                return el.name === 'key'
            });
            if (key) {
                let newInventory = {...this.inventory, key}
                this.inventory = newInventory;
                let index = currentArea.objects.findIndex(function(el) {
                   return el.name === 'key';
                });
                let newObjects = currentArea.objects.slice(0);
                newObjects.splice(index, 1);
                currentArea.objects = newObjects;
                console.log("Your inventory is now: ", this.inventory)
            } else {
                console.log("There's no key in this area.\n");
            }
        }
        else if (!claimAction[1]) {
            console.log("Please say what you're trying to claim.\n");
        }
        else {
            console.log("There's nothing to claim here.\n");
            return
        }

    }
    check() {
        console.log("Here is your inventory: \n", this.inventory, "\n");
    }
}