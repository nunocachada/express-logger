const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

var logStream = fs.createWriteStream(path.join(__dirname, 'logger.log'), {
  flags: 'a',
});

app.use(morgan('combined', { stream: logStream }));

app.get('/', (req, res) => {
  res.send('Hello. This is the home page');
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}. `);
  console.log(morgan.url);
});
