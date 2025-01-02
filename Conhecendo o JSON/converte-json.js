const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante)

const objEstudante = JSON.parse(stringEstudante)

console.log(typeof estudante);
console.log(typeof stringEstudante);
console.log(typeof objEstudante);