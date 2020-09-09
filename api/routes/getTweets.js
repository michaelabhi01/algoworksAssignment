const express = require('express');
const router = express.Router();


const getTweetsController = require('../controller/getTweets');
router.get('/', getTweetsController.tweets);

module.exports = router;