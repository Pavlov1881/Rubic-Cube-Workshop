const express = require('experss');

const homeController = require('./controllers/homeController');

const router = express.Router();

router.get('/', homeController.index);

module.exports = router;
