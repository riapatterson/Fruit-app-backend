const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruitsController")
const nutrtionController = require("../controllers/nutritionController")


fruitsRouter.get('/', fruitsController.showAllFruits)
fruitsRouter.get("/:name", fruitsController.showFruit)

module.exports = fruitsRouter
