module.exports = class Area {
    constructor({type, name, description, objects}) {
        this.type = type;
        this.name = name;
        this.description = description;
        this.objects = objects;
    }
}