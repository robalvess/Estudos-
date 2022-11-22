let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras?');
var remover = prompt('Você deseja remover algum item da lista?')
let categoria = 'Qual categoria essa comida se encaixa: frutas (1), laticínios (2), congelados (3), doces (4)?'
let categoriaResposta = ''

/* ADIÇÃO */

while (pergunta.toLowerCase() == 'sim') {
    let comida = prompt('O que você deseja adicionar?');
    let categoriaResposta = prompt(categoria);
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
    let pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras?');
    if (pergunta.toLocaleLowerCase() == 'nao') {
        alert(`Lista de compras: Frutas: ${frutas}. Laticínios: ${laticinios}. Congelados: ${congelados}. Doces: ${doces}.`);
        break
    }
}

/* REMOÇÃO */
var remover = prompt('Você deseja remover algum item da lista?')

let itemRemovido = []

while (remover.toLowerCase() == 'sim') {
    let nomeRemover = prompt(`Que item você deseja remover? Lista de compras: Frutas: ${frutas}. Laticínios: ${laticinios}. Congelados: ${congelados}. Doces: ${doces}.`);
    let existeLaticinio = laticinios.indexOf(nomeRemover);
    let existeFrutas = frutas.indexOf(nomeRemover);
    let existeCongelados = congelados.indexOf(nomeRemover);
    let existeDoces = doces.indexOf(nomeRemover);
    if (existeLaticinio != -1) {
        itemRemovido.push(laticinios.splice(existeLaticinio, 1));
    } else if (existeFrutas != -1) {
        itemRemovido.push(frutas.splice(existeFrutas, 1));
    } else if (existeCongelados != -1) {
        itemRemovido.push(congelados.splice(existeCongelados, 1));
    } else if (existeDoces != -1) {
        itemRemovido.push(doces.splice(existeDoces, 1));
    } else {
        alert(`O item procurado não existe na lista de compras.`)
    }
    var remover = prompt('Você deseja remover algum item da lista?');

    if (remover.toLowerCase() == 'nao') {
        break;
    }
}

alert(`Os itens removidos são: ${itemRemovido}`)

alert(`Lista de compras: Frutas: ${frutas}. Laticínios: ${laticinios}. Congelados: ${congelados}. Doces: ${doces}.`);