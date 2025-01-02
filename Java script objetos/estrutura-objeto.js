const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
  }

  console.log(estudante.nome);

  console.log(`Os três primeiros números do cpf de ${estudante.nome} é ${estudante.cpf.substring(0,3)}`);