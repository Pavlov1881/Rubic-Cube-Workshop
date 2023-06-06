const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');  // взимаме JSON файла

// експортираме SAVE функция, която да ползваме в контролера
exports.save = (cube) => {
    cubes.push(cube);  // запизваме кубчето във файла

    // презаписваме db.json файла и парсваме данните към стринг
    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), { encoding: 'utf-8' });
}

exports.getOne = (cubeId) => cubes[cubeId]; // приема cubeId и връща от масива с кубовете cubeId