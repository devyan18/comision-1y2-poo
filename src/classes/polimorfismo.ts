class Animal {
    constructor (
        protected nombre: string
    ){}

    hacerSonido () {
        console.log("Hola")
    }
}

class Perro extends Animal {

    override hacerSonido () {
        console.log("Woof woof!!")
    }

}

class Gato extends Animal {

    override hacerSonido () {
        console.log("Miau Miau!!")
    }
    
}

const animal = new Animal("loro")

animal.hacerSonido()

const perro = new Perro("Firulais")

perro.hacerSonido()

const gato = new Gato("Garfield")

gato.hacerSonido()