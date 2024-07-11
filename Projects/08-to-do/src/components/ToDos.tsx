import { type TodoId, type listToDos } from '../declarations/types'
import { ToDo } from './ToDo'
interface Props {
  toDos: listToDos,
  removeItem: ({ id }:TodoId) => void
}
export const ToDos : React.FC<Props> = ({ toDos, removeItem }) => {
  return (
    <ul>
      {
        toDos.map((task) => {
          return (
            <li key={task.id}>
              <ToDo
                id={task.id}
                title={task.title}
                completed={task.completed}
                removeItem={removeItem}
              />
            </li>
          )
        })
        }
    </ul>
  )
}
