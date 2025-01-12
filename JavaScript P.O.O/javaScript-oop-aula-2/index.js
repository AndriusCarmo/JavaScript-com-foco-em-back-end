import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Juliana","J@j.com","2024-01-01") 
console.log(novoUser.exibirInfos());
console.log(novoUser.nome);
novoUser.nome="maria";

console.log(novoUser.exibirInfos());
