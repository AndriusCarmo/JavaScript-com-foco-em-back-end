//1
/*const dadosImportdos = require('./dados.json');

console.log(dadosImportdos);
*/

//3

/*const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

const produtoString =JSON.stringify(produto);

console.log(produtoString);
console.log(typeof produtoString);*/

//4

const objAnimais = require('./dados-4.json');

objAnimais.animais.push({id:4, nome: 'Avestrus', tipo: 'Ave', habitat: 'Africa'});


objAnimais.animais[0].habitat='Africa';

objAnimais.animais.splice(1,1);
const objAnimaisString =JSON.stringify(objAnimais);



console.log(objAnimais);
console.log(objAnimaisString);
