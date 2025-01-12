import User from "./User.js";

class Admin extends User {
    constructor(nome,email,nascimento,role='Admin',ativo="true"){
        super(nome,email,nascimento,role,ativo)

    }
    criarCurso(nome,qTDVagas){
        return `curso ${nome} criado com ${qTDVagas} vagas.`
    }
}

const novoAdmin = new Admin("Rodrigo", "J@Google.com","2024-01-01")
console.log(novoAdmin)
console.log(novoAdmin.criarCurso("Javascript", 20))