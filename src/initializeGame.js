const { prompts } = require('../utils');
const Game = require('./Game');
const Player = require('./Player');
let USERNAME;

async function initializeGame () {
    USERNAME = await prompts.getName();
    console.log(`Your name is ${USERNAME}? A fine name indeed.\n`);
    const NewPlayer = new Player(USERNAME);
    const NewGame = new Game(NewPlayer);
    NewGame.start();
}

module.exports = initializeGame;