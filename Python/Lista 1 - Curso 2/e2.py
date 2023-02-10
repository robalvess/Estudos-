def dimensoes(matriz:list):
    linhas = len(matriz)
    colunas = len(matriz[0])
    dimensao = [linhas, colunas]
    return dimensao

def soma_matrizes(m1,m2):
    dimensao_m1 = dimensoes(m1)
    dimensao_m2 = dimensoes(m2)
    matriz = []
    if dimensao_m1 == dimensao_m2:
        for i in range(dimensao_m1[0]):
            linha = []
            for j in range(dimensao_m1[1]):
                soma = m1[i][j] + m2[i][j]
                linha.append(soma)
            matriz.append(linha)
        return matriz
    else:
        return False
                
        
    
    
