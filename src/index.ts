import express from "express"
import { ListaDeTareas } from "./tareas"

const app = express()


app.use(express.json())

const listDeTareas = new ListaDeTareas()

app.get("/", (req, res) => {
  const tareas = listDeTareas.find()
  res.json(tareas)
})

app.post('/', (req, res) => {
  const {title, done} = req.body 

  const newTarea = listDeTareas.create(title, done)

  res.status(201).json(newTarea)
})

app.patch("/:tareaId", (req, res) => {

  const tareaId = req.params.tareaId

  listDeTareas.toggle(tareaId)

  res.sendStatus(200)
})


app.listen(4000, () => {
  console.log(" Server on port 4000 ")
})