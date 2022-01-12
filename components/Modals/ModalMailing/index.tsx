
import { MAILING } from "../../../constants/modal";
import { useModalContext } from "../../../contexts/modals";
import { MailingForm } from "../../Forms/Mailing";
import { Modal } from "../Modal";

export const ModalMailing = () => {
    const modal = useModalContext();
    const handleClose = () => modal?.setModal({...modal.state, isShow: false});
  
    return (
        <Modal show={modal?.state.isShow && modal?.state.name == MAILING} onHide={handleClose} centered>
            <MailingForm />
        </Modal>
    )
}