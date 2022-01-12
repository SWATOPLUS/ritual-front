import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { deletePage } from "../../../api/page";
import { DELETE } from "../../../constants/modal";
import { useAlertContext } from "../../../contexts/alert";
import { useModalContext } from "../../../contexts/modals";
import Breadcrumb from "../../Breadcrumb";
import { Modal } from "../Modal";
import styles from './style.module.scss';

export const ModalDelete = () => {
    const modal = useModalContext();
    const router = useRouter();
    const alert = useAlertContext();
    const handleClose = () => modal?.setModal({...modal.state, isShow: false, pageIdDelete: undefined});
    const handleDeletePage = () => {
        deletePage(modal.state.pageIdDelete).then(()=>{
            handleClose();
            alert.setState({isShow: true, isSuccess: true, text: "Страница успешно удалена"})
            router.push('/cabinet/pages');
        }).catch(()=> {
            alert.setState({isShow: true, isSuccess: false, text: "Не получилось удалить страницу"});
        })
    }
    return (
        <Modal show={modal?.state.isShow && modal.state.name == DELETE} onHide={handleClose} centered >
            <Breadcrumb defaultItem={0}>
                <Breadcrumb.Item>
                    Удалить страницу?
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.description}>Вы уверены, что хотите удалить страницу?</div>
            <Button onClick={handleDeletePage} variant="danger">Удалить</Button>
        </Modal>
    )
}