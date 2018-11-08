function parseMove(move) {
    let directions = ['north', 'south', 'east', 'west'];
    let direction = move.split(' ')[1];
    let amount = move.split(' ')[0];
    if (directions.includes(direction)) {
        return [
            'move',
            (direction === 'north' || direction === 'south' ? 'y' : 'x'),
            (direction === 'north' || direction === 'east' ? 1 : -1),
        ];
    } else {
        return [
            'invalid',
            'Please enter a valid direction.'
        ]
    }
}

function parseAction(action) {
    let moveRegex = /^move/gi
    if (action.match(moveRegex)) {
        return parseMove(action);
    }
    else if (action === 'end' || action === 'end game') {
        return [
            'invalid'
        ];
    } else {
        return [
            'invalid',
            'Please enter a valid response.'
        ];
    }
}

module.exports = parseAction;