const fs = require('fs/promises');
const path = require('path');


const cubes = require('../db.json');  // взимаме JSON файла

exports.getOne = (cubeId) => cubes[cubeId]; // приема cubeId и връща от масива с кубовете cubeId

exports.getAll = (search, from, to) => {   // проверяваме с FILTER резултата от търсенето или празен стринг за да покаже всички резултати
    const result = cubes.filter(x => x.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase() || ''));
    return result
};  

// експортираме SAVE функция, която да ползваме в контролера
exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });

    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' })
}
