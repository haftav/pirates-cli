const { parseMove, parseAction } = require('./parseAction');

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
});

describe('parseAction tests', () => {
    test('moving north returns northward move', () => {
        expect(parseAction('move north')).toEqual(expect.arrayContaining(northMoveArray))
    });
    test('moving south returns southward move', () => {
        expect(parseAction('move south')).toEqual(expect.arrayContaining(southMoveArray))
    });

    test('moving east returns eastward move', () => {
        expect(parseAction('move east')).toEqual(expect.arrayContaining(eastMoveArray))
    });
    test('moving west returns westward move', () => {
        expect(parseAction('move west')).toEqual(expect.arrayContaining(westMoveArray))
    });
    test("inputting 'end' or 'end game' should return output that ends the game", () => {
        expect(parseAction('end')).toEqual(expect.arrayContaining(['end']));
        expect(parseAction('end game')).toEqual(expect.arrayContaining(['end']))
    });
    test('invalid input should return invalid output', () => {
        expect(parseAction('movewest')).toEqual(expect.arrayContaining(['invalid', '\nPlease enter a valid direction.\n']));
        expect(parseAction('move')).toEqual(expect.arrayContaining(['invalid', '\nPlease enter a valid direction.\n']));
        expect(parseAction('')).toEqual(expect.arrayContaining(['invalid', '\nPlease enter a valid response.\n']));
        expect(parseAction('wlwegja;')).toEqual(expect.arrayContaining(['invalid', '\nPlease enter a valid response.\n']));
    });
})