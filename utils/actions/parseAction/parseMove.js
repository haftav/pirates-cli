parseMove = function parseMove([secondary, tertiary]) {
    let directions = ['north', 'south', 'east', 'west'];
    let direction = secondary;
    let amount = tertiary;
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

module.exports = parseMove;