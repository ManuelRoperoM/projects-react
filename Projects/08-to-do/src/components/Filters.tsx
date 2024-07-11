import { ChangeEvent } from 'react'

interface Props {
    filterTask: (filter : string) => void,
    pendingTask: number
}
export const Filters : React.FC<Props> = ({ filterTask, pendingTask }) => {
  const handleFilter = (event:ChangeEvent<HTMLSelectElement>) => {
    filterTask(event.target.value)
  }
  return (
    <footer>
      <select name='select' onChange={handleFilter} defaultValue='1'>
        <option value='1'>All</option>
        <option value='2'>Pending</option>
        <option value='3'>Finish</option>
      </select>
      <p> <strong>{pendingTask}</strong> Tareas por completar</p>
    </footer>
  )
}
