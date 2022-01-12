import csx from 'classnames';
import { useEffect } from 'react';
import { useAlertContext } from '../../contexts/alert';
import styles from './style.module.scss';



export const Alert = () => {
    const alert = useAlertContext();
    const { isShow, isSuccess, text } = alert?.state;

    useEffect(()=> {
        const timeout = setTimeout(()=> {
            alert?.setState({...alert.state, isShow: false});
        }, 10000);
        return () => clearTimeout(timeout);
    }, [alert?.state.isShow]);

    return (
        <div className={csx(
                styles.alert,
                {
                    [styles.active]: isShow,
                    [styles.success]: isSuccess
                }
            )}>
            <p>{text}</p>
        </div>
    )
}