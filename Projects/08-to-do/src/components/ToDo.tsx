import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { type TodoId, type ToDos as ToDoType } from '../declarations/types'

// type Props = ToDoType
interface Props extends ToDoType {
 removeItem: ({ id }:TodoId) => void,
 toggleTask: ({ id, completed }: Pick<ToDoType, 'id' | 'completed'>) => void,
 changeTitle: ({ id, title }: Pick<ToDoType, 'id' | 'title'>) => void
}

export const ToDo : React.FC<Props> = ({ id, title, completed, removeItem, toggleTask, changeTitle }) => {
  const [doubleClick, setDoubleClick] = useState(false)
  const [updateTitle, setUpdateTitle] = useState(title)
  const toggleCheck = (event:ChangeEvent<HTMLInputElement>) :void => {
    toggleTask({
      id,
      completed: event.target.checked
    })
  }

  const handleDoubleClick = () => {
    setDoubleClick(true)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) : void => {
    if (event.key === 'Enter') {
      changeTitle({ id, title: updateTitle })
      setDoubleClick(false)
    }
  }

  return (
    <div className='task-check'>
      <div className='label-input'>
        <input className='check-task' id={id} type='checkbox' checked={completed} onChange={toggleCheck} />
        {
        doubleClick
          ? <input className='input-task' value={updateTitle} onKeyDown={handleKeyDown} onChange={(event) => { setUpdateTitle(event.target.value) }} autoFocus />
          : <label className='label-task' onDoubleClick={handleDoubleClick}>{updateTitle}</label>
        }
      </div>
      <div className='task-btn'>
        <button className='task-btn' onClick={() => { removeItem({ id }) }}>x</button>
      </div>
    </div>
  )
}
