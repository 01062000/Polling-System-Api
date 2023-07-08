const express = require('express');
const mongoose = require('./config/db');
const env = require('dotenv');
const app = express();

env.config();

const { PORT } = process.env;

// connect with database
mongoose();

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use express router
app.use('/', (req, res, next) => {console.log("incoming req: ", req); next();}, require('./routes'));

app.listen(PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running at ${PORT}`);
});
