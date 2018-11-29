const { validators, prompts } = require('../utils');
const validateMove = validators.validateMove;

module.exports = class Player {
    constructor(name, initialPosition, inventory, ship = null) {
        this.name = name;
        this.position = initialPosition;
        this.ship = ship;
        this.inventory = {
            gold: 0
        };

        this.move = this.move.bind(this);
        this.look = this.look.bind(this);
        this.check = this.check.bind(this);
    }
    move(moveAction, currentArea, board) {
        let [action, index, direction] = moveAction;
        let newArea;

        const valid = validateMove(currentArea.name[0].charCodeAt(0), Number(currentArea.name[1]), index, direction);

        if (!valid) {
            console.log("You can't move that way - you're at the edge of the map!\n");
            return 
        }

        if (index === 0) {
            newArea = String.fromCharCode(currentArea.name[0].charCodeAt(0) + (1 * direction)) + currentArea.name[1];
        } else {
            newArea = currentArea.name[0] + (Number(currentArea.name[1]) + (1 * direction));
        }

        if (board[newArea].type === 'water' && !this.ship) {
            console.log("You can't travel by sea without a ship\n");
            return

        } else {
            this.position = newArea;
            console.log('You decided to move.\n');
            console.log('You are now at location: ', newArea, '\n');
            board[newArea].describe();
            return
        }
    }
    look(lookAction, currentArea, board) {
        currentArea.describe();
    }
    
    check() {
        console.log("Here is your inventory: \n", this.inventory, "\n");
    }
}