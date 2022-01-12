import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from './style.module.scss';
import sendIcon from '../../../public/icons/send.svg';
import Image from 'next/image'


export const SupportingForm = () => {
    const [text, setText] = useState('');
    const hiddenDiv = useRef<any>();
    const input = useRef<any>();
    const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => setText(ev?.target?.value);
    const handleClick = () => {}

    useEffect(()=> {
        if(hiddenDiv.current && input.current) {
            hiddenDiv.current.style.display = "block"
            const height:any = hiddenDiv.current?.clientHeight;
            hiddenDiv.current.style.display = "none"
            input.current.style.height = height + 'px'
        }
    }, [text]);

    return (
        <div>
            
            <div className={styles.container}>
                <div className={styles.description}>
                    Чем мы можем вам помочь?
                </div>
                <div className={styles.container_input}>
                    <textarea className={styles.textinput} ref={input} value={text} onChange={handleChange} placeholder="Опишите проблему"/>
                    <button className={styles.btn} onClick={handleClick}>
                        <Image src={sendIcon}/>
                    </button>
                    <div className={styles.textdiv} ref={hiddenDiv}>{text + " "}</div>
                </div>
            </div>
                
        </div>
    )
}