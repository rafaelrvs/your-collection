import React from 'react'
import styles from './ModalCadastro.module.css'
const ModalCadastro = () => {
  return (
    <div className={styles.containerModalCadastro}>
        <h1 className={styles.cadastroTitle}>Cadastro</h1>
        <form className={styles.FormModalCadastro}>
            <label className={styles.lbinput} htmlFor="nome">Digite seu nome</label>
            <input className={styles.inputNome} id="nome" type="text" placeholder='Nome'/>
            <label  className={styles.lbinput} htmlFor="email">Email</label>
            <input className={styles.inputEmail} id="email" type="text" placeholder='E-mail'/>
            <label  className={styles.lbinput} htmlFor="senha">Senha</label>
            <input className={styles.inputSenha} id='senha' type="password" placeholder='Senha' />
            <label  className={styles.lbinput} htmlFor="confirme">Confirme a Senha</label>
            <input className={styles.inputConfirme} id="confirme" type="password" placeholder='Confirme a senha'/>
            <input type="submit"  className={styles.btnsub} />
        </form>
      
    </div>
  )
}

export default ModalCadastro

