import { REVIEW } from "../../../constants/modal";
import { useModalContext } from "../../../contexts/modals";
import { ReviewForm } from "../../Forms/Review";
import { Modal } from "../Modal";

export const ModalReview = () => {
    const modal = useModalContext();
    const handleClose = () =>  modal?.setModal({...modal.state, isShow: false});
  
    return (
        <Modal show={modal?.state.isShow && modal.state.name == REVIEW} onHide={handleClose} centered>
            <ReviewForm/>
        </Modal>
    )
}