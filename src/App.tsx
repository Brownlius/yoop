import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import styles from './App.module.scss'
import { InstaFeed } from './components/instaFeed';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(!modalOpen); console.log(!modalOpen)
  }

  return (
    <>
      {
        modalOpen === false &&
        <div className={styles.modal_container} >
          <div className={styles.modal_container__background}>
            <div className={styles.modal_container__background__post}>
              <Swiper
                className={styles.modal_container__background__post__img}
                slidesPerView={1} speed={500} loop={true} css-mode="true"
              >
                <SwiperSlide>
                  <img src={require("./cachorro.jpg")} alt="Logo YooP" />
                </SwiperSlide>
                
              </Swiper>
              <div className={styles.modal_container__background__post__infos} >
                <div className={styles.modal_container__background__post__infos__cabeçalho}>
                  <div className={styles.modal_container__background__post__infos__cabeçalho__foto}>
                    <img src={require("./logo.png")} alt="Foto perfil" />
                  </div>
                  <button>
                    <img src={require("./instagram.png")} alt="Logo do Instagram" />
                  </button>
                </div>
                <div className={styles.modal_container__background__post__infos__descrição}>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae expedita rerum minus, atque facilis voluptatum vitae earum rem,
                    magnam libero dolores beatae iste optio dolorum dignissimos nihil ullam corrupti. Doloremque!
                  </p>
                </div>
                <div>
                  31 Janeiro
                </div>
              </div>
            </div>
          </div>
        </div>
      }
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
            < InstaFeed openModal={openModal} />
          </div>
        </div>
      </div >

    </>
  );
}


