/*const fruta = ['uva','maça', 'abacaxi'];
const diasSemana= [ 'segunda','terça','quinta'];
concatenação()
function concatenação(){
    const dieta = fruta.concat(diasSemana);
    console.log(dieta);
}


const numeros =[1,2,3,4,5,6,7,8,9,10];

const parteNumeros = numeros.slice(3,8);
console.log(parteNumeros);

const frutas2 = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas2.splice(2,2,'kiwi','Pesego');
console.log(frutas2);

const lista = [[[1,2,3],[4,5,6],[7,8,9]],
               [[1,2,3],[4,5,6],[7,8,9]],
               [[1,2,3],[4,5,6],[7,8,9]]];

console.log(lista);*/


const alunos = ['Pedro','Maria','Jozé','Ana'];
const notas =[10 , 9 , 8.2 , 7];

const lista = [alunos , notas];

function verificarNotaDe(aluno){
    if(lista[0].includes(aluno)){
        const indice = alunos.indexOf(aluno)
        const nota = notas[indice]
        console.log(`O aluno: ${aluno} obteve nota igual a: ${nota}`)
    }else{
        console.log('Nome invalido')
    }
}
verificarNotaDe('Pedro')
verificarNotaDe('Ana')
verificarNotaDe('Biu')
