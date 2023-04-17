import {useState} from "react"
import AddTodo from "@/components/todo/AddTodo"
import TodoList from "@/components/todo/TodoList"
import RouterButton from "@/components/utils/RouterButton"

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

      <RouterButton/>
    </div>
  )
}

export default TodolistApp
