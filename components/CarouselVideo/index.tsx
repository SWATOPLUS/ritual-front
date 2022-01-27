import Slider from "react-slick";
import { Button } from 'react-bootstrap';
import styles from './style.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { addImageReq } from "../../api/page";
import { pathFromServer } from "../../utils/fromServer";
import Loader from "../Loader";


const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
          breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

interface CarouselVideoProps {
    videos: Array<any>,
    setVideos: Function
}

export const CarouselVideo = ({videos, setVideos}: CarouselVideoProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.addEventListener('change', addVideo);
        return () => { inputRef.current?.removeEventListener('change', addVideo); }
    })

    const addVideo = async (ev: any) => {
        const countFiles = ev.target.files.length
        const emptyFiles = Array(countFiles).fill({ isLoading: true});
        setVideos([...videos, ...emptyFiles]);
        await addImageReq(ev.target?.files)
            .then((res: any) => {
                console.log(res.data);
                setVideos([...videos, ...res.data])
                //
            }).catch(() => {
                setVideos(videos.filter((video)=> !video?.isLoading))
            })
    } 

    const handleAddVideo = () => inputRef.current?.click();

    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                {videos.map((video, ind) => {
                    if(video?.isLoading) {
                        return (
                            <div key={ind} className={styles.item}>
                                <span>
                                    <Loader/>
                                </span>
                                {/* <video src={pathFromServer(video.url)}></video> */}
                                
                            </div> 
                        )
                    } 
                    return (
                        <div key={video.id} className={styles.item}>
                            <div className={styles.content}>
                                <video src={pathFromServer(video.url)} controls></video>
                            </div>
                        </div> 
                    )
                })}
            </Slider>
            <input ref={inputRef} type="file" multiple style={{display: 'none'}} accept="video/*"/>
            <Button onClick={handleAddVideo} className={styles.btn_video + ' ' + styles.btn}>Прикрепить видео</Button>
        </div>
    )
}