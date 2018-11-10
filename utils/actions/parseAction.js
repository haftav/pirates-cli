parseMove = function parseMove(move) {
    let directions = ['north', 'south', 'east', 'west'];
    let direction = move.split(' ')[1];
    let amount = move.split(' ')[0];
    if (directions.includes(direction)) {
        /*
        If the move input is valid, 
        return an array with the first item 
        as the action to take, the second as the index of the area code
        to modify, and the third as the direction to take

        **/
        return [
            'move',
            (direction === 'north' || direction === 'south' ? 0 : 1),
            (direction === 'north' || direction === 'west' ? -1 : 1),
        ];
    } else {
        return [
            'invalid',
            '\nPlease enter a valid direction.\n'
        ];
    }
}

parseAction = function parseAction(action) {
    let moveRegex = /^move/gi
    if (action.match(moveRegex)) {
        return parseMove(action);
    }
    else if (action === 'end' || action === 'end game') {
        return [
            'end'
        ];
    } else {
        return [
            'invalid',
            '\nPlease enter a valid response.\n'
        ];
    }
}

module.exports = { parseMove, parseAction };