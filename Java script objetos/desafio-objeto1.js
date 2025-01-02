
//1
const livro = {

 titulo: 'Memorias',
 autor: 'Machado de Assis',
 anoPublicacao: 1881,
 genero: 'Romance'

}

function mostrarInfo(objeto,chave){

  return objeto[chave];
}

console.log(mostrarInfo(livro,'genero'));
console.log(mostrarInfo(livro,'anoPublicacao'));

/*2

const anoAtual = new Date().getFullYear()

const livro = {
    
    titulo: 'Memorias',
    autor: 'Machado de Assis',
    anoPublicacao: 1881,
    genero: 'Romance'
   
}

let calculo = (anoAtual - livro['anoPublicacao']);

livro.idadePublicacao = calculo

mostrarDetalhes= {};
mostrarDetalhes.titulo= 'Memorias'
mostrarDetalhes.autor='Machado de Assis'
mostrarDetalhes.anoPublicacao = 1881
mostrarDetalhes.genero ='Romance'
mostrarDetalhes.idadePublicacao =calculo
console.log(mostrarDetalhes);*/