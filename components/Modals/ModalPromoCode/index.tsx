import { PROMO_CODE } from "../../../constants/modal";
import { useModalContext } from "../../../contexts/modals";
import { PromoCodeForm } from "../../Forms/PromoCode";
import { Modal } from "../Modal"

export const ModalPromoCode = () => {
    const modal = useModalContext();
    const handleClose = () =>  modal?.setModal({...modal.state, isShow: false});
  
  
    return (
        <Modal show={modal?.state.isShow && modal.state.name == PROMO_CODE} onHide={handleClose} centered>
            <PromoCodeForm/>
        </Modal>
    )
}