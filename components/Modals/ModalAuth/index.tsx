import { AUTH, RECOVER } from "../../../constants/modal";
import { useModalContext } from "../../../contexts/modals";
import { AuthForm } from "../../Forms/Auth";
import { Modal } from "../Modal";
import { RecoverModal } from "../RecoverModal/RecoverModal";

export const ModalAuth = ({isMainPage = false}) => {
    const modal = useModalContext();
    const handleClose = () => { modal?.setModal({...modal.state, isShow: false}) };
  
    return (
    <>
        <Modal show={modal?.state.isShow && modal?.state.name === AUTH} onHide={handleClose} centered className={isMainPage ? "modal_auth" : null}>
            <AuthForm/>
        </Modal>
        <Modal show={modal?.state.isShow && modal?.state.name === RECOVER} onHide={handleClose} centered className={isMainPage ? "modal_auth" : null}>
            <RecoverModal/>
        </Modal>
    </>
    )
  }