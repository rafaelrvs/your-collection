import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Cadastrar.module.css";

const Cadastrar = () => {
  const navigate = useNavigate();

  return (
    <form className={styles.mainCadastro}>
      <label htmlFor="email" className={styles.label}>Email</label>
      <input type="email" id="email" name="email" required className={styles.input} />
      
      <label htmlFor="password" className={styles.label}>Senha</label>
      <input type="password" id="password" name="password" required className={styles.input} />
      
      <label htmlFor="confirmPassword" className={styles.label}>Confirme a senha</label>
      <input type="password" id="confirmPassword" name="confirmPassword" required className={styles.input} />
      
      <div className={styles.actions}>
        <p onClick={() => navigate(-1)} className={styles.link}>Voltar</p>
        <p className={styles.link}>Esqueci a senha</p>
        <input type="submit" value="Cadastrar" className={styles.submitButton} />
      </div>
    </form>
  );
};

export default Cadastrar;
