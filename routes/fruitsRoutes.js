const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruitsController")

fruitsRouter.get('/', fruitsController.index)
fruitsRouter.get("/:name", fruitsController.show);

module.exports = fruitsRouter
