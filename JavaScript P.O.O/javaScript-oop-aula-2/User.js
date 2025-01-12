export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || "estudante"
    this.#ativo = ativo
  }
  get nome (){
    return this.#nome
  }
  get email(){
    return this.#email
  }
  get nascimento(){
    return this.#nascimento
  }
  set nome(novoNome){
    this.#nome = novoNome
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}`
  }
}

const novoUser = new User('Juliana', 'j@j.com', '2024-01-01')
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));