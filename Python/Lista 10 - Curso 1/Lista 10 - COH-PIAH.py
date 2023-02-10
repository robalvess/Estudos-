import re

def le_assinatura():
    '''A funcao le os valores dos tracos linguisticos do modelo e devolve uma assinatura a ser comparada com os textos fornecidos'''
    print("Bem-vindo ao detector automático de COH-PIAH.")
    print("Informe a assinatura típica de um aluno infectado:")

    wal = float(input("Entre o tamanho médio de palavra:"))
    ttr = float(input("Entre a relação Type-Token:"))
    hlr = float(input("Entre a Razão Hapax Legomana:"))
    sal = float(input("Entre o tamanho médio de sentença:"))
    sac = float(input("Entre a complexidade média da sentença:"))
    pal = float(input("Entre o tamanho medio de frase:"))

    return [wal, ttr, hlr, sal, sac, pal]

def le_textos():
    '''A funcao le todos os textos a serem comparados e devolve uma lista contendo cada texto como um elemento'''
    i = 1
    textos = []
    texto = str(input("Digite o texto " + str(i) +" (aperte enter para sair):"))
    while texto:
        textos.append(texto)
        i += 1
        texto = str(input("Digite o texto " + str(i) +" (aperte enter para sair):"))

    return textos

def separa_sentencas(texto):
    '''A funcao recebe um texto e devolve uma lista das sentencas dentro do texto'''
    sentencas = re.split(r'[.!?]+', texto)
    if sentencas[-1] == '':
        del sentencas[-1]
    return sentencas

def separa_frases(sentenca):
    '''A funcao recebe uma sentenca e devolve uma lista das frases dentro da sentenca'''
    return re.split(r'[,:;]+', sentenca)

def separa_palavras(frase):
    '''A funcao recebe uma frase e devolve uma lista das palavras dentro da frase'''
    return frase.split()

def n_palavras_unicas(lista_palavras):
    '''Essa funcao recebe uma lista de palavras e devolve o numero de palavras que aparecem uma unica vez'''
    freq = dict()
    unicas = 0
    for palavra in lista_palavras:
        p = palavra.lower()
        if p in freq:
            if freq[p] == 1:
                unicas -= 1
            freq[p] += 1
        else:
            freq[p] = 1
            unicas += 1

    return unicas

def n_palavras_diferentes(lista_palavras):
    '''Essa funcao recebe uma lista de palavras e devolve o numero de palavras diferentes utilizadas'''
    freq = dict()
    for palavra in lista_palavras:
        p = palavra.lower()
        if p in freq:
            freq[p] += 1
        else:
            freq[p] = 1

    return len(freq)

def todas_as_palavras(texto):
    sentenças = separa_sentencas(texto)
    frases = []
    palavras = []
    for i in range(len(sentenças)):
        frases += separa_frases(sentenças[i])
    for i in range(len(frases)):
        palavras += separa_palavras(frases[i])
    return palavras

def tamanho_medio_palavra(texto):
    ''' Essa função calcula o tamanho medio das palavras de um texto como um todo. '''
    palavras = todas_as_palavras(texto)
    numero_palavras = len(palavras)
    tamanho_das_palavras = 0
    for i in range(numero_palavras):
        tamanho_das_palavras += len(palavras[i])
    media = tamanho_das_palavras/numero_palavras
    return media

def type_token(texto):
    ''' Essa função calcula a razão entre o numero de palavras diferentes de um texto pelo numero total de palavras.'''
    palavras = todas_as_palavras(texto)
    palavras_diferentes = n_palavras_diferentes(palavras)
    type_token = palavras_diferentes/len(palavras)
    return type_token

def hapax_legomana(texto):
    '''Essa função calcula a razão entre o numero de palavras unicas de um texto pelo numero total de palavras.'''
    palavras = todas_as_palavras(texto)
    palavras_unicas = n_palavras_unicas(palavras)
    hapax_legomana = palavras_unicas / len(palavras)
    return hapax_legomana

def tamanho_medio_sentenca(texto):
    '''Essa função calcula a razão entre o numero de caracteres em todas as sentenças pelo número total de sentenças.'''
    sentencas = separa_sentencas(texto)
    numero_sentencas = len(separa_sentencas(texto))
    caracteres = 0
    for i in range(len(sentencas)):
        caracteres += len(sentencas[i])
    media = caracteres / numero_sentencas
    return media

def todas_as_frases(texto):
    sentencas = separa_sentencas(texto)
    frases = []
    for i in range(len(sentencas)):
        frases += separa_frases(sentencas[i])
    return frases

def complexidade_sentenca(texto):
    '''Essa função calcula o número total de frases dividido pelo número de sentenças.'''
    numero_sentencas = len(separa_sentencas(texto))
    sentencas = separa_sentencas(texto)
    frases = todas_as_frases(texto)
    numero_frases = len(frases)
    complexidade = numero_frases / numero_sentencas
    return complexidade

def tamanho_medio_frase(texto):
    '''Essa função calcula a razão entre o numero de caracteres em todas as frases pelo numero de frases.'''
    frases = todas_as_frases(texto)
    numero_frases = len(frases)
    caracteres = 0
    for i in range(len(frases)):
        caracteres += len(frases[i])
    medio = caracteres / numero_frases
    return medio

def compara_assinatura(as_a, as_b):
    ''' Essa funcao recebe duas assinaturas de texto e deve devolver o grau de similaridade nas assinaturas.'''
    soma = 0
    for i in range(len(as_a)):
        valor = abs(as_a[i] - as_b[i])
        soma += valor
    similaridade = soma / 6
    return similaridade
    

def calcula_assinatura(texto):
    a = float(tamanho_medio_palavra(texto))
    b = float(type_token(texto))
    c = float(hapax_legomana(texto))
    d = float(tamanho_medio_sentenca(texto))
    e = float(complexidade_sentenca(texto))
    f = float(tamanho_medio_frase(texto))
    assinatura = [a, b, c, d, e, f]
    return assinatura

def avalia_textos(textos, ass_cp):
    '''IMPLEMENTAR. Essa funcao recebe uma lista de textos e uma assinatura ass_cp e deve devolver o numero (1 a n) do texto com maior probabilidade de ter sido infectado por COH-PIAH.'''
    comparacao = 0
    maximo = 9999999999
    numero_texto = 0
    for i in range(len(textos)):
        assinatura = compara_assinatura(calcula_assinatura(textos[i]), ass_cp)
        if assinatura < maximo:
            numero_texto = i + 1
            maximo = assinatura
    return numero_texto
    print('O autor do texto', numero_texto, 'está infectado com COH-PIAH')

def teste():
    texto = "Então resolveu ir brincar com a Máquina pra ser também imperador dos filhos da mandioca. Mas as três cunhas deram muitas risadas e falaram que isso de deuses era gorda mentira antiga, que não tinha deus não e que com a máquina ninguém não brinca porque ela mata. A máquina não era deus não, nem possuía os distintivos femininos de que o herói gostava tanto. Era feita pelos homens. Se mexia com eletricidade com fogo com água com vento com fumo, os homens aproveitando as forças da natureza. Porém jacaré acreditou? nem o herói! Se levantou na cama e com um gesto, esse sim! bem guaçu de desdém, tó! batendo o antebraço esquerdo dentro do outro dobrado, mexeu com energia a munheca direita pras três cunhas e partiu. Nesse instante, falam, ele inventou o gesto famanado de ofensa: a pacova."
    valores = [4.507142857142857, 0.6928571428571428, 0.55, 70.81818181818181, 1.8181818181818181, 38.5]
    valores_obtidos = [tamanho_medio_palavra(texto), type_token(texto), hapax_legomana(texto), tamanho_medio_sentenca(texto), complexidade_sentenca(texto)
                       , tamanho_medio_frase(texto)]
    for i in range(len(valores_obtidos)):
        if valores_obtidos[i] == valores[i]:
            pass
        else:
            print('Erro no tipo', i,'\n Valor Esperado:', valores[i], '\n Valor obtido:', valores_obtidos[i])
teste()
ass_cp = le_assinatura()
textos = le_textos()

avalia_textos(textos, ass_cp)
