const Game = require('./Game');
const Player = require('./Player');
const areaData = require('../data/areaData');


describe('tests for methods on Game class', () => {
    test('commandCenter method produces expected output', () => {
        const newGame = new Game(new Player('Tav', 'B2'), areaData, { type: 'water', name: 'B2' });

    })
})