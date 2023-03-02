import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import Background from '../../background/index';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../normalize.css';

import styles from "/index.module.scss"
import { motion } from 'framer-motion';

export default function ModalFeed({ handleClose, text }: any) {

    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    return (
        <Background onClick={handleClose}>
            <motion.div
                className={styles.modal_container__background__post__container}
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}                
            >
                <Swiper
                    className={styles.modal_container__background__post__container__swiper}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1.05}
                    speed={400}
                    pagination={true}
                    navigation={{
                        prevEl: swiperNavPrevRef.current,
                        nextEl: swiperNavNextRef.current
                    }}
                >
                    <SwiperSlide className={styles.modal_container__background__post__container__swiper__slide}>
                        <img alt='' src={require("./cachorro.jpg")} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.modal_container__background__post__container__swiper__slide}>
                        <img alt='' src={require("./cachorro.jpg")} />
                    </SwiperSlide>

                    <div className={styles.modal_container__background__post__container__swiper__navPrev}
                        ref={swiperNavPrevRef}></div>
                    <div className={styles.modal_container__background__post__container__swiper__navNext}
                        ref={swiperNavNextRef}></div>

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
                    </div></div>
            </motion.div>


        </Background>
    )
}

