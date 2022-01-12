import { ReactNode, useState } from 'react';
import styles from './style.module.scss';
import successIcon from '../../../public/icons/success.svg'
export const MailingForm = () => {
    const [isReady, setReady] = useState(false);


    const handleEdit = () => {
        // dispatch(editMailing({}))
    }
    const handleReady = () => {
        
    }
    return (
        <div>
            {(!isReady)? (
                <>
                    <Field text="Получать напоминание, в случае,если вы забыли посетить памятник" checked>
                        <select className={styles.selecter_date}>
                            <option value="">3 месяца</option>
                            <option value="">6 месяцев</option>
                            <option value="">1 год</option>
                        </select>
                    </Field>
                    <Field text="Получать информацию о скидках/акциях." checked/>
                    <Field text="Получать полезную информацию от наших партнеров." checked/>
                    <Field text="Получать информацию о специальных предложениях и новых услугах. " checked/>
                    <Field text="Получать информацию о подозрительных действиях на вашем аккаунте." checked/>
                    <Field text="Получать информацию о просмотре страницы с неизвестных устройств. " checked/>
                    <div className={styles.btn_con}>
                        <button className={styles.btn} onClick={handleEdit}>Подтвердить</button>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.thank}>
                        <div className={styles.circle_success}>
                            <img src={successIcon.src}/>
                        </div>
                        <p>Спасибо</p>
                    </div>
                    <div className={styles.btn_con}>
                        <button className={styles.btn} onClick={handleReady}>Готово</button>
                    </div>
                </>
            )}
            
            
        </div>
    )
}

interface FieldProps {
    text?: String,
    children?: ReactNode,
    checked?: Boolean
}
const Field = ({text, children, checked = false}: FieldProps) => {
    return (
        <div className={styles.field}>
            <input type="checkbox" checked={checked? true : false}/>
            {text}
            <div>
                {children}
            </div>
        </div>
    )
}