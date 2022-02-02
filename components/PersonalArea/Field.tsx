import { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import csx from "classnames";
import editIcon from '../../public/icons/edit.svg'
import styles from './style.module.scss';

import warningIcon from '../../public/icons/WarningField.svg'
import successIcon from '../../public/icons/SuccessField.svg'
import { editEmailReq, userEditReq } from "../../api/user";
import { useAlertContext } from "../../contexts/alert";
import classNames from "classnames";
import { focusAndOpenKeyboard } from "../../utils/focus";

interface FieldProps {
    icon: any,
    label?: string,
    data?: string,
    name: string,
    onClick?: any 
}

export const Field = ({icon, label = "", data, name, onClick }: FieldProps) => {
    const alert = useAlertContext();
    const [value, setValue] = useState(data);
    const [isChange, setIsChange] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        
        if(onClick){
            onClick()
        }else {
            if(!isChange) {
                setIsChange(true);
            }
        }
    }

    const handleBlur = () => {
        if (value) {
            setIsChange(false);
            if(name === "email") {
                editEmailReq({ email: value }).then(()=> {
                    alert.setState({
                        isShow: true,
                        isSuccess: true,
                        text: 'E-mail изменён, подтвердите его на своей почте'
                    });
                })
            }else {
                userEditReq({user: {[name]: value}}).then(()=> {
                    alert.setState({
                        isShow: true,
                        isSuccess: true,
                        text: 'Изменения успешно сохранены'
                    });
                })
            }
        }
    };
    const handleChange = (ev: any) => setValue(ev.target.value);

    useEffect(() => {
        if (name != 'password' && ref.current) {
            focusAndOpenKeyboard(ref.current);
        }
    }, [isChange])

    return (
        <>
            <div className={styles.field}>
                <div className={styles.data}>
                    <div className={styles.icon}>
                        <img src={icon.src} />
                        {
                            value? <img className={styles.status} src={successIcon.src}/> : <img className={styles.status} src={warningIcon.src}/>
                        }   
                    </div>
                    
                    <div>
                        {label? <span className={styles.label}>{label}</span> : null}
                        {" "}
                        <p className={classNames(styles.field_value, {[styles.password]: name == 'password', [styles.hidden]: isChange})}>
                            {value}
                        </p>
                        <input
                            ref={ref}
                            type="text"
                            value={value}
                            className={classNames(styles.field_input, { [styles.hidden]: !isChange })}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                        
                    </div>
                </div>
                <button onClick={handleClick} className={csx({[styles.btn_none]: !value})}>
                    <div style={{color: isChange && value? 'black': ''}}>
                        {value? <Image src={editIcon}/>: null}
                        {value? "Изменить": "Указать"}
                    </div>
                    
                </button>
            </div>
            <hr />
        </>
    )
}