import User from "./User.js";

class Docente extends User {
    constructor(nome,email,nascimento,role = "Docente",ativo="true"){
        super(nome,email,nascimento,role,ativo)
    }
    aprovarEstudante(estudante,curso){
        return `estudante ${estudante} passou no curso de ${curso} 
        responsavel pelo curso ${this.nome}.`
    }
}

const novaDocente = new Docente("Ana", "A@a.com","2024-01-01");
console.log(novaDocente);
console.log(novaDocente.aprovarEstudante("Juliana","javascript"));