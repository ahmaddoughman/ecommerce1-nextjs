import LoginForm from '@/components/loginForm/loginForm';
import { handleGithubLogin, login } from '@/lib/action';
import React from 'react'
import styles from "./login.module.css"

export default async function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

          <form action={handleGithubLogin}>
            <button className={styles.github}>Login with Github</button>
          </form>
          
          <LoginForm />

      </div>
      
    </div>
  )
}
