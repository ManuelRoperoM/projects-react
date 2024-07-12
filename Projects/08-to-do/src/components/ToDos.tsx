import { type TodoId, type listToDos, type ToDos as ToDoTypes } from '../declarations/types'
import { ToDo } from './ToDo'
interface Props {
  toDos: listToDos,
  removeItem: ({ id }:TodoId) => void,
  toggleTask:({ id, completed }: Pick<ToDoTypes, 'id' | 'completed'>) => void,
  changeTitle: ({ id, title }: Pick<ToDoTypes, 'id' | 'title' >) => void
}
export const ToDos : React.FC<Props> = ({ toDos, removeItem, toggleTask, changeTitle }) => {
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
                toggleTask={toggleTask}
                changeTitle={changeTitle}
              />
            </li>
          )
        })
        }
    </ul>
  )
}
