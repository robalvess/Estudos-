def ordena(lista:list):
    #Algorítimo de seleção direta!
    nova_lista = lista
    tamanho = len(lista)
    for i in range(tamanho - 1):
        posicao_menor = i
        for j in range(i+1, tamanho):
            if nova_lista[posicao_menor] > nova_lista[j]:
                posicao_menor = j
        nova_lista[i], nova_lista[posicao_menor] = nova_lista[posicao_menor], nova_lista[i]
    return nova_lista

def ordenada(lista:list):
    #Essa é a resposta da questão, aqui ele verifica se a lista ordenada é igual à dada! Não sei se é a maneira mais esperta de fazer esse exercício, mas deu certo!
    nova_lista = lista[:]
    if nova_lista == ordena(lista):
        return True
    else:
        return False
    
        
        
