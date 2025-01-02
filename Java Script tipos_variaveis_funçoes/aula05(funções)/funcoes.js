//Sem parâmetros e sem retorno

function exibeNomeEstudante(){

    console.log('Mari',9.5);    
}
exibeNomeEstudante();



//Com parâmetros sem retorno
function exibeNomeEstudante(nome,nota){

    console.log(`O aluno de nome ${nome} tem nota ${nota}`);    
}
exibeNomeEstudante('Mari',9.5);

//Com parâmetros e com retorno
function exibeNomeEstudante(nome,nota){

    return `O aluno de nome ${nome} tem nota ${nota}`;    
}
console.log(exibeNomeEstudante('Mari',9.5));

//função com uma condicional 
function dividir(dividendo, divisor) {
    if (divisor !== 0) {
      return dividendo / divisor;
    } else {
      return 'favor não dividir por zero';
    }
   }
   
   const resultado = dividir(10, 5);
   console.log(resultado); 
   const resultadoZero = dividir(10, 0);
   console.log(resultadoZero); 
