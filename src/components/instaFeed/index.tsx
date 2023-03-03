import { AnimatePresence } from 'framer-motion';
import axios from "axios"
import { useEffect, useState } from "react";
import Modal from "../Modals/InstaFeed";
import styles from './index.module.scss';
import { wait } from '@testing-library/user-event/dist/utils';

interface IFeedItem {
    id: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_url: string;
    permalink: string;

}
export function InstaFeed({ openModal }: any) {

    const [feedList, setFeedList] = useState<IFeedItem[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    async function getInstaFeed() {
        const token = process.env.REACT_APP_INSTA_TOKEN;
        const fields = "media_url,media_type,permalink";
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`

        const { data } = await axios.get(url);
        setFeedList(data.data);
        console.log(data.data);
    }
    useEffect(() => {
        getInstaFeed();
    }, [])

    return (
        <>
            <section className={styles.container_feed}>
                {feedList.filter((item, idx) => idx < 6).map(item => (
                    <button
                        className={styles.container_feed__link}
                        key={item.id}
                        onClick={() => (modalOpen ? close() : open())}
                    >
                        {item.media_type === "IMAGE" || "CAROUSEL_ALBUM" ?
                            <img className={styles.container_feed__link__img} src={item.media_url} alt="Instagram media" />
                            :
                            <video
                                className={styles.container_feed__link__video}
                                controls>
                                <source src={item.media_url} />
                            </video>}
                    </button>
                ))}

                <AnimatePresence
                    initial={false}
                    mode="wait"
                    onExitComplete={() => null}
                >

                    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
                </AnimatePresence>

            </section>
        </>
    )
}