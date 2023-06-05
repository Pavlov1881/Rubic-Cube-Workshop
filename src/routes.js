const experss = require('express');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const router = experss.Router();

// ПРИ GET ЗАЯВКА ИЗПЪЛНИ КОНКРЕТНИЯ ЕКШЪН КОЙТО ОТГОВАРЯ ЗА ПЪТЯ
router.get('/', homeController.index);
router.get('/about', homeController.about);

// ПРИ ВСЯКА ЗАЯВКА КЪМ "CUBE" ИЗПОЛЗВАЙ РУТЕРА В "cubeController"
router.use('/cube', cubeController);

module.exports = router;
