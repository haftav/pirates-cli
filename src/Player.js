const { validators, prompts } = require('../utils');
const validateMove = validators.validateMove;
const getAction = prompts.getAction;

module.exports = class Player {
    constructor(name, initialPosition, ship=null) {
        this.name = name;
        this.position = initialPosition;
        this.ship = ship;

        this.move = this.move.bind(this);
        this.look = this.look.bind(this);
        this.claim = this.claim.bind(this);
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
        this.position = newArea;

        console.log('\nYou decided to move.\n');
        console.log('You are now at location: ', newArea, '\n');
        console.log(board[newArea].description, "\n");
        return newArea;

    }
    look(lookAction, currentArea, board) {
        console.log("\n", currentArea.description, "\n");
    }
    claim(claimAction, currentArea, board) {
        if (currentArea.ship) {
            this.ship = currentArea.ship;
            console.log("You claimed the lovely ship", this.ship.name, "\n");
            return

        } else {
            console.log("There's nothing to claim here.\n")
            return
        }

    }
}