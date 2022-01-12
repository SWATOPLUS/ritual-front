import { PAY } from "../../../constants/modal";
import { useModalContext } from "../../../contexts/modals";
import { PayForm } from "../../Forms/Pay";
import { Modal } from "../Modal";

export const ModalPay = () => {
    const modal = useModalContext();
    const handleClose = () => modal?.setModal({...modal.state, isShow: false})
  
    return (
        <Modal show={modal?.state.isShow && modal.state.name == PAY} onHide={handleClose} centered>
            <PayForm/>
        </Modal>
    )
}