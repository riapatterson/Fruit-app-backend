const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruitsController")

fruitsRouter.get('/', fruitsController.showAllFruits)

fruitsRouter.get("/:name", fruitsController.showFruit)

fruitsRouter.post("/", fruitsController.createFruit)

fruitsRouter.patch('/:name', fruitsController.update)

fruitRouter.delete("/:name", fruits.destroy.destroy);

module.exports = fruitsRouter
