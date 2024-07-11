import { ChangeEvent } from 'react'

interface Props {
    filterTask: (filter : string) => void
}
export const Filters : React.FC<Props> = ({ filterTask }) => {
  const handleFilter = (event:ChangeEvent<HTMLSelectElement>) => {
    filterTask(event.target.value)
  }
  return (
    <footer>
      <select name='select' onChange={handleFilter}>
        <option value='1' selected>All</option>
        <option value='2'>Pending</option>
        <option value='3'>Finish</option>
      </select>
    </footer>
  )
}
