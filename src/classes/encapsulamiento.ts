// private == solo puede ser accedido desde la propia clase
// public == desde todos lados
// protected == desde la propia clase y las subclases


// definir atributos


class A {
    atributo: string

    constructor ( propiedad: string ){
        this.atributo = propiedad
    }
}

class B {
    constructor ( public propiedad: string ){}
}