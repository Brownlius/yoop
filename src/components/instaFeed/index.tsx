import axios from "axios"
import { useEffect, useState } from "react";
import styles from './index.module.scss';
interface IFeedItem {
    id: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
    media_url: string;
    permalink: string;

}

export function InstaFeed() {

    const [feedList, setFeedList] = useState<IFeedItem[]>([]);

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
        <section className={styles.container_feed}>
            {feedList.map(item => (
                <a className={styles.container_feed__link} key={item.id} href={item.permalink} target="_blank" rel="noreferrer">
                    {item.media_type === "IMAGE" || "CAROUSEL_ALBUM"? <img className={styles.container_feed__link__img} src={item.media_url} alt="Instagram media" />
                        :
                        <video
                            className={styles.container_feed__link__video}
                            controls>
                            <source src={item.media_url} />
                        </video> } 
                </a>
            ))}
        </section>)
}