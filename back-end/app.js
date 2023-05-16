const express = require("express");
const app = express();
const cors = require("cors");
const wineControllers = require("./controllers/wineControllers.js");
// const reviewController = require('./controllers/reviewsController')


app.use(cors());
app.use(express.json());


app.use('/wines', wineControllers);
// app.use('/reviews', reviewController);

// Default endpoint
app.get('/', (req, res) => {
    res.send('Welcome to Vintage Vineyard');
  });

  app.get('*', (req,res) => {
    res.status(404).send("Page not Found!");
  });

module.exports = app;
