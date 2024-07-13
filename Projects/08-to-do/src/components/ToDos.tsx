import { type TodoId, type listToDos, type ToDos as ToDoTypes } from '../declarations/types'
import { ToDo } from './ToDo'
import { forwardRef } from 'react'
interface Props {
  toDos: listToDos,
  removeItem: ({ id }:TodoId) => void,
  toggleTask:({ id, completed }: Pick<ToDoTypes, 'id' | 'completed'>) => void,
  changeTitle: ({ id, title }: Pick<ToDoTypes, 'id' | 'title' >) => void,
}
export const ToDos = forwardRef<HTMLUListElement, Props>(({ toDos, removeItem, toggleTask, changeTitle }, ref) => {
  return (
    <ul className='tasks' ref={ref}>
      {
        toDos.map((task) => {
          return (
            <li className='task' key={task.id}>
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
)
