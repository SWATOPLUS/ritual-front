import { ReactNode } from "react";
import { Modal as ModalBootstrap } from "react-bootstrap";

import styles from './style.module.scss'

export const Modal = (props: any) => {
    return (
        <ModalBootstrap {...props} size="xl">
            <ModalBootstrap.Body className={styles.modal_container}>
                {props.children}
            </ModalBootstrap.Body>
        </ModalBootstrap>
    )
}