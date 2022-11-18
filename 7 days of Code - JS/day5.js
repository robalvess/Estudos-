let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras?');
let categoria = 'Qual categoria essa comida se encaixa: frutas (1), laticínios (2), congelados (3), doces (4)?'
let categoriaResposta = ''

function paraArray (comida) {
    if (categoriaResposta == 1) {
        frutas.push(comida)
    }
    if (categoriaResposta == 2) {
        laticinios.push(comida)
    }
    if (categoriaResposta == 3) {
        congelados.push(comida)
    }
    if (categoriaResposta == 4) {
        doces.push(comida)
    }
}

while (pergunta.toLowerCase() == 'sim') {
    let comida = prompt('O que você deseja adicionar?');
    let categoriaResposta = prompt(categoria);
    comida.paraArray(comida);
    let pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras?');
    if (pergunta.toLocaleLowerCase() == 'nao') {
        alert(`Lista de compras: Frutas: ${frutas}. Laticínios: ${laticinios}. Congelados: ${congelados}. Doces: ${doces}.`);
        break
    }
}