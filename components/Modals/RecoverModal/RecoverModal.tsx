import { useState } from "react";
import VerificationInput from "react-verification-input";
import { restorePassReq } from "../../../api/auth";
import { useModalContext } from "../../../contexts/modals";
import Breadcrumb from "../../Breadcrumb";
import { InputModal } from "../../Forms/Inputs/InputsModal";
import styles from "./style.module.scss"

export const RecoverModal = () => {
    const [id, setId] = useState(0);
    const [code, setCode] = useState('');
    const [pass, setPass] = useState('');
    const modal = useModalContext();
    const request = {id, code, new_password: pass};

    if (id && code && pass) {
        restorePassReq(request).then(() => modal.setModal({name: '', isShow: false}));
    }

    return <>
    <Breadcrumb defaultItem={0}> 
        <Breadcrumb.Item>Восстановление пароля</Breadcrumb.Item>
    </Breadcrumb>
    
    <RecoverEnterEmail hidden={!!id} onSubmit={(x) => setId(x)}/>
    <RecoverEnterCode hidden={!!code || !id} onSubmit={(x) => setCode(x)}/>
    <RecoverEnterPassword hidden={!!pass || !code} onSubmit={(x) => setPass(x)}/>
    </>;
}

const RecoverEnterEmail = (props: PageProps<number>) => {
    return (
        <div hidden={props.hidden} className={styles.content}>
            <p>Введите почту на который должен прийти код подтверждения</p>
            <input type="text" placeholder="Введите E-mail"/>
            <button className={styles.btn} onClick={() => props.onSubmit(42)}>Получить код</button>
        </div>
    )
}

const RecoverEnterCode = (props: PageProps) => {
    return <div hidden={props.hidden} className={styles.content}>
    <p>Введите код, который пришел на почту</p>
    <VerificationInput
        placeholder=" "
        validChars="0-9"
        removeDefaultStyles={true}
        classNames={{
        container: `${styles.container}`,
        character: `${styles.character}`,
}}/>
    <button className={styles.btn} onClick={() => props.onSubmit('code')}>Отправить</button>
    </div>
}

const RecoverEnterPassword = (props: PageProps) => {
    return <div hidden={props.hidden} className={styles.content}>
    <p>Введите новый пароль</p>
    <InputModal placeholder="Новый пароль" password={true}/>
    <button className={styles.btn} onClick={() => props.onSubmit('password')}>Отправить</button>
    </div>
}

interface PageProps<T = string> {
    onSubmit: (x: T) => void;
    hidden?: boolean;
}
