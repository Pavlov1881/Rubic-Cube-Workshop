const router = require('express').Router();
const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const cube = req.body;   // взимаме данните от CREATE формата

    // валидираме данните
    if (cube.name.length < 2) {
        res.status(400).send('Invalid request');
        return;
    }

    // запазване на данните
    cubes.push(cube);
    // презаписваме файла и го парсваме на стринг, слагаме 4 спейса за да форматира правилно файла
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), {encoding: 'utf-8'}) 
        .then(() => {                     // понеже връща PROMISE с THEN редиректваме към Home
            res.redirect('/')
        })
        .catch(error => {
            res.status(400).send(error);
        })
});

module.exports = router;