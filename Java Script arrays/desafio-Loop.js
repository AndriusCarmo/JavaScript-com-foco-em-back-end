//1
/*const numeros=[1,2,3,4];

let resultado = 0;

for( elemento of numeros){

    resultado = elemento;
    console.log(resultado);
}*/


//2
/*const numeros=[1,2,3,4];

function mostra(elementos){
    for(let i=0 ; i < elementos.length ; i++){
        let numero = elementos[i]
        let index = elementos.indexOf(numero)
        console.log(`indice ${index} : elemento ${numero}`)

    }
    
}
mostra(numeros)*/


//3
/*const numeros=[1,2,3,4];

function mostra(elementos){
    let soma =0
    for(let i=0 ; i < elementos.length ; i++){
        soma += elementos[i];
    }
    console.log(`A soma dos elementos do array é igual a : ${soma}`)
}
mostra(numeros)*/


//4
/*const numeros=[1,2,3,4];

function mostrar(elementos){
    
    let maiorNumero = elementos[0]
    let menorNumero = elementos[0]
    
    for(let i=0 ; i < elementos.length ; i++){
        
        
        if(elementos[i]>maiorNumero){
            maiorNumero = elementos[i]
        }else{
            maiorNumero = maiorNumero 
        }
        if(elementos[i]<menorNumero){
                menorNumero = elementos[i]
        }else{
            menorNumero = menorNumero
        }
    }
    console.log(`o menor número é ${menorNumero} e o maior número é ${maiorNumero}`)
}
mostrar(numeros) */


//5

/*const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for(let i =0 ; i<numeros.length; i++){

    let numero =numeros[i];
    if(numero%2===0){
        console.log(numero)
    }
}*/

//6

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

let somaNumero = 0;

for(let i =0 ; i<numeros.length; i++){

    somaNumero += numeros[i];
}

const media = (somaNumero)/(numeros.length);
console.log(media);




