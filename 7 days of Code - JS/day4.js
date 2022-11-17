const maximo = 10;

const minimo = 0;

let valor = Math.floor(Math.random() * (maximo - minimo + 1) + minimo); 

/*O floor me entrega o maior inteiro após o numero racional enconrado. O random me entrega qualquer valor entre 0 e 1, multiplicando isso pela expressão a seguir me da um numero racional aleatório que com o floor eu resolvo deixando-o inteiro.*/

let pergunta = prompt('Que número eu pensei?');

let tentativas = 0;

while (tentativas < 2) {
    if (pergunta == valor) {
        alert('Parabéns! Você acertou.')
        break;
    } else {
        tentativas ++;
        pergunta = prompt('Que número eu pensei?');
    }
}

if (tentativas == 2) {
    alert(`O número inicial era ${valor}!`)
}