const router = require('express').Router()
const cubes = require('../db.json');

// при всяка заявка към '/', отиди в index.hbs, където чрез темплейта от "partials - cube", динамично рендерира наличните кубчета
router.get('/', (req, res) => {
    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;