letras = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L',
          'Ç','Z','X','C','V','B','N','M']

def maiusculas(texto:str):
    texto_lista = list(texto)
    letras_maiusculas = ''
    i = 0
    for i in range(len(texto_lista)):
        if texto_lista[i] in letras:
            letras_maiusculas += texto_lista[i]
            i += 1
        else:
            i += 1
    return letras_maiusculas
