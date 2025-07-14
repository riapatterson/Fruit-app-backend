const FruitModel = require("../models/FruitModel");

const showAllFruits = async (req, res) => {
    try {
        const fruits = await FruitModel.showAllFruits();
        res.status(200).send(fruits);
    } catch(err) {
        res.status(500).send({ error: "Server error" });
    }
}

const showFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();
	
    try {
        const fruit = await FruitModel.showFruit(name);
        res.status(200).send(fruit);
    } catch(err) {
	    res.status(404).send({error: err})
    }
}

const createFruit = async (req, res) => {
    try {
        const newFruit = await FruitModel.create(req.body);
        res.status(201).send(newFruit);
    } catch (err) {
        res.status(409).send({ error: err});
    }
};

module.exports = {showAllFruits, showFruit, createFruit}