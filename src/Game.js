const { prompts } = require('../utils');
const getAction = prompts.getAction;

module.exports = class Game {
    constructor(player, board) {
        this.player = player;
        this.board = board;
        this.gameActions = ['help', 'end', 'invalid'];
        this.playerActions = ['look', 'move'];
    }
    start() {
        console.log('You are now at location: ', this.currentArea.name, '\n');
        this.loop();
    }
    async loop() {
        let action = await getAction();

        try {
            if (this.gameActions.includes(action[0])) {
                console.log("Game Action: ", action[0]);
                this[action[0]](action, this.currentArea);
            } else if (this.playerActions.includes(action[0])) {
                console.log("Player Action: ", action[0]);
                this.player[action[0]](action, this.currentArea);
            } else {
                console.log("\nI didn't quite catch that.\n");
            }
        } catch (error) {
            console.log("\nThat function doesn't appear to exist.")
        }
        this.loop();
    }
    get currentArea() {
        return this.board[this.player.position];
    }
    invalid() {
        console.log("\nThat input is invalid. Please input a valid response.");
    }
    end() {
        console.log('\nThank you for playing!');
        process.exit();
    }
};
