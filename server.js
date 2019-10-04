require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const database = require('./src/config/database');

const routes = require('./src/routes');

const app = express();

mongoose.connect(database.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);