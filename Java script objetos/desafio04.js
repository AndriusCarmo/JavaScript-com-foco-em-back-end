/* 1 
const pessoa = {
    nome: 'Pedro',
    notas:[8.0 , 6.5 , 7.0 , 9.0],
    calcularMediaNotas:function(){
        const somaDasNotas = pessoa.notas.reduce((soma,nota)=>{
           return soma + nota
        },0);
        const media = somaDasNotas/pessoa.notas.length;
        return media.toFixed(2);
        
    }
    
    
}
const mediaCalculada = pessoa.calcularMediaNotas()
console.log(mediaCalculada);*/

//2

/*const carro ={
    marca: 'honda',
    modelo: 'city',
    ano: 2014,
    cor: 'prata' ,
}

for( let chave in carro ){
    console.log(`${chave}:${carro[chave]}`)
}

carro.Km = 30000
carro.retifica = 'true'
for( let chave in carro ){
    console.log(`${chave}:${carro[chave]}`)
}*/

//3

const carro ={
    marca: 'honda',
    modelo: 'city',
    ano: 2014,
    cor: 'prata',
    ligado: true,
    ligar: function () {
        if (!this.ligado) {
          this.ligado = true;
          console.log('O carro está ligado.');
        } else {
          console.log('O carro já está ligado.');
        }
    },
    desligar: function () {
        if (this.ligado) {
             this.ligado = false;
            'O carro está desligado.';
        } else {
          'O carro já está desligado.';
        }
    },
    obterDetalhes:function(){
        return `${this.marca}
                ${this.modelo}
                ${this.cor}
                ${this.ligado}
                ${this.ligar}
                ${this.desligar}`}

}
const valorLigar = carro.ligar
const valorDesligar = carro.desligar
console.log(valorLigar);
console.log(valorDesligar);
console.log(carro.obterDetalhes());