const fruitsJSONData = require("../fruits.json");

class FruitsModel {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAll() {
        return fruitsJSONData.map(q => new FruitsModel(q));
    }

    static show(name) {
        const fruit = fruitsJSONData.find((fruit) => fruit.name.toLowerCase() == name);

        if (fruit) {
            return new FruitsModel(fruit);
        } else {
            throw "The fruit doesn't exist.";
        }
    }
}

module.exports = FruitsModel;