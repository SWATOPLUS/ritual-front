import { Button } from 'react-bootstrap';
import { AUTH } from '../../constants/modal';
import { useModalContext } from '../../contexts/modals';
import styles from './style.module.scss';

export const Banner = () => {
    const modal = useModalContext();
    const handleOpen = () => modal?.setModal({name: AUTH, isShow: true, tabId: 'reg'});
    return (
        <div className={styles.banner}>
            <h1 className={styles.title}>Память о близком<br/> будет жить вечно</h1>
            <p className={styles.description}>Создадим страницу человека и выдадим вам QR-код</p>
            {!false? <Button className={styles.btn} onClick={handleOpen}>Регистрация</Button>: null}
        </div>
    )
}