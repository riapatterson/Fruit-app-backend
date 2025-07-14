const fruitsArray = require("../fruits.json");

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
        return fruitsArray.map(q => new FruitsModel(q));
    }

    static showFruit(name) {
        const fruits = fruitsArray.filter(fruit =>
            fruit.name.toLowerCase().startsWith(name.toLowerCase())
        );
        if (fruits.length > 0) {
            return fruits.map(fruit => new FruitsModel(fruit));
        } else {
            throw "No fruits found starting with that name.";
        }
    }

    static create(data) {
        const newFruit = data;
        console.log(newFruit)

        newFruit["id"] = fruitsArray.length + 1;

        fruitsArray.push(newFruit);

        return new FruitsModel(newFruit)
    };

     static create(data) {
        const newFruit = data;
        const fruit = fruitsArray.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase());
  
          if (fruit) {
              throw "The fruit already exists.";
          } else {
              newFruit["id"] = fruitsArray.length + 1;
              fruitsArray.push(newFruit);
        
              return new FruitsModel(newFruit)
          }
    };
}

module.exports = FruitsModel;