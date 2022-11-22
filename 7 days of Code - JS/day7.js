function add (numero, numero2) {
    return parseFloat(numero) + parseFloat(numero2)
}

function subtract (numero, numero2) {
    return parseFloat(numero) - parseFloat(numero2)
}

function multiply (numero, numero2) {
    return parseFloat(numero) * parseFloat(numero2)
}

function divide (numero, numero2) {
    return parseFloat(numero) / parseFloat(numero2)
}

let operacoes = ['somar', 'subtrair', 'multiplicar', 'dividir'];

var entrada = prompt('Você gostaria de somar, subtrair, multiplicar, dividir ou sair?')
var entradaLowerCase = entrada.toLowerCase()

while (operacoes.includes(entradaLowerCase)) {
    switch (entradaLowerCase) {
        case "somar" :
            var numero1 = prompt('Numero 1:');
            var numero2 = prompt('Numero 2:');
            alert(add(numero1,numero2));
            break;
        case "subtrair":
            var numero1 = prompt('Numero 1:');
            var numero2 = prompt('Numero 2:');
            alert(subtract(numero1,numero2));
            break;
        case "multiplicar":
            var numero1 = prompt('Numero 1:');
            var numero2 = prompt('Numero 2:');
            alert(multiply(numero1,numero2));
            break;
        case "dividir":
            var numero1 = prompt('Numero 1:');
            var numero2 = prompt('Numero 2:');
            alert(divide(numero1,numero2));
            break;
    }
    var entrada = prompt('Você gostaria de somar, subtrair, multiplicar, dividir ou sair?')
    var entradaLowerCase = entrada.toLowerCase()

    if (entradaLowerCase == 'sair') {
        alert('Até a próxima!');
        break
    }
}