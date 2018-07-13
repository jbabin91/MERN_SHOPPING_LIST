const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./configs/keys').mongoURI;

// Connect to monogo
mongoose
  .connect(
    db,
    { useNewUrlParser: true },
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server started on https://localhost:${port}`),
);
