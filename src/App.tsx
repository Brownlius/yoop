import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.principal}>
      <div className={styles.principal__box}>
        <div>
          <img className={styles.logo} alt="logo">logo</img>
          <div className={styles.perfil}>
            <img className={styles.perfil__img} alt="perfil"></img>
            <div className={styles.perfil__infos}>
              <h2>Agencia yoop</h2>
              <p>@Yoop</p>
            </div>
          </div>

          <div className={styles.redes_sociais}>
            <div className={styles.redes_sociais__insta}>insta</div>
          </div>
        </div>
      </div>
      <div className={styles.principal__box}></div>
      <div className={styles.principal__box}></div>
      <div className={styles.principal__box}></div>
      <div className={styles.principal__box}></div>
      <div className={styles.principal__box}></div>
    </div>
  );
}


