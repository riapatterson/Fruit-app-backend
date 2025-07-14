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

    static showAllFruits() {
        return fruitsJSONData.map(q => new FruitsModel(q));
    }

    static showFruit(name) {
        const fruits = fruitsJSONData.filter(fruit =>
            fruit.name.toLowerCase().startsWith(name.toLowerCase())
        );
        if (fruits.length > 0) {
            return fruits.map(fruit => new FruitsModel(fruit));
        } else {
            throw "No fruits found starting with that name.";
        }
    }
}

module.exports = FruitsModel;