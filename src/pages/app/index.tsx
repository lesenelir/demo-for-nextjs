import styles from '../../styles/app.module.css'

function Login() {
  return (
    <div className={styles.form_box}>
      <label htmlFor='username_login'>
        Username:
        <input type="text" id='username_login' className={styles.form_input}/>
      </label>

      <label htmlFor='password_login'>
        Password:
        <input type="password" id='password_login' className={styles.form_input}/>
      </label>

      <button style={{width: '20%'}}>Login</button>
    </div>
  )
}

function Register() {
  return (
    <div className={styles.form_box}>
      <label htmlFor="username">Username:</label>
      <input type="text" id='username' className={styles.form_input}/>

      <label htmlFor="password">Password</label>
      <input type="password" id='password' className={styles.form_input}/>

      <button>Register</button>
    </div>
  )
}

function MyApp() {
  return (
    <div className={styles.box}>
      <h1>Login</h1>
      <Login/>
      <hr/>
      <h2>Register</h2>
      <Register/>
    </div>
  )
}

export default MyApp
