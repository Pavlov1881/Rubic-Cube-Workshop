const fs = require('fs/promises');
const path = require('path');


const cubes = require('../db.json');  // взимаме JSON файла

exports.getOne = (cubeId) => cubes[cubeId]; // приема cubeId и връща от масива с кубовете cubeId

// експортираме SAVE функция, която да ползваме в контролера
exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });

    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' })
}
