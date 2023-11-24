class Car {
    constructor (
        // atributos
        public marca: string,
        public modelo: string
    ) {}

    // métodos
    arrancar () {
        console.log("Auto arrancó")
    }

    detener () {
        console.log("El auto se apagó")
    }
}