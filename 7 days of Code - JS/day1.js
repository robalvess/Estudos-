let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

/* Quando usamos == estamos comparando por resultado, o JS converte o que você quer comparar e verifica. Ao usarmos === é comparado valor e tipo, i.e, só vai ser True se for exatamente igual. Por exemplo, se usarmos === entre numeroUm e stringUm dará false, pois, apesar de terem o mesmo valor eles tem tipos diferentes (string e int). O irmão do == -> !=; o irmão do === -> !==*/

if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor.')
};

if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else{
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.')
}

if (numeroDez == stringDez && numeroDez!== stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.')
} else{
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor.')
}

