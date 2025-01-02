const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link,'utf-8', (erro,texto)=>{
    if(erro) throw erro;
    quebraDeParagrafos(texto);
})
//---lista do que a função tem que fazer---
//1   criar um array com as palavras
//2   contar as ocorrencias
/*3   montar um objeto com o resultado
{
    web:5,
    computador:4,
}*/

function quebraDeParagrafos(texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo)=>{
        if(!paragrafo) return [];
        return verificarPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function limparPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

}

function verificarPalavrasDuplicadas(texto){
    const listaPalavras =texto.split(' ');
    const resultado ={};
    listaPalavras.forEach(palavra=>{
        if(palavra.length >= 3){
            const palavraLimpa = limparPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
        
    })
    return resultado;
}