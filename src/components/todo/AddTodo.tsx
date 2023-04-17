import {useState} from "react"

interface ITodo {
  id: string,
  text: string
}

interface IProps {
  todos: ITodo[],
  setTodos: (value: (((prevState: ITodo[]) => ITodo[]) | ITodo[])) => void
}

function AddTodo(props: IProps) {
  const [text, setText] = useState<string>('')
  const {todos, setTodos} = props

  const handleAddTodos = () => {
    setTodos([{id: String(new Date().getTime()), text: text}, ...todos])
    setText('')
  }

  return (
    <div style={{marginTop: '10px'}}>
      <input
        type="text"
        placeholder='Add Todo Item'
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> {' '}
      <button onClick={handleAddTodos}>Add</button>
    </div>
  )
}

export default AddTodo
