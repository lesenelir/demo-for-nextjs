import {ChangeEvent, useState} from "react"

interface ITodo {
  id: string,
  text: string
}

interface IProps {
  todos: ITodo[],
  setTodos: (value: (((prevState: ITodo[]) => ITodo[]) | ITodo[])) => void
}

function TodoList(props: IProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const {todos, setTodos} = props

  const handleDelete = (currentTodoId: string) => {
    const newTodosData = todos.filter(item => item.id !== currentTodoId)
    setTodos(newTodosData)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, currentTodo: ITodo) => {
    // 其他元素保持不变，当前元素为e.target.value
    const newValue = {id: String(new Date().getTime()), text: e.target.value}
    const newTodosData = todos.map(item => item.id !== currentTodo.id ? item : newValue)
    setTodos(newTodosData)
  }

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  return (
    <>
     <ul>
       {todos.map((item, index) => (
         <li key={item.id}>
           {
             !isEdit
               ? item.text
               : <input type="text" value={item.text} onChange={(e) => handleChange(e, item)}/>
           }
           <button onClick={handleEdit}>{!isEdit ? 'Edit' : 'Save'}</button>{' '}
           <button onClick={() => handleDelete(item.id)}>Delete</button>
         </li>
       ))}
     </ul>
    </>
  )
}

export default TodoList
