import { pathFromServer } from '../../utils/fromServer';
import styles from './style.module.scss';

interface GalleryProps {
    pictures: Array<any>,
    videos: Array<any>
}

const Gallery = ({pictures, videos}: GalleryProps) => {
    return (
        <div>
            <div>
                <p className={styles.title}>Фото:</p>
                <div className={styles.gallery}>
                    {
                        (pictures.length? pictures.map((picture)=>{
                            return (
                                <div key={picture.id} className={styles.item}>
                                    <img src={pathFromServer(picture.url)}/>
                                </div>
                            )
                        }) : "Фотографий нету...")
                    }
                </div>
            </div>
            <div>
                <p className={styles.title}>Видео:</p>
                <div className={styles.gallery}>
                    {
                        (videos.length? videos.map((video)=>{
                            return (
                                <div key={video.id} className={styles.item}>
                                     <video src={pathFromServer(video.url)} controls playsInline></video>
                                </div>
                            )
                        }) : "Видео нету...")
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery