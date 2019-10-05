require('dotenv').config()

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const database = require('./src/config/database');

const routes = require('./src/routes');

const app = express();

mongoose.connect(database.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, 'uploads')));
app.use(express.json());
app.use(routes);

app.listen(3333);