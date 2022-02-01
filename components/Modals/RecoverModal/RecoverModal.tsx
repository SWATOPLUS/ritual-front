import { useState } from "react";
import { restorePassReq } from "../../../api/auth";
import { useModalContext } from "../../../contexts/modals";

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
    <RecoverEnterEmail hidden={!!id} onSubmit={(x) => setId(x)}/>
    <RecoverEnterCode hidden={!!code || !id} onSubmit={(x) => setCode(x)}/>
    <RecoverEnterPassword hidden={!!pass || !code} onSubmit={(x) => setPass(x)}/>
    </>;
}

const RecoverEnterEmail = (props: PageProps<number>) => {
    return (
        <div hidden={props.hidden}>
            <span>Введите E-mail</span>
            <button onClick={() => props.onSubmit(42)}>Получить код</button>
        </div>
    )
}

const RecoverEnterCode = (props: PageProps) => {
    return <div hidden={props.hidden}>
    <span>Введите Код</span>
    <button onClick={() => props.onSubmit('code')}>Отправить</button>
    </div>
}

const RecoverEnterPassword = (props: PageProps) => {
    return <div hidden={props.hidden}>
    <span>Введите новый пароль</span>
    <button onClick={() => props.onSubmit('password')}>Отправить</button>
    </div>
}

interface PageProps<T = string> {
    onSubmit: (x: T) => void;
    hidden?: boolean;
}
