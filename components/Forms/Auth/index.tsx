import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {  useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import { Form } from "../Form";
import { required, email } from '../../../utils/validFields';
import { InputModal } from "../Inputs/InputsModal"
import Breadcrumb from '../../Breadcrumb';
import styles from './style.module.scss'
import { Social } from "../../Social";
import { Checkbox } from "../../Checkbox";
import classNames from "classnames";
import { useRouter } from "next/router";
import { setCookie } from "../../../utils/cookies"
import { useDispatch } from "react-redux";
import { login, register } from "../../../redux/actions/auth";
import { useAlertContext } from "../../../contexts/alert";

type InputsRegister = {
    login: string,
    email: string,
    password: string,
    passwordCheck: string
};

type InputsLogin = {
    email: string,
    password: string
}



export const AuthForm = () => {
    const registerForm = useForm<InputsRegister>({reValidateMode: "onSubmit", mode: "onSubmit"});
    const loginForm = useForm<InputsLogin>();
    const [page, setPage] = useState(0);
    const [save, setSave] = useState(false);
    const dispatch = useDispatch();
    const alert = useAlertContext();

    const submitLogin = (data: any) => dispatch(login(data, alert))

    const submitRegister = (data: any) => dispatch(register(data, alert))

    const handleChangeForm = (i: number) =>{
        setPage(i)
    }

    const fieldsReg = [
        {
            name: "username",
            placeholder: "Логин",
            valid: required,
        },
        {
            name: "email",
            placeholder: "e-mail",
            valid: {
                ...required,
                ...email
            },
        },
        {
            name: "password",
            placeholder: "Пароль",
            valid: required,
            password: true
        },
        {
            name: "passwordCheck",
            placeholder: "Повторите пароль",
            valid: {
                ...required,
                validate: {
                    check: (v: any) => {
                        // registerForm.handleSubmit(()=>{});
                        const password = registerForm.getValues('password')
                        return v == password || "Пароли не совпадают"
                    }
                }
            },
            password: true
        }   
    ]
    const fieldsLog = [
        {
            name: "email",
            placeholder: "Логин или e-mail ",
            valid: required,
        },
        {
            name: "password",
            placeholder: "Пароль",
            valid: required,
            password: true
        },
    ]

    return (
        <div>
            <Breadcrumb onChange={handleChangeForm} defaultItem={page}>
                <Breadcrumb.Item>Регистрация</Breadcrumb.Item>
                <Breadcrumb.Item>Вход</Breadcrumb.Item>
            </Breadcrumb>
            
            {page? (
                <div>
                    <Social/>
                    <p className={styles.or}>или</p>
                </div>
            ):null}
            <div>
                {!page? (
                    <Form valid={registerForm} fields={fieldsReg} Input={InputModal}>
                        <Checkbox active={save} onClick={()=>setSave(!save)} className={styles.point} text="Я согласен(-на) с условиями обработки персональных данных"/>
                        <Button onClick={registerForm.handleSubmit(submitRegister)} className={classNames(styles.btn, styles.btn_group)}>Зарегистрироваться</Button>
                    </Form>
                ):(
                    
                    <Form valid={loginForm} fields={fieldsLog} Input={InputModal}>
                        <Checkbox active={save} onClick={()=>setSave(!save)} className={styles.point} text="Запомнить пароль"/>
                        <Row className={styles.btn_group}>
                            <Col xs={6}>
                                <Button onClick={loginForm.handleSubmit(submitLogin)} className={styles.btn}>Войти</Button>
                            </Col>
                            <Col xs={6} className={styles.password}>
                                Забыли пароль?
                            </Col>
                        </Row>
                    </Form>
                )}
            </div>
        </div>
    )
}