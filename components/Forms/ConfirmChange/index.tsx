import { Button, Container } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { required } from "../../../utils/validFields"
import Breadcrumb from "../../Breadcrumb"
import { Form } from "../Form"
import { InputModal } from "../Inputs/InputsModal"
import styles from './style.module.scss'


export const ConfirmChangeForm = () => {
    const form = useForm();
    const field = [
        {
            name: "password",
            placeholder: "Пароль",
            valid: required,
            password: true
        },
    ]

    return (
        <>
            <Breadcrumb defaultItem={0}>
                <Breadcrumb.Item>
                    Подтверждение
                </Breadcrumb.Item>
            </Breadcrumb>
            <p className={styles.description}>Введите пароль для того, что бы изменения вступили в силу</p>
            <Form fields={field} valid={form} Input={InputModal}>
                <Button className={styles.btn}>Отправить</Button>
            </Form>
        </>
    )
}