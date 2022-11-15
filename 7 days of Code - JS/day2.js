const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está usando?');

const mensagem = `Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`


alert(mensagem);

const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

const positiva = "Muito bom! Continue estudando e você terá muito sucesso."

const negativa = "Ahh que pena... Já tentou aprender outras linguagens?"

if (pergunta == 1) {
    alert(positiva)
} else {
    alert(negativa)
};