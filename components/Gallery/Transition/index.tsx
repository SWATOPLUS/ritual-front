import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { pathFromServer } from "../../../utils/fromServer";
import styles from './style.module.scss';

interface TransitionGalleryProps {
    idGallery: string | string[] | undefined,
    pictures: Array<any>,
    videos: Array<any>
}

export const TransitionGallery = ({pictures, idGallery, videos}: TransitionGalleryProps) => {
    const router = useRouter()
    const handlePageGallery = () => {
        router.push(`/page/gallery/${idGallery}`);
    }
    return (
        <div className={styles.con}>
            <div className={styles.gallery_con}>
                <div className={styles.gallery}>
                    {pictures.map((picture: any)=> {
                        return (
                            <div key={picture.id} className={styles.item}>
                                <img src={pathFromServer(picture.url)}/>
                            </div>
                        )
                    })}
                    {videos.map((video)=> {
                        return <div key={video.id} className={styles.item} >
                            <video src={pathFromServer(video.url)} controls playsInline></video>
                        </div>
                    })}
                </div>
                <div className={styles.hidden}>
                </div>
                
            </div>
            
            <Button className={styles.btn} onClick={handlePageGallery}>Перейти в галлерею</Button>
        </div>
       
    )
}