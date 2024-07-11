import { type TodoId, type ToDos as ToDoType } from '../declarations/types'

// type Props = ToDoType
interface Props extends ToDoType {
 removeItem: ({ id }:TodoId) => void
}

export const ToDo : React.FC<Props> = ({ id, title, completed, removeItem }) => {
//   const handleCheckTask = (taskId: string) : boolean => {
//     console.log('check tarea ', taskId)
//     return !completed
//   }
  return (
    <div>
      <input id={id} type='checkbox' checked={completed} />
      <label>{title}</label>
      <button onClick={() => { removeItem({ id }) }}>x</button>
    </div>
  )
}
