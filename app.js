const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getTweetsRoutes = require('./api/routes/getTweets');

app.use('/getTweets', getTweetsRoutes);