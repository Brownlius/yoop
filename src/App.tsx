import styles from './App.module.scss'
import { InstaFeed } from './components/instaFeed';

export default function App() {
  return (
    <>
    <div className={styles.modal_container}>
        <div className={styles.modal_container__background}>
            <div className={styles.modal_container__background__modal}>
                <h2>I'm a Modal</h2>
                <p>Hear me roar.</p>
            </div>
        </div>
    </div>
      <div className={styles.principal}>

        <div className={styles.header}>
          <div className={styles.header__logo}>
            <img src={require("./favicon.png")} alt="Logo YooP" />
          </div>
          <div className={styles.header__perfil}>
            <div className={styles.header__perfil__foto}>
              <img src={require("./logo.png")} alt="Foto perfil" />
            </div>

            <div className={styles.header__perfil__nomes}>
              <h2>Agência Yoop</h2>
              <p>@agencia.yoop</p>
            </div>
          </div>

          <div className={styles.header__redes_sociais}>
            <a className={styles.header__redes_sociais__link} href='https://www.instagram.com/agencia.yoop/' target="_blank" rel="noreferrer">
              <img src={require("./instagram.png")} alt="Logo do Instagram"
              />
            </a>
            <a className={styles.header__redes_sociais__link} target="_blank" href='https://api.whatsapp.com/send?phone=556799486263&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.
' rel="noreferrer"><img alt="Whatsapp ícone" src={require("./phone.png")} />
            </a>
          </div>

        </div>
        <div className={styles.opcoes}>
          <h3>Portifólio</h3>
          <p>|</p>
          <h3>Sobre</h3>
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

    </>
  );
}


