const express = require('express');
const fruitsApp = express();
const fruits = require("./routes/fruitsRoutes")

fruitsApp.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

fruitsApp.use('/fruits', fruits);

module.exports = fruitsApp