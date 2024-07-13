import { useEffect, useState } from 'react'
import { listToDos } from '../data/task'
import { listToDos as listOfTodos } from '../declarations/types'
import { type listToDos as ToDos } from '../declarations/types'

interface useFiltersReturn {
    toDos: ToDos,
    setToDos: React.Dispatch<React.SetStateAction<ToDos>>,
    filteredToDos: ToDos,
    setFilterValue: React.Dispatch<React.SetStateAction<string>>,
    numberTaskPending: number
}

export const useFilters = (): useFiltersReturn => {
  const [numberTaskPending, setNumberTaskPending] = useState(0)
  const [toDos, setToDos] = useState(listToDos)
  const [filteredToDos, setFilteredToDos] = useState(listToDos)
  const [filterValue, setFilterValue] = useState('1')
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

  return { toDos, setToDos, filteredToDos, setFilterValue, numberTaskPending }
}
