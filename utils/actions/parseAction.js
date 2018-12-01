const parseMove = require('./parseAction/parseMove');

parseAction = function parseAction([primaryAction, secondaryAction, tertiaryAction]) {
    let moveRegex = /^move|^go/gi
    let claimRegex = /^claim|^take/gi
    let lookRegex = /^look[ ]?$|^look around$/gi
    let openRegex = /^open/gi
    let dropRegex = /^drop/gi
    let inspectRegex = /^inspect/gi

    if (primaryAction.match(moveRegex)) {
        return parseMove([secondaryAction, tertiaryAction]);
    }
    else if (primaryAction.match(lookRegex)) {
        return [
            'look'
        ]
    }
    else if (primaryAction.match(claimRegex)) {
        return [
            'claim',
            secondaryAction
        ]
    }
    else if (primaryAction.match(openRegex)) {
        return [
            'open',
            secondaryAction
        ]
    }
    else if (primaryAction.match(dropRegex)) {
        return [
            'drop',
            secondaryAction
        ]
    }
    else if (primaryAction.match(inspectRegex)) {
        return [
            'describe',
            secondaryAction
        ]
    }
    else if (primaryAction === 'h' || primaryAction === 'help') {
        return [
            'help'
        ]
    }
    else if (primaryAction === 'check') {
        return [
            'check'
        ]
    }
    else if (primaryAction === 'end' || primaryAction === 'end game' || primaryAction === 'quit' || primaryAction === 'q') {
        return [
            'end'
        ];
    } else {
        return [
            'invalid',
            'Please enter a valid response.\n'
        ];
    }
}

module.exports = { parseAction, parseMove };