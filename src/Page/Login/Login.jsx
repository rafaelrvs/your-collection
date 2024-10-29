import React from 'react'
import styles from"./Login.module.css"
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
   <form action=""className={styles.forms}>
    <h2 className={styles.login}>Login</h2>
    <label className={styles.lbForm} htmlFor="email">Email</label>
    <input className={styles.input} type="email" name="" id="email" placeholder='Digite seu Email' />
    <label className={styles.lbForm}  htmlFor="senha">Senha</label>
    <input className={styles.input}  type="password" name="" id="senha" placeholder='Digite sua Senha'/>
    <div className={styles.containerBtn}>
        <div>
        <NavLink className={styles.linkCadastro} to={"/Cadastrar"} >Cadastrar</NavLink>
        <br /><br />
        <p className={styles.linkEsqueci} >Esqueci minha senha</p>
        <br />

        </div>
    <input className={styles.btnSubmit} type="submit" value="Login"/>
    </div>

   </form>
  )
}

export default Login
