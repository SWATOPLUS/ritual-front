import { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { addImageReq } from '../../api/page'
import { pathFromServer } from '../../utils/fromServer'
import { Checkbox } from '../Checkbox'
import styles from './style.module.scss'
import image_user from '../../public/images/image_user.jpg'


interface Images {
    id: number,
    url: string
}

interface CarouselImageProps {
    images: Array<Images>,
    setImages: Function,
    mainImage: number,
    setMainImage: Function
}

export const CarouselImage = ({images, setImages, mainImage, setMainImage}: CarouselImageProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.addEventListener('change', addImage);
        return () => { inputRef.current?.removeEventListener('change', addImage); }
    })

    const handleClickImage = (ev: any, ind: number) => {
        if(ind == 0) {
            setImages([...images.slice(1, images.length), images[0]])
        }
    }
    
    const addImage = async (ev: any) => {
        await addImageReq(ev.target?.files)
            .then((res: any) => {
                !images.length ? setMainImage(res.data[0].id) : null;
                setImages([...images, ...res.data])
            });
    }

    const handleClickPoint = (ind: number) => setMainImage(ind)

    const handleAddImage = () => inputRef.current?.click();
    
    return (
        <>
            {images[0]? (
                <div className={styles.carousel}>
                    <div className={styles.carousel_items}>
                        {images.map((val, ind)=> {
                            return ( 
                                <div 
                                    key={val.id}
                                    style={{transform: `translate(${(ind/(images.length-1))*30}px, ${(ind/(images.length-1))*30}px)`, zIndex: 10 - ind}}
                                    className={styles.item}>
                                    <div className={styles.block_point}>
                                        <Checkbox onClick={()=>handleClickPoint(val.id)} active={mainImage == val.id}/>
                                        <p>Сделать главным</p>
                                    </div>
                                    <img src={pathFromServer(val.url)} onClick={(ev)=>handleClickImage(ev, ind)}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.width}></div>
                </div>
            ):(
                <div className={styles.no_image}>
                    <img  src={image_user.src} alt="" />
                </div>
            )}
            <div className={styles.btn_group}>
                <input ref={inputRef} type="file" multiple style={{display: 'none'}} accept="image/*"/>
                <Button className={styles.btn} onClick={handleAddImage}>Прикрепить фото</Button>
            </div>
        </>
    )
}