import styles from './style.module.scss';
// @ts-ignore 
import politic from '../../public/Политика_конфиденциальности_RIQR (1).pdf';
// @ts-ignore 
import ifelse from '../../public/Условия_пользования_RIQR.pdf';
import { Logo } from '../Logo';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo color="gray"/>
            <div>
                <div>
                    <a href={politic} download>Политика конфиденциальности</a> | <a href={ifelse} download>Условия пользования</a>
                </div>
                ©Все права защищены
            </div>
            <div/>
        </footer>
    )    
}