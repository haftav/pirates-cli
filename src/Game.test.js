const Game = require('./Game');
const Player = require('./Player');
const areaData = require('../data/areaData');
jest.mock('./Game');

beforeEach(() => {
    Game.mockClear();
});

describe('Game.js tests', () => {
    test('check if class constructor was called', () => {
        expect(Game).not.toHaveBeenCalled();
        const newGame = new Game(new Player('Tav', 'B2'), areaData, { type: 'water', name: 'B2' });
        expect(Game).toHaveBeenCalledTimes(1);
    });
    test('check start method call on class instance', () => {
        const newGame = new Game(new Player('Tav', 'B2'), areaData, { type: 'water', name: 'B2' });
        const mockGameInstance = Game.mock.instances[0];
        
        mockGameInstance.start = jest.fn(() => mockGameInstance.loop())
        newGame.start();

        expect(mockGameInstance.start).toHaveBeenCalledTimes(1);
        expect(mockGameInstance.loop).toHaveBeenCalledTimes(1);
    });
    test('check move method call on class instance', () => {
        const newGame = new Game(new Player('Tav', 'B2'), areaData, { type: 'water', name: 'B2' });
        const mockGameInstance = Game.mock.instances[0];
        newGame.move();

        expect(mockGameInstance.move).toHaveBeenCalledTimes(1);
        //will add more logic here
    });
    test('check end method on class instance', () => {
        const newGame = new Game(new Player('Tav', 'B2'), areaData, { type: 'water', name: 'B2' });
        const mockGameInstance = Game.mock.instances[0];
        newGame.end();

        expect(mockGameInstance.end).toHaveBeenCalledTimes(1);
    });
    test('check commandCenter method on class instance', () => {
        const newGame = new Game(new Player('Tav', 'B2'), areaData, { type: 'water', name: 'B2' });
        const mockGameInstance = Game.mock.instances[0];
        newGame.commandCenter()
    });
});