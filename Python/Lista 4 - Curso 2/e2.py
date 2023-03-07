def busca(lista:list, elemento):
    tamanho = len(lista)
    for i in range(tamanho):
        if lista[i] == elemento:
            return i
    return False
