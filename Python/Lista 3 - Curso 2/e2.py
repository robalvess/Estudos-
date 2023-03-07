class Triangulo:
    def __init__(self, lado_a, lado_b, lado_c):
        self.a = lado_a
        self.b = lado_b
        self.c = lado_c
        
    def perimetro(self):
        self.perimetro = self.a + self.b + self.c
        return self.perimetro

    def tipo_lado(self):
        if self.a == self.b and self.a != self.c or self.b == self.c and self.a != self.b or self.a == self.c and self.a != self.b:
            return 'isóceles'
        elif self.a == self.b and self.b == self.c:
            return 'equilátero'
        else:
            return 'escaleno'

