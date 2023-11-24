class Person {
    constructor (
        public name: string,
        public age: number
    ) {}
}

class Programmer extends Person {
    constructor (
        propName: string,
        propAge: number,
        public laguages: string[]
    ) {
        super(propName, propAge)
    }

    getName () {
        console.log(this.name) // desde una subclase o clase hija
    }
}

const augusto = new Programmer("Augusto", 25, ["Javascript", "Typescript"])

augusto.name // desde afuera de la clase