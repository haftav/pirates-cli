module.exports = class Area {
    constructor({type, name, describe, objects, ship}) {
        this.type = type;
        this.name = name;
        this.describe = describe;
        this.objects = objects;
        this.ship = ship;
    }
}