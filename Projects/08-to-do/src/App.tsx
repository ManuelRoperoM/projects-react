import './App.css'
import { ToDos } from './components/ToDos'
import { type TodoId, type ToDos as ToDoType, TodoTitle } from './declarations/types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const App: React.FC = () => {
  const { toDos, setToDos, filteredToDos, setFilterValue, numberTaskPending } = useFilters()
  const [parent] = useAutoAnimate()
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

  const numberCompletedTask = toDos.length - numberTaskPending

  const addTask = ({ title }: TodoTitle) : void => {
    const newId = toDos.length > 0 ? String(parseInt(toDos[toDos.length - 1].id) + 1) : '1'
    const newTask = {
      id: newId,
      title,
      completed: false
    }
    const newToDos = [...toDos, newTask]
    setToDos(newToDos)
  }

  const updateTitle = ({ id, title } : Pick<ToDoType, 'id'|'title'>) : void => {
    const toDoUpdateTitle = toDos.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title
        }
      } else {
        return task
      }
    })

    setToDos(toDoUpdateTitle)
  }

  return (
    <>
      <div className='to-do-app'>
        <div className='content'>
          <Header saveToDo={addTask} />
          <ToDos ref={parent} toDos={filteredToDos} removeItem={handleRemove} toggleTask={handleToggleCheck} changeTitle={updateTitle} />
          <Footer filterTask={handleFilter} pendingTask={numberTaskPending} deleteCompleteTask={deleteCompletedTask} numberCompletedTask={numberCompletedTask} />
        </div>
      </div>
    </>
  )
}

export default App
