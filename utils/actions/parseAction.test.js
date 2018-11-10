const { parseMove } = require('./parseAction');

const northMoveArray = [
    'move',
    0,
    -1
];

const southMoveArray = [
    'move',
    0,
    1
];

const eastMoveArray = [
    'move',
    1,
    1
];

const westMoveArray = [
    'move',
    1,
    -1
];

describe('parseMove tests', () => {
    test('moving north returns northward move', () => {
        expect(parseMove('move north')).toEqual(expect.arrayContaining(northMoveArray))
    });

    test('moving south returns southward move', () => {
        expect(parseMove('move south')).toEqual(expect.arrayContaining(southMoveArray))
    });

    test('moving east returns eastward move', () => {
        expect(parseMove('move east')).toEqual(expect.arrayContaining(eastMoveArray))
    });

    test('moving west returns westward move', () => {
        expect(parseMove('move west')).toEqual(expect.arrayContaining(westMoveArray))
    });
})

