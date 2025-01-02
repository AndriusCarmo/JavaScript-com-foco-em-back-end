//1
/*const array = [5, 6 ,9 , 7 , 20];
 
let informacao = ""

array.forEach( function (elemento){
    indice = array.indexOf(elemento)
    informacao += ` elemento ${elemento} índice ${indice} `

})
console.log(informacao) */

//2

/*const array = [10 , 9.5 , 8 , 7 , 6]

function executaOperacaoEmArray(){
    let arrayModificado = array.map((elemento)=> elemento%2 === 0 ? elemento/2 : elemento*2 )    
    return arrayModificado
}

console.log(executaOperacaoEmArray())*/

//3

/*const numeros =[20 , 12 , 8 , 9 , 10 , 16 , 12 , 18];

function verificar(elemento){
    for(let i = 0 ; i<numeros.length; i++){

        if(numeros.includes(elemento)){
           return `O indice de ${elemento} é ${numeros.indexOf(elemento)}`
            }
        else{
           return  " -1"
            }
    }
}
console.log(verificar(100))*/

//4
/*const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)

function verificar(nome){
    for(let i = 0 ; i< todasAsTurmas.length; i++){

        if(todasAsTurmas.includes(nome)){
           return `Nome do aluno : ${nome}`
            }
        else{
           return  " Aluno não encontrado"
            }
    }
}
console.log(verificar('Biu'))   */

//5

const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(function(elemento){

    let valor = elemento*3
    console.log(valor)
})
let informação = numeros.indexOf(18);
console.log(`O indice do elemento 18 é ${informação}`);