import { v4 as uuid } from "uuid"

// TODO: investigar los principios SOLID

export class Tarea {

    public readonly id = uuid()

    constructor (
        private title: string,
        private done: boolean
    ){}

    toggleComplete () {
        this.done = !this.done
    }

    getData () {
        return {
            id: this.id,
            title: this.title,
            done: this.done
        }
    }
}


export class ListaDeTareas {
    private lista: Tarea[] = []

    create (title: string, done: boolean) {
        const newTarea =  new Tarea(title, done)

        this.lista.push(newTarea)

        return newTarea.getData()
    }

    toggle (id: string) {
        this.lista.map((tarea) => {
            if (tarea.id !== id) return tarea
        
            tarea.toggleComplete()
            return tarea
        })
    }

    find () {
        const formattedList = this.lista.map(tarea => tarea.getData())
        return formattedList
    }
}