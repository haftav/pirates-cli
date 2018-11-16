const { prompts } = require('../utils');
const getAction = prompts.getAction;

module.exports = class Game {
    constructor(player, board) {
        this.player = player;
        this.board = board;
    }

    start() {
        console.log('You look at the great seas all around you.\n');
        this.loop();
    }
    async loop() {
        console.log('You are now at location: ', this.currentArea.name, '\n');
        console.log(JSON.stringify(this.currentArea) + "\n");

        let action = await getAction();
        // this.commandCenter(action[0], this.instructions)
        if (action[0] === 'move') {
            // this.move(action[1], action[2], this.currentArea);
            this.player.move(action[1], action[2], this.currentArea.name);
        }
        else if (action[0] === 'look') {
            this.player.look(this.currentArea);
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
    get currentArea() {
        // return this.area.name;
        return this.board[this.player.position];
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
