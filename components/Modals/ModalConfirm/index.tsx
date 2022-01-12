import { CONFIRM } from "../../../constants/modal";
import { useModalContext } from "../../../contexts/modals";
import { ConfirmChangeForm } from "../../Forms/ConfirmChange";
import { Modal } from "../Modal";

export const ModalConfirm = () => {
    const modal = useModalContext();
    const handleClose = () => modal?.setModal({...modal.state, isShow: false})
  
    return (
        <Modal show={modal?.state.isShow && modal.state.name == CONFIRM} onHide={handleClose} centered >
            <ConfirmChangeForm/>
        </Modal>
    )
}