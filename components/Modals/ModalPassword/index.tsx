import { PASSWORD } from "../../../constants/modal";
import { useModalContext } from "../../../contexts/modals";
import { PasswordChangeForm } from "../../Forms/PasswordChange";
import { Modal } from "../Modal";

export const ModalPassword = () => {
    const modal = useModalContext();
    const handleClose = () =>  modal?.setModal({...modal.state, isShow: false});
  
    return (
        <Modal show={modal?.state.isShow && modal.state.name == PASSWORD} onHide={handleClose} centered >
            <PasswordChangeForm/>
        </Modal>
    )
}