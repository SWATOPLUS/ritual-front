import styles from './style.module.scss';
import successIcon from '../../../public/icons/success.svg'
import { useState } from 'react';

export const ReviewForm = () => {
    const [isReady, setIsReady] = useState(false)
    const handleSend = () => {}
    const handleClose = () => {}
    return (    
        <div className={styles.con}>
            {
                (!isReady)? (
                    <>
                        <input placeholder="Ваше имя" className={styles.name}/>
                        <textarea placeholder="Оставьте свой отзыв" className={styles.review}/>
                        <button className={styles.btn} onClick={handleSend}>Отправь</button>
                    </>
                ): (
                    <>
                        <div className={styles.thank}>
                            <div className={styles.circle_success}>
                                <img src={successIcon.src}/>
                            </div>
                            <p>Спасибо</p>
                        </div>
                        <button className={styles.btn} onClick={handleClose}>Готово</button>
                    </>
                )
            }
            
            
        </div>
    )
}