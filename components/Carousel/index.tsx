import classNames from 'classnames';
import React from 'react';
import { Checkbox } from '../Checkbox';
import styles from './style.module.scss';

export interface CarouselProps {
    images: Array<ImageType>,
}

export type ImageType = {
    src: any,
    alt?: string
}

const position = ({ind, curInd}: any) => ({transform: `translate(${-100*(curInd)}%)`})

export const Carousel = ({ images }: CarouselProps) => {
    const [currentIndItem, setCurrentIndItem] = React.useState(0);

    React.useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(currentIndItem < images.length - 1) setCurrentIndItem(currentIndItem + 1)
            else setCurrentIndItem(0);
        }, 5000);
        return () => clearTimeout(timeout);
    })

    const handleClick = (ind = -1) => {
        if(ind == -1) {
            (images.length-1 != currentIndItem)? setCurrentIndItem(currentIndItem + 1): setCurrentIndItem(0);
        }else setCurrentIndItem(ind);
        
    }
    return (
        <div className={styles.carousel}>
            <div className={styles.viewport}>
                <div style={{overflow: "hidden"}}>
                <div style={position({curInd: currentIndItem})} className={styles.images}>
                    {images.map((image, ind)=> {
                        return (
                            <img key={ind}
                                src={image.src.src} 
                                alt={image?.alt}
                                className={styles.image}
                                />
                        )
                    })}
                </div>
                </div>
            </div>
            <div className={styles.points} onClick={()=>handleClick()}>
                {images.map((val, ind)=> {
                    return <Checkbox key={ind} onClick={()=>handleClick(ind)} active={(currentIndItem === ind)}/>
                    // return <span key={ind} onClick={()=>handleClick(ind)} className={classNames(styles.point, {[styles.active]: currentIndItem == ind})}/>
                })}
            </div>
        </div>
    )
}