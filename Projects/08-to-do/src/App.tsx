import { useState } from 'react'
import './App.css'
import { ToDos } from './components/ToDos'
import { type TodoId, type ToDos as ToDoType } from './declarations/types'
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
  const handleToggleCheck = ({ id, completed }: Pick<ToDoType, 'id'|'completed'>): void => {
    const checkedTodos = toDos.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed
        }
      } else {
        return task
      }
    })
    setToDos(checkedTodos)
  }
  return (
    <>
      <h1>ToDo</h1>
      <ToDos toDos={toDos} removeItem={handleRemove} toggleTask={handleToggleCheck} />
    </>
  )
}

export default App
