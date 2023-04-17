import AddTodo from "@/components/todo/AddTodo"
import TodoList from "@/components/todo/TodoList"
import {useState} from "react"

import styles from '../../styles/todolist.module.css'

interface ITodo {
  id: string,
  text: string
}


function TodolistApp() {
  const [todos, setTodos] = useState<ITodo[]>([
    {id: '1', text: 'learn english'},
    {id: '2', text: 'learn react'}
  ])

  return (
    <div className={styles.box}>
      <h1>TodoList App</h1>

      <AddTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodolistApp
