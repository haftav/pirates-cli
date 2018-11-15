const { prompts, validators } = require('../utils');
const getAction = prompts.getAction;
const validateMove = validators.validateMove;

module.exports = class Game {
    constructor(player, board, area) {
        this.player = player;
        this.board = board;
        this.area = area;
    }

    start() {
        console.log('You look at the great seas all around you.\n');
        this.loop();
    }

    get currentArea() {
        return this.area.name;
    }

    async loop() {
        console.log('You are now at location: ', this.area.name, '\n');
        console.log(JSON.stringify(this.area) + "\n");

        let action = await getAction();
        // this.commandCenter(action[0], this.instructions)
        if (action[0] === 'move') {
            this.move(action[1], action[2], this.currentArea);
        }
        else if (action[0] === 'look') {
            this.look();
        }
        else if (action[0] === 'invalid') {
            console.log(action[1]);
        }
        else if (action[0] === 'end') {
            return this.end();
        } else {
            console.log("\nI didn't quite catch that.\n");
        }
        this.loop();
    }

    move(index, direction, currentArea) {
        //don't forget to change player pos as well
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
        this.area = this.board[newArea];
        this.player.position = newArea;
        return newArea;
    }

    look() {
        console.log('\nYou look around the current area.\n');
        return
    }

    end() {
        console.log('\nThank you for playing!');
        process.exit();
    }

    commandCenter(action, instructions) {
        switch (action[0]) {
            case 'help':
                return instructions;
            case 'invalid':
                return console.log(action[1]);
            case 'show score':
                return;
            case 'move':
                return this.move(action[1], action[2])
            case 'look':
                return this.look();
            case 'end':
                return this.end();
            default:
                return console.log("\nI didn't quite catch that.\n");
        }
    }
};
