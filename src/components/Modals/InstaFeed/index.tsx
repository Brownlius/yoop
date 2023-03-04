import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import Background from '../../background/index';

import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../normalize.css';

import styles from "./index.module.scss"

export default function ModalFeed({ handleClose, text }: any) {

    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    const dropIn = {
        hidden: {
            x: "-100vw",
            opacity: 0
        }, visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 0.2,
                damping: 100,
                stiffnes: 500,
            }
        }, exit: {
            x: "0",
            opacity: 0
        }
    }
    return (
        <Background onClick={handleClose}>
            <motion.div
                className={styles.post}
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Swiper
                    className={styles.post__container__swiper}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1.05}
                    speed={400}
                    pagination={true}
                    navigation={{
                        prevEl: swiperNavPrevRef.current,
                        nextEl: swiperNavNextRef.current
                    }}
                >
                    <SwiperSlide className={styles.post__container__swiper__slide}>
                        <img alt='' src={require("../../../cachorro.jpg")} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.post__container__swiper__slide}>
                        <img alt='' src={require("../../../cachorro.jpg")} />
                    </SwiperSlide>

                    <div className={styles.post__container__swiper__navPrev}
                        ref={swiperNavPrevRef}></div>
                    <div className={styles.post__container__swiper__navNext}
                        ref={swiperNavNextRef}></div>

                </Swiper>

                <div className={styles.post__infos} >
                    <div className={styles.post__infos__cabeçalho}>
                        <div className={styles.post__infos__cabeçalho__foto}>
                            <img src={require("../../../logo.png")} alt="Foto perfil" />
                        </div>
                        <button className={styles.post__infos__cabeçalho__botao}>
                            <img src={require("../../../instagram.png")} alt="Logo do Instagram" />
                            <div className={styles.post__infos__cabeçalho__botao__seta}></div>
                        </button>
                    </div>
                    <div className={styles.post__infos__descrição}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quae expedita rerum minus, atque facilis voluptatum vitae earum rem,
                            magnam libero dolores beatae iste optio dolorum dignissimos nihil ullam corrupti. Doloremque!
                        </p>
                    </div>
                    <div className={styles.post__infos__data}>
                        31 Janeiro
                    </div>
                </div>
            </motion.div>
        </Background>
    )
}

