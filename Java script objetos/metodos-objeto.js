const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
       rua: 'Rua Joseph Climber',
       numero: '45',
       complemento: 'apto 43'
     },
     {
       rua: 'Rua Dona Clotilde',
       numero: '71',
       complemento: null
    }]
  }
  
  const chavesObjeto = Object.keys(estudante);
  const valores =Object.values(estudante);
  const pares = Object.entries(estudante);
  console.log(chavesObjeto);
  
  console.log(valores);

  console.log(pares);