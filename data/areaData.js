const Ship = require('../src/Ship');
const Chest = require('../src/Chest');
const Key = require('../src/Key');

const areaData = {
    "A1": {
        type: "water",
        name: "A1",
        describe: function() {
            console.log("You are surrounded by water.\n");
        },
        objects: {},
        ship: null
    },
    "A2": {
        type: "water",
        name: "A2",
        describe: function() {
            console.log("You are surrounded by water. It looks like there's land to the east!\n");
        },
        objects: {},
        ship: null
    },
    "A3": {
        type: "land",
        name: "A3",
        describe: function() {
            if (this.objects.key) {
                console.log("You are on an island. There's a shiny key on the ground in front of you.\n");
            } else {
                console.log("You are on a deserted island.")
            }
        },
        objects: {
            key: new Key(),
        },
        ship: null
    },
    "B1": {
        type: "water",
        name: "B1",
        describe: function() {
            console.log("You are surrounded by water on all sides except the west - there is a giant wall there!.\n");
        },
        objects: {},
        ship: null
    },
    "B2": {
        type: "water",
        name: "B2",
        describe: function() {
            if (this.objects.ship) {
                console.log("You find yourself on a deserted island. There is a ship on the beach in front of you. You look in all directions but only see ocean.\n")
            } else {
                console.log("You are on a deserted island. Ocean surrounds you in all directions.\n")
            }
        },
        objects: {
            ship: new Ship('Messi', 'B2'),
        },
    },
    "B3": {
        type: "water",
        name: "B3",
        describe: function() {
            console.log("You are surrounded by water.\n");
        },
        objects: {},
        ship: null
    },
    "C1": {
        type: "water",
        name: "C1",
        describe: function() {
            if (!this.objects.chest) {
                console.log("You are on a small island.");
            }
            else if (this.objects.chest.opened) {
                console.log("You are on a small island. There is an empty chest in front of you.\n");
            } else {
                console.log("You are on a small island. There's a chest in front of you. You might be able to open it with a key.\n");
            }
        },
        objects: {
            chest: new Chest(500),
        },
        ship: null
    },
    "C2": {
        type: "water",
        name: "C2",
        describe: function() {
            console.log("You are surrounded by water.\n");
        },
        objects: {},
        ship: null
    },
    "C3": {
        type: "water",
        name: "C3",
        describe: function() {
            console.log("You are surrounded by water.\n");
        },
        objects: {},
        ship: null
    },
}

module.exports = areaData;