import { useState } from 'react'
import './App.css'
import { ToDos } from './components/ToDos'
import { type TodoId } from './declarations/types'
const listToDos = [
  {
    id: '1',
    title: 'Tarea 1',
    completed: false
  },
  {
    id: '2',
    title: 'Tarea 2',
    completed: false
  },
  {
    id: '3',
    title: 'Tarea 3',
    completed: true
  }
]

const App: React.FC = () => {
  const [toDos, setToDos] = useState(listToDos)
  const handleRemove = ({ id } : TodoId): void => {
    const newToDos = toDos.filter((task) => task.id !== id)
    setToDos(newToDos)
  }
  // const handleCheck = (itemId: string): void => {

  // }
  return (
    <>
      <h1>ToDo</h1>
      <ToDos toDos={toDos} removeItem={handleRemove} />
    </>
  )
}

export default App
