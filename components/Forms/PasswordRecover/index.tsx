import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { required } from "../../../utils/validFields";
import Breadcrumb from "../../Breadcrumb";
import { Form } from "../Form";
import { InputModal } from "../Inputs/InputsModal";
import styles from './style.module.scss';

export const PasswordRecoverForm = () => {
    const form = useForm({reValidateMode: "onSubmit", mode: "onSubmit"});

    const handleSubmit = () => {};

    const fieldsRec = [
        {
            name: "email",
            placeholder: "e-mail ",
            valid: required,
        }
    ]

    return (
        <div>
            <Breadcrumb defaultItem={0}>
                <Breadcrumb.Item>Восстановление Пароля</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.description}>Введите почту на который должен прийти код подтверждения</div>
            <div>
                <Form valid={form} fields={fieldsRec} Input={InputModal}>
                    <Button onClick={handleSubmit} className={styles.btn}>Получить код</Button>
                </Form>
            </div>
        </div>
    )
}