import styles from './style.module.scss';
import successIcon from '../../../public/icons/success.svg'
import { useState } from 'react';

export const PromoCodeForm = () => {
    const [isReady, setIsReady] = useState(false);
    const handleSendPromocode = () => {}
    const handleClose = () => {}
    return (
        <div className={styles.con}>
            {
            (!isReady)? (
                <>
                    <p className={styles.title}>Введите промокод</p>
                    <input placeholder="XXZZXXZZ" />
                    <button className={styles.btn} onClick={handleSendPromocode}>Применить</button>
                </>
            ) : (
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