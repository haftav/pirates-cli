module.exports = class Player {
    constructor(name) {
        this.name = name;
        this.position = {
            x: 0,
            y: 0
        }
    }

    move(direction, amount) {
        let val;
        if (direction === 'x') {
            val = this.position.x + amount;
            return this.position = {
                ...this.position,
                x: val
            }
        }
        else {
            val = this.position.y + amount;
            return this.position = {
                ...this.position,
                y: val
            }
        }
    }
}