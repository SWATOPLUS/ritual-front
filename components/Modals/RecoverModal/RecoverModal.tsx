import { useEffect, useState } from "react";
import VerificationInput from "react-verification-input";
import { getRecoverCodeReq, restorePassReq } from "../../../api/auth";
import { useModalContext } from "../../../contexts/modals";
import Breadcrumb from "../../Breadcrumb";
import { InputModal } from "../../Forms/Inputs/InputsModal";
import styles from "./style.module.scss";

export const RecoverModal = () => {
  const [id, setId] = useState(0);
  const [code, setCode] = useState("");
  const [pass, setPass] = useState("");
  const modal = useModalContext();

  const emailHandler = (email: string) => {
    getRecoverCodeReq(email).then((res: any) => {
      setId(res.data.user_id);
    });
  };

  useEffect(() => { if (id && code && pass) {
    const request = { id, code, new_password: pass };

    restorePassReq(request).finally(() =>
      modal.setModal({ name: "", isShow: false })
    );
  }
  }, [ id, code, pass ]);


  return (
    <>
      <Breadcrumb defaultItem={0}>
        <Breadcrumb.Item>Восстановление пароля</Breadcrumb.Item>
      </Breadcrumb>

      <RecoverEnterEmail hidden={!!id} onSubmit={emailHandler} />
      <RecoverEnterCode hidden={!!code || !id} onSubmit={(x) => setCode(x)} />
      <RecoverEnterPassword
        hidden={!!pass || !code}
        onSubmit={(x) => setPass(x)}
      />
    </>
  );
};

const RecoverEnterEmail = (props: PageProps) => {
  const [email, setEmail] = useState('');

  return (
    <div hidden={props.hidden} className={styles.content}>
      <p>Введите почту на который должен прийти код подтверждения</p>
      <input type="text" placeholder="Введите E-mail" value={email} onChange={(x) => setEmail(x.target.value)}/>
      <button className={styles.btn} onClick={() => props.onSubmit(email)}>
        Получить код
      </button>
    </div>
  );
};

const RecoverEnterCode = (props: PageProps) => {
  const [code, setCode] = useState('');

  return (
    <div hidden={props.hidden} className={styles.content}>
      <p>Введите код, который пришел на почту</p>
      <VerificationInput
        placeholder=" "
        validChars="0-9"
        removeDefaultStyles={true}
        classNames={{
          container: `${styles.container}`,
          character: `${styles.character}`,
        }}
        value={code}
        onChange={(value) => setCode(value)}
      />
      <button className={styles.btn} onClick={() => props.onSubmit(code)}>
        Отправить
      </button>
    </div>
  );
};

const RecoverEnterPassword = (props: PageProps) => {
  const [pass, setPass] = useState('');
  const onChange = (e: any) => setPass(e.target.value);
  return (
    <div hidden={props.hidden} className={styles.content}>
      <p>Введите новый пароль</p>
      <InputModal register={{onChange, value: pass}} placeholder="Новый пароль" password={true} />
      <button className={styles.btn} onClick={() => props.onSubmit(pass)}>
        Отправить
      </button>
    </div>
  );
};

interface PageProps<T = string> {
  onSubmit: (x: T) => void;
  hidden?: boolean;
}
