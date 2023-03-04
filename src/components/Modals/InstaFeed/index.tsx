import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
import Background from '../../background/index';
import { SwiperOptions } from 'swiper';


import { motion } from 'framer-motion';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../normalize.css';
import styles from "./index.module.scss"

export default function ModalFeed({ handleClose, caption, timeStamp }: any) {

    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);

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
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    }}
                >
                    <SwiperSlide className={styles.post__container__swiper__slide}>
                        <img alt='' src={require("../../../cachorro.jpg")} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.post__container__swiper__slide}>
                        <img alt='' src={require("../../../cachorro.jpg")} />
                    </SwiperSlide>

                    <div className={styles.post__container__swiper__navPrev}
                        ref={navigationPrevRef} />
                    <div className={styles.post__container__swiper__navNext}
                        ref={navigationNextRef} />

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
                        <p> {caption}
                        </p>
                    </div>
                    <div className={styles.post__infos__data}>
                        {timeStamp}
                    </div>
                </div>
            </motion.div>
        </Background>
    )
}

