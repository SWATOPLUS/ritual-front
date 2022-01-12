import csx from 'classnames';
import { useState } from 'react';
import styles from './style.module.scss';
import eyeIcon from '../../../../public/icons/eye.svg'

export const InputModal = ({ 
    placeholder, 
    register, 
    errors ,
    password = false
}: any) => {
    const [check, setCheck] = useState(false);
    return (
        <>
            <div className={styles.field}>
                <input 
                    placeholder={placeholder}
                    op={password ? "password": null }
                    {...register}
                    className={csx(styles.field_input, {[styles.error]: errors?.message, [styles.active]: check})} 
                    autoComplete={password? "off": "on"}/>
                {errors ? <span>{errors.message}</span>: null}
                {password? (
                    <button 
                        className={styles.eyes} 
                        onClick={()=>setCheck(!check)} >
                            <img src={eyeIcon.src} />
                    </button>
                ): null}
               
            </div>
        </>
    )
}