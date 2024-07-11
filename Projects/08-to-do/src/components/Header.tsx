import { useState } from 'react'
import { TodoTitle } from '../declarations/types'

interface Props {
    saveToDo: ({ title }: TodoTitle) => void
}
export const Header : React.FC<Props> = ({ saveToDo }) => {
  const [titleTask, setTitleTask] = useState('')
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) : void => {
    event.preventDefault()
    saveToDo({ title: titleTask })
    setTitleTask('')
  }
  return (
    <header>
      <h1>ToDo</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => { setTitleTask(event.target.value) }}
          value={titleTask}
          placeholder='New Task'
        />
      </form>
    </header>
  )
}
