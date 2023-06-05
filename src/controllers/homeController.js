const cubes = require('../db.json');

exports.index = (req, res) => {
    res.render('index', {cubes}); // при всяка заявка към '/home/index', отива в index.hbs, където чрез темплейта от "partials - cube", динамично рендерира наличните кубчета
} 

exports.about = (req, res) => {
    res.render('about');
}