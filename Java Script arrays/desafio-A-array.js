//1
/*
const array1=[1,2,3,4,5];
const array2 =[7,8,9,10];
const array3 =[20,30,40,100];

function unindo(arrayn,arrayn2,arrayn3){

    let uniao12=arrayn.concat(arrayn2)
    let uniao312=uniao12.concat(arrayn3)

    return uniao312

}

console.log(unindo(array1,array2,array3));*/

//2

/*const valores = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];


function somarvalores(parametro){

    const somaDeValores = parametro.reduce((acumulador,valor)=>{

       return acumulador + valor ;
    },0);

    return somaDeValores;

}

console.log(somarvalores(valores))*/


//3

/*const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];


let lista1EditConjunto = new Set(coresLista1);
let lista1Edit =[...lista1EditConjunto];

let listUnida = lista1Edit.concat(coresLista2);
let listUnidaconjunto = new Set(listUnida);
let listUnidaEdit =[...listUnidaconjunto];


console.log(listUnidaEdit);*/

//4 Já foi feita uma similar 

//5

const array = [3,4,6,9,2,27,47,50,81];
let arrayResultado = [];

const multiplos = array.forEach((numero)=>{
    if(numero%3===0 && numero>5){
        arrayResultado.push(numero)
    } 
    return arrayResultado   
});
console.log(arrayResultado);


