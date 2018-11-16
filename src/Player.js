const { validators } = require('../utils');
const validateMove = validators.validateMove;

module.exports = class Player {
    constructor(name, initialPosition) {
        this.name = name;
        this.position = initialPosition;
    }

    move(index, direction, currentArea) {
        let newArea;

        const valid = validateMove(currentArea[0].charCodeAt(0), Number(currentArea[1]), index, direction);

        if (!valid) {
            console.log("\nYou can't move that way - you're at the edge of the map!\n");
            return
        }
        
        if (index === 0) {
                newArea = String.fromCharCode(currentArea[0].charCodeAt(0) + (1 * direction)) + currentArea[1];
        } else {
                newArea = currentArea[0] + (Number(currentArea[1]) + (1 * direction));
        }
        console.log('\nYou decided to move.\n');
        this.position = newArea;
        return newArea;
    }
    look(area) {
        console.log("\n", area.description, "\n");
        return;
    }
}