import {ChangeEvent, useState} from "react"
import {useMutation, UseMutationResult} from "react-query"
import axios, {AxiosError, AxiosResponse} from "axios"
import RouterButton from "@/components/utils/RouterButton"

import styles from '../../../styles/app.module.css'

interface LoginResponse {
  message: string
}

// 发送请求
async function login({username, password}: {username: string, password: string}) {
  const res = await axios.post('/api/login', {
    username,
    password
  })
  console.log(res.data)
  return res.data
}

function LoginPage() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const loginMutation: UseMutationResult<AxiosResponse<LoginResponse>,
    AxiosError, {username: string, password: string}> = useMutation(login)

  const handlerUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlerPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlerButtonClick = () => {
    loginMutation.mutate({username, password})
  }

  return (
    <>
      <div className={styles.box}>
        <h2>Login Page:</h2>
        {(loginMutation.error?.response?.data as LoginResponse).message && (
          <div style={{color: 'red'}}>{(loginMutation?.error?.response?.data as LoginResponse).message}</div>
        )}
        <label htmlFor="username">Username:</label>
        <input type="text" id='username' value={username} onChange={handlerUsernameChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password" id='password' value={password} onChange={handlerPasswordChange}/>

        <button onClick={handlerButtonClick}>Login</button>

        <RouterButton/>
      </div>
    </>
  )
}

export default LoginPage
