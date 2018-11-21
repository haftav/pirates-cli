const Ship = require('../src/Ship');

const areaData = {
    "A1": {
        type: "water",
        name: "A1",
        description: "You are surrounded by water.",
        objects: [],
        ship: null
    },
    "A2": {
        type: "water",
        name: "A2",
        description: "You are surrounded by water.",
        objects: [],
        ship: null
    },
    "A3": {
        type: "land",
        name: "A3",
        description: "You are on an island",
        objects: [],
        ship: null
    },
    "B1": {
        type: "water",
        name: "B1",
        description: "You are surrounded by water.",
        objects: [],
        ship: null
    },
    "B2": {
        type: "water",
        name: "B2",
        description: "You are surrounded by water.",
        objects: [],
        ship: new Ship('Messi'),
    },
    "B3": {
        type: "water",
        name: "B3",
        description: "You are surrounded by water.",
        objects: [],
        ship: null
    },
    "C1": {
        type: "water",
        name: "C1",
        description: "You are surrounded by water.",
        objects: [],
        ship: null
    },
    "C2": {
        type: "water",
        name: "C2",
        description: "You are surrounded by water.",
        objects: [],
        ship: null
    },
    "C3": {
        type: "water",
        name: "C3",
        description: "You are surrounded by water.",
        objects: [],
        ship: null
    },
}

module.exports = areaData;