const { prompts } = require('../utils');
const Game = require('./Game');
const Player = require('./Player');
const Area = require('./Area');
const areaData = require('../data/areaData');

let USERNAME;
let BOARD;
let INITIAL_POSITION = "B2";

function createBoard(data) {
    let board = {};
    for (let i in data) {
        board[i] = new Area(data[i]);
    }
    return board;
};

async function initializeGame() {
    USERNAME = await prompts.getName();
    console.log(`Your name is ${USERNAME}? A fine name indeed.\n`);
    BOARD = createBoard(areaData);
    const NewPlayer = new Player(USERNAME, INITIAL_POSITION);
    const NewGame = new Game(NewPlayer, BOARD);
    NewGame.start();
}

module.exports = initializeGame;