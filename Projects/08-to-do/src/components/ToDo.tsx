import { ChangeEvent } from 'react'
import { type TodoId, type ToDos as ToDoType } from '../declarations/types'

// type Props = ToDoType
interface Props extends ToDoType {
 removeItem: ({ id }:TodoId) => void,
 toggleTask: ({ id, completed }: Pick<ToDoType, 'id' | 'completed'>) => void
}

export const ToDo : React.FC<Props> = ({ id, title, completed, removeItem, toggleTask }) => {
  const toggleCheck = (event:ChangeEvent<HTMLInputElement>) :void => {
    toggleTask({
      id,
      completed: event.target.checked
    })
  }
  return (
    <div>
      <input id={id} type='checkbox' checked={completed} onChange={toggleCheck} />
      <label>{title}</label>
      <button onClick={() => { removeItem({ id }) }}>x</button>
    </div>
  )
}
