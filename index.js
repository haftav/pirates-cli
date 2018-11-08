#!/usr/bin/env node

const initializeGame = require('./src/initializeGame');

function start() {
    console.log('Welcome to the game of pirates-cli!\n');
    console.log('A great world lies ahead of you, ready to be explored.\n');

    initializeGame();
}

start();