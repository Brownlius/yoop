import styles from './App.module.scss'
import { InstaFeed } from './components/instaFeed';

export default function App() {
  return (
    <>
      <div className={styles.principal}>

        <div className={styles.header}>
          <div className={styles.header__perfil}>
            <img src={require("./logo.png")} className={styles.header__perfil__logo} alt="Logo YooP" />
            <div className={styles.header__perfil__infos}>
              <img src={require("./logo.png")} alt="Foto perfil" />
              <div className={styles.header__perfil__infos__nomes}>
                <h2>Agencia YooP</h2>
                <p>@agencia.yoop</p>
              </div>
            </div>

            <div className={styles.header__perfil__redes_sociais}>
              <img className={styles.header__perfil__redes_sociais__logos} src={require("./instagram.png")} alt="Logo do Instagram"
              />
              <img src={require("./facebook.png")} alt="Logo do Instagram" className={styles.header__perfil__redes_sociais__logos} />
            </div>
          </div>
          <div className={styles.header__opcoes}>
            <h3>Portifólio</h3>
            <p>|</p>
            <h3>Sobre</h3>
          </div>
        </div>
        <div className={styles.fundo}>
          <div className={styles.fundo__box}>
            <div className={styles.fundo__box__container_icone}>
              <img src={require("./instagram.png")} alt="Insta logo" />
            </div>
            < InstaFeed />

          </div>
        </div>
      </div >

      <div className={styles.whatsapp}>
        <a href='https://api.whatsapp.com/send?phone=5567981031515&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.
'><img alt="Whatsapp ícone" src={require("./phone.png")} />
        </a></div>
    </>
  );
}


