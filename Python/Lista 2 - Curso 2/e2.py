'''
Escrever uma função que recebe uma lista de Strings contendo nomes de pessoas como parãmetro e
devolve o nome mais curto. A função deve ignorar espaços antes de depois do nome e deve devolver
o nome "capitalizado".
'''

def menor_nome(nomes:list):
    tamanho = len(nomes)
    mais_curto = 0
    tamanho_nome = len(nomes[0].strip())
    for i in range(tamanho):
        if len(nomes[i].strip()) < tamanho_nome:
            mais_curto = i
    return nomes[mais_curto].strip().capitalize()
    
