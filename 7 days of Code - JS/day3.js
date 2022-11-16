let area = prompt('Você gostaria de seguir para área de Front-End ou Back-End? Digite 1 para Front ou 2 para Back');


/*Condicionais*/

if (area == 1){
        const front = prompt('Você gostaria de aprender React ou Vue? Digite 1 para React ou 2 para Vue.');
        area = 'Front-End'
} else {
    const back = prompt('Você gostaria de aprender C# ou Java? Digite 1 para C# ou 2 para Java.');
    area = 'Back-End'
};

const escolha = prompt('Você gostaria de continuar se especializando na sua área ou gostaria de ser um desenvolvedor FullStack? Digite 1 para continuar na sua área ou 2 para ir para FullStack.')

if (escolha == 1) {
    alert(`Ótimo você resolveu continuar se especializando mais e mais em ${area}! Boa sorte nos estudos.`)
} else {
    alert(`Que legal! Agora você deve ir além do que você vê em ${area}, boa sorte!`)
}

let tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda com "ok" em caso positivo ou com "n" em caso negativo.')

while (tecnologia === "ok") {
    var linguagem = prompt ('Qual a tecnologia que você gostaria de aprender?')
    alert(`Que legal! Na Alura você encontra cursos de ${linguagem}. Desejo boa sorte nos seus estudos.`)
    tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda com "ok" em caso positivo ou com "n" em caso negativo.')
}

