const { prompts } = require('../utils');
const getAction = prompts.getAction;

module.exports = class Game {
    constructor(player, board) {
        this.player = player;
        this.board = board;
        this.gameActions = ['help', 'end', 'invalid'];
        this.playerActions = ['look', 'move', 'claim', 'check'];
        this.shipActions = [];
    }
    start() {
        this.currentArea.describe();
        this.loop();
    }
    async loop() {
        let action = await getAction();

        try {
            if (this.gameActions.includes(action[0])) {
                this[action[0]](action);
            } else if (this.playerActions.includes(action[0])) {
                this.player[action[0]](action, this.currentArea, this.board);
            } else {
                console.log("I didn't quite catch that.\n");
            }
        } catch (error) {
            console.log("Invalid move.\n", error);
        }
        this.loop();
    }
    get currentArea() {
        return this.board[this.player.position];
    }
    invalid(action) {
        console.log("That input is invalid.", action[1]);
    }
    end() {
        console.log('Thank you for playing!');
        process.exit();
    }
};
