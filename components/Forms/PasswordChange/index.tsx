import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editPasswordReq } from "../../../api/user";
import { useAlertContext } from "../../../contexts/alert";
import { required } from "../../../utils/validFields";
import Breadcrumb from "../../Breadcrumb";
import { Form } from "../Form";
import { InputModal } from "../Inputs/InputsModal";

export const PasswordChangeForm = () => {
    const form = useForm({reValidateMode: "onSubmit", mode: "onSubmit"});
    const alert = useAlertContext();
    const handleSubmit = (data: any) => {
        editPasswordReq(data).then(() => {
            alert.setState({
                isShow: true,
                isSuccess: true,
                text: 'Пароль успешно изменён'
            });
        })
    }

    const fieldsReg = [
        {
            name: "old_password",
            placeholder: "Старый пароль",
            valid: required,
            password: true
        },
        {
            name: "new_password",
            placeholder: "Новый пароль",
            valid: {
                ...required,
                validate: {
                    check: (v: any) => {
                        const password = form.getValues('old_password')
                        return v != password || "Новый пароль совпадает со старым"
                    }
                }
            },
            password: true
        },
        {
            name: "password_check",
            placeholder: "Повторите новый пароль",
            valid: {
                ...required,
                validate: {
                    check: (v: any) => {
                        const password = form.getValues('new_password')
                        return v == password || "Пароли не совпадают"
                    }
                }
            },
            password: true
        },
        
    ]

    return (
        <div>
            <Breadcrumb defaultItem={0}>
                <Breadcrumb.Item>Изменить пароль</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <Form valid={form} fields={fieldsReg} Input={InputModal}>
                    <Button onClick={form.handleSubmit(handleSubmit)} style={{marginTop: '20px'}}>Изменить</Button>
                </Form>
            </div>
        </div>
    )
}