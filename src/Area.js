module.exports = class Area {
    constructor({type, name, description, objects, ship}) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.objects = objects;
        this.ship = ship;
    }
}