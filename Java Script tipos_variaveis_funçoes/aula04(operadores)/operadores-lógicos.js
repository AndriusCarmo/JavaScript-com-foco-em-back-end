const notaFinal= 7;
const faltas = 3;
const advertencias = 0;

if(notaFinal<7 || faltas >4){
    console.log('Resprovado')


}else{

    console.log('não foi reprovado por faltas')
}


if(faltas<2 && !advertencias ){

    
    console.log('Recebeu bonus')


}else{

    console.log('não recebeu')
}

