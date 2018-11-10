const { getAction } = require('../utils/prompts');;

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

    async loop() {
        console.log('You are now at location: ', this.area.name, '\n');
        console.log(JSON.stringify(this.area) + "\n");

        let action = await getAction();
        if (action[0] === 'move') {
            this.move(action[1], action[2])
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

    move(index, direction) {
        //don't forget to change player pos as well
        let newArea;
        let currentArea = this.area.name;

        const valid = (function checkValidMove(currentAreaY, currentAreaX, direction) {
            if (index === 0) {
                if (currentAreaY === 65) {
                    if (direction === -1) {
                        return false
                    }
                } else if (currentAreaY === 67) {
                    if (direction === 1) {
                        return false
                    }

                }
            } else {
                if (currentAreaX === 1) {
                    if (direction === -1) {
                        return false
                    }

                } else if (currentAreaX === 3) {
                    if (direction === 1) {
                        return false
                    }
                }
            }

            return true;
        })(currentArea[0].charCodeAt(0), Number(currentArea[1]), direction);

        if (!valid) {
            console.log("\nYou can't move that way - you're at the edge of the map!\n");
            return
        }

        if (index === 0) {
            if ((currentArea[0].charCodeAt(0) >= 65) && (currentArea[0].charCodeAt(0) <= 67)) {
                newArea = String.fromCharCode(currentArea[0].charCodeAt(0) + (1 * direction)) + currentArea[1];
            } else {
                console.log("\nYou can't move that way - you're at the edge of the map!\n");
                return
            }
        } else {
            if ((Number(currentArea[1]) >= 1) && (Number(currentArea[1]) <= 3)) {
                newArea = currentArea[0] + (Number(currentArea[1]) + (1 * direction));
            } else {
                console.log("\nYou can't move that way - you're at the edge of the map!\n");
                return
            }
        }
        console.log('\nYou decided to move.\n');
        this.area = this.board[newArea];
        this.player.position = newArea;
    }

    end() {
        console.log('\nThank you for playing!');
        process.exit();
    }
};
