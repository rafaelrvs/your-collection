import React, { useEffect, useState } from 'react'
import styles from './Modal.module.css'
import Logo from '../Logo/Logo'
import ModalLogin from './ModalLogin/ModalLogin'
import ModalCadastro from './ModalCadastro/ModalCadastro'


const Modal = () => {
  const [btnClicado, setBtnClicado] = useState({
    btnCadastro: false,
    btnLogin: false
  })



  function handleClickButton(e) {
    const value = e.target.id

    if (value === "Cadastre-se") {
      setBtnClicado({
        btnCadastro: true,
        btnLogin: false
      })
    } else if (value === "Entrar") {
      setBtnClicado({
        btnCadastro: false,
        btnLogin: true
      })
    }
  }

  return (
    <div className={styles.modalHome}>
      <div className={styles.containerLogo}>
        <Logo />
      </div>
      <div className={styles.contentHome}>
        { !btnClicado.btnCadastro && !btnClicado.btnLogin ? (
          <div className={styles.containerbtn} onClick={(e) => handleClickButton(e)}>
            <button className={styles.btnHomeModal} id="Cadastre-se">Cadastre-se</button>
            <button className={styles.btnHomeModalLogin} id="Entrar">Entrar</button>
          </div>
        ) : 
        btnClicado.btnLogin ? (
          <div className={styles.fade}>
            <ModalLogin />
          </div>
        ) : 
        btnClicado.btnCadastro ? (
          <div className={styles.fade} >
            <ModalCadastro />
          </div>
        ) : 
        setBtnClicado({
          btnCadastro: false,
          btnLogin: false
        })
      
        
        
        
        
        
        }
        
        
        
      </div>
    </div>
  )
}

export default Modal
