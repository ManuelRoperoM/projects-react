export interface ToDos {
  id: string
  title:string
  completed:boolean
}

export type TodoId = Pick<ToDos, 'id'>
export type TodoTitle = Pick<ToDos, 'title'>
export type TodoCompleted = Pick<ToDos, 'completed'>

export type listToDos = ToDos[]
