const estudantes =require('./estudantes.json');

function filtrarPorPropriedade(lista,propriedade){
    return lista.filter((estudantes)=>{
        return !estudantes.endereco.hasOwnProperty(propriedade);

    })
}

const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes,'cep');
console.log(listaEnderecosIncompletos);