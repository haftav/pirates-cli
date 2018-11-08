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
        console.log(action);
            if (action[0] === 'move') {
                this.player.move(action[1], action[2]);
                console.log('You decided to move.');
                this.loop();
            } 
            else if (action[0] === 'invalid') {
                console.log(action[1]);
                this.loop()
            }
            else if (action === 'end') {
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
