function parseAction(action) {
    if (action === 'move') {
        return 'move';
    }
    else if (action === 'end' || action === 'end game') {
        return 'end';
    }
}

module.exports = parseAction;