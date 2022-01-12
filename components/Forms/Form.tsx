import { ReactNode } from "react";
import { Container } from "react-bootstrap"
import { UseFormReturn } from "react-hook-form";

import styles from './style.module.scss';

export interface FormProps {
    children: ReactNode,
    fields: Array<Field>,
    valid: UseFormReturn<any, object>
    Input: any
}

export interface Field {
    name: string,
    type?: string,
    title?: string | undefined,
    placeholder?: string | undefined,
    password?: boolean | undefined,
    valid: Partial<any>,
    data?: Array<any>
}

export const Form = ({Input, children, fields, valid: { register, formState: { errors } }}: FormProps) => {
    return (
        <div className={styles.form}>
            {fields.map((val, ind)=> {
                return <Input 
                    title={val.title}
                    placeholder={val.placeholder}
                    register={register(val.name, val.valid)} 
                    errors={errors[val.name]} 
                    password={val?.password}
                    data={val.data}
                    type={val.type}
                    key={ind}/>
            })}
            {children}
            
        </div>
    )
}