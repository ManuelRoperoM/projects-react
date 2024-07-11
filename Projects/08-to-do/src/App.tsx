import { useEffect, useState } from 'react'
import './App.css'
import { ToDos } from './components/ToDos'
import { type TodoId, type ToDos as ToDoType, type listToDos as listOfTodos } from './declarations/types'
import { Filters } from './components/Filters'
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
    completed: false
  }
]

const App: React.FC = () => {
  const [toDos, setToDos] = useState(listToDos)
  const [filteredToDos, setFilteredToDos] = useState(listToDos)
  const [filterValue, setFilterValue] = useState('1')
  const [numberTaskPending, setNumberTaskPending] = useState(0)

  // Efectos
  useEffect(() => {
    // Handle filters tasks
    let filterToDos : listOfTodos = []
    if (filterValue === '1') {
      filterToDos = toDos
    } else if (filterValue === '2') {
      filterToDos = toDos.filter((task) => !task.completed)
    } else if (filterValue === '3') {
      filterToDos = toDos.filter((task) => task.completed)
    }
    setFilteredToDos(filterToDos)
  }, [toDos, filterValue])

  useEffect(() => {
    // Calculate pending tasks
    let taskPending : number = 0
    toDos.forEach((element) => {
      if (!element.completed) { taskPending++ }
    })
    setNumberTaskPending(taskPending)
  }, [toDos])

  // Funciones
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
  const handleFilter = (filter : string): void => {
    setFilterValue(filter)
  }

  const deleteCompletedTask = (): void => {
    const inProgresTasks = toDos.filter((task) => !task.completed)
    setToDos(inProgresTasks)
  }

  return (
    <>
      <h1>ToDo</h1>
      <ToDos toDos={filteredToDos} removeItem={handleRemove} toggleTask={handleToggleCheck} />
      <Filters filterTask={handleFilter} pendingTask={numberTaskPending} deleteCompleteTask={deleteCompletedTask} />
    </>
  )
}

export default App
