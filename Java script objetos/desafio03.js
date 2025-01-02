1//

/*const pessoa = {
    nome:'Pedro',
    idade: 29,
    solteiro: true, //Indicador de estado civil (true se solteiro, false se casado).
    hobbies: ['treinar','correr','estudar']
}

function mostrarInfoPessoa(objeto){

    console.log('informações da pessoa')
    console.log(`nome ${objeto.nome} tipo((${typeof(objeto.nome)}) `)
    console.log(`idade ${objeto.idade} tipo((${typeof(objeto.idade)}) `)
    console.log(`solteiro ${objeto.solteiro} tipo((${typeof(objeto.solteiro)}) `)
    console.log(`hobbies ${objeto.hobbies} tipo((${typeof(objeto.hobbies)}) `)
}
mostrarInfoPessoa(pessoa);*/

//2

const pessoa = {
    nome:'Pedro',
    idade: 29,
    solteiro: true, //Indicador de estado civil (true se solteiro, false se casado).
    hobbies: ['treinar','correr','estudar']
}

pessoa.endereco ={
    rua:'Belo horizonte',
    cidade:'São Lourenço',
    estado:'Pernambuco'
}



function mostrarInfoPessoa(objeto){

    console.log('informações da pessoa')
    console.log(`nome: ${objeto.nome} tipo(${typeof(objeto.nome)}) `)
    console.log(`idade: ${objeto.idade} tipo(${typeof(objeto.idade)}) `)
    console.log(`solteiro: ${objeto.solteiro} tipo(${typeof(objeto.solteiro)}) `)
    console.log(`hobbies:   
                ${objeto.hobbies[0]} 
                ${objeto.hobbies[1]}
                ${objeto.hobbies[2]}  tipo(${typeof(objeto.hobbies)}) `)
    console.log(`endereco: 
            rua:     ${objeto.endereco.rua} 
            cidade:  ${objeto.endereco.cidade} 
            estado:  ${objeto.endereco.estado}     tipo(${typeof(objeto.endereco)})`)
}
mostrarInfoPessoa(pessoa);
