import { ChangeEvent } from 'react'
import { Icon } from '@mdi/react'
import { mdiTrashCan } from '@mdi/js'
interface Props {
    filterTask: (filter : string) => void,
    pendingTask: number,
    deleteCompleteTask: () => void
}
export const Filters : React.FC<Props> = ({ filterTask, pendingTask, deleteCompleteTask }) => {
  const handleFilter = (event:ChangeEvent<HTMLSelectElement>) => {
    filterTask(event.target.value)
  }
  const handleDelete = () => {
    deleteCompleteTask()
  }
  return (
    <footer>
      <select name='select' onChange={handleFilter} defaultValue='1'>
        <option value='1'>All</option>
        <option value='2'>Pending</option>
        <option value='3'>Finish</option>
      </select>
      <p> <strong>{pendingTask}</strong> Tareas por completar</p>
      <button type='button' title='Completed task' onClick={handleDelete}> <Icon path={mdiTrashCan} size={1} /></button>
    </footer>
  )
}
