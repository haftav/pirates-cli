const validateMove = require('./validateMove');

describe('validateMove tests', () => {
    test('should return false if player is on edge of map and moving away from center', () => {
        expect(validateMove(65, 2, 0, -1)).toBeFalsy();
        expect(validateMove(67, 2, 0, 1)).toBeFalsy();
        expect(validateMove(66, 1, 1, -1)).toBeFalsy();
        expect(validateMove(66, 3, 1, 1)).toBeFalsy();
    });
    test('should return true if player is making valid move', () => {
        expect(validateMove(65, 2, 0, 1)).toBeTruthy();
        expect(validateMove(67, 2, 0, -1)).toBeTruthy();
        expect(validateMove(66, 1, 0, 1)).toBeTruthy();
        expect(validateMove(66, 3, 0, -1)).toBeTruthy();
        expect(validateMove(66, 2, 0, 1)).toBeTruthy();
        expect(validateMove(66, 2, 0, -1)).toBeTruthy();
        expect(validateMove(66, 2, 1, 1)).toBeTruthy();
        expect(validateMove(66, 2, 1, -1)).toBeTruthy();
    })
});