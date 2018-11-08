const { getAction } = require('../utils/prompts');;

module.exports = class Game {
    constructor(player) {
        this.player = player;
    }

    start() {
        console.log('You look at the great seas all around you.\n');
        this.loop();
    }

    async loop() {
        console.log('You are now at location: ', this.player.position, '\n');
        let action = await getAction();
        if (action === 'move') {
            this.player.move('x', -5)
            console.log('You decided to move.');
            this.loop();
        } else if (action === 'end') {
            this.end();
        } else {
            console.log("I didn't quite catch that.\n");
            this.loop();
        }
    }

    end() {
        console.log('Thank you for playing!');
        process.exit();
    }
};
