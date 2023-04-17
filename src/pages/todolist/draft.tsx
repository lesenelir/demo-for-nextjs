import {useState} from "react"

import styles from '../../styles/todolist.module.css'

function TodolistAll() {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Array<string>>([])
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleAddTodo = () => {
    setTodos([todo, ...todos])
    setTodo('')
  }

  const handleDelete = (currentTodo) => {
    const newTodos = todos.filter(item => item !== currentTodo)
    setTodos(newTodos)
  }

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  const handleEditInput = (e, currentTodo) => {
    // 其他元素保持不变，当前元素为e.target.value
    const newValue = e.target.value
    const newTodos = todos.map(todo => todo !== currentTodo ? todo : newValue)
    setTodos(newTodos)
  }

  return (
    <div className={styles.box}>
      <h1>TodoList App</h1>

      <label>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={handleAddTodo}>Add</button>
      </label>

      {
        todos.map(item => (
          <div key={item}>
            {!isEdit ? item : <input type="text" value={item} onChange={(e) => handleEditInput(e, item)} />} {' '}
            <button onClick={handleEdit}>{!isEdit ? 'Edit' : 'Save'}</button> {' '}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        ))
      }

    </div>
  )
}

export default TodolistAll
