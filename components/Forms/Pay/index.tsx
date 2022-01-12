import { Button } from "react-bootstrap"
import Breadcrumb from "../../Breadcrumb"
import styles from './style.module.scss'

export const PayForm = () => {
    return (
        <div>
            <Breadcrumb defaultItem={0}>
                <Breadcrumb.Item>Выгодные условия</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.content}>
                <p className={styles.title}>
                    Оплачивая нашу услугу вы получаете:
                </p>
                <div className={styles.text}>
                    <p>— Пожизненное тех. обслуживание и доступ этой страницы</p>
                    <p>— Qr-code в удобном формате отправится вам на почту</p>
                    <p>— Возможность скрывать вашу страницу по желанию</p>
                    <p>— Защиту от возможного удаления созданной страницы</p>
                </div>
                <input type="text" placeholder="Ввести промокод"/>
                <Button className={styles.btn}>Оплатить</Button>
            </div>
        </div>
    )
}