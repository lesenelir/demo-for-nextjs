import axios from "axios"
import RouterButton from "@/components/utils/RouterButton"
import {ChangeEvent, useState} from "react"
import {useMutation} from "react-query"

import styles from '../../../styles/app.module.css'

async function createAccount({username, password}: {username: string, password: string}) {
  await axios.post('/api/register', {
    username,
    password
  })
}

function RegisterPage() {
  // 此处可以用state也可以用ref来对表单的控件进行监听 => 受控组件 or 非受控组件
  // 受控组件可以适用于绝大多数方案；但非受控组件有时候可以让代码更加简洁
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // 利用react-query将请求封装成一个Mutation，一般而言，post请求封装为Mutation
  const createAccountMutation = useMutation(createAccount, {
    onSuccess() {
      alert('created!')
    }
  })

  const handlerUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlerPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlerCreateClick = () => {
    createAccountMutation.mutate({username, password})
  }

  return (
    <div className={styles.box}>
      <h2>App Register Page:</h2>

      <label htmlFor="username">Username:</label>
      <input type="text" id='username' value={username} onChange={handlerUsernameChange}/>

      <label htmlFor="password">Password:</label>
      <input type="password" id='password' value={password} onChange={handlerPasswordChange}/>

      <button
        disabled={createAccountMutation.isLoading}
        onClick={handlerCreateClick}
      >Creat a new Account</button>
      <RouterButton/>
    </div>
  )

}

export default RegisterPage
