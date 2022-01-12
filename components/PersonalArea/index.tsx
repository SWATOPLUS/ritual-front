import { Button } from 'react-bootstrap';
import styles from './style.module.scss';
import UserIcon from '../../public/icons/UserCircle.svg'
import TelephoneIcon from '../../public/icons/Phone.svg'
import EnvelopeIcon from '../../public/icons/Envelope.svg'
import LockKeyIcon from '../../public/icons/LockKey.svg'
import { MouseEventHandler } from 'react';
import { ModalReview } from '../Modals/ModalReview';
import { ModalMailing } from '../Modals/ModalMailing';
import { ModalPromoCode } from '../Modals/ModalPromoCode';
import csx from 'classnames';
import { Field } from './Field';
import { ModalPassword } from '../Modals/ModalPassword';
import { useRouter } from 'next/router';
import { getGoogle, getVk } from '../../api/auth';
import { useModalContext } from '../../contexts/modals';
import { MAILING, PASSWORD, PROMO_CODE, REVIEW } from '../../constants/modal';

export const PersonalArea = ({user}: any) => {
    const modal = useModalContext();
    const handleOpenReview = () => modal?.setModal({name: REVIEW, isShow: true});
    const handleOpenMailing = () => modal?.setModal({name: MAILING, isShow: true});
    const handleOpenPromoCode = () => modal?.setModal({name: PROMO_CODE, isShow: true})
    
    return (
        <>
            <div className={styles.area}>
                <div className={csx(styles.block, styles.form)}>
                    <Info {...user}/>
                </div>
                <div className={csx(styles.block, styles.social)}>
                    <Social {...user}/>
                </div>
                <div className={styles.block}>
                    <Block 
                        title="Оставьте отзыв"
                        description="Пожалуйста,уделите минуту вашего времени и оставьте отзыв о нашей услуге для того, чтобы усовершенствовать ее в будущем.Нам очень важно ваше мнение!"
                        btnText="Написать отзыв"
                        handleClick={handleOpenReview}/>
                </div>
                <div className={styles.block}>
                    <Block 
                        title="Управление рассылками"
                        description="Настройте вашу почтовую рассылку для получения самой актуальной и интересующей вас информации"
                        btnText="Настроить рассылку"
                        handleClick={handleOpenMailing}/>
                </div>
                <div className={styles.block}>
                    <Block 
                        title="Скидочный промокод"
                        description="Введите промокод или купон для получения скидок,подарков и особых условий от наших партнёров"
                        btnText="Ввести промокод"
                        handleClick={handleOpenPromoCode}/>
                </div>
            </div>
            <ModalReview/>
            <ModalMailing/>
            <ModalPromoCode/>
            <ModalPassword/>
        </>
    )
}


const Info = ({username, telephone_number, email, password}: any) => {
    const modal = useModalContext();
    const handleChangePassword = () => modal?.setModal({name: PASSWORD, isShow: true});
    return (
        <div className={styles.info_block}>
            <Field icon={UserIcon} data={username} name="username"/>
            <Field label="Телефон:" icon={TelephoneIcon} data={telephone_number} name="telephone_number"/>
            <Field label="Почта:" icon={EnvelopeIcon} data={email} name="email"/>
            <Field label="Пароль:" icon={LockKeyIcon} name="password" data={password? '000000' : ''} onClick={handleChangePassword}/>
            
        </div>
    )
}




interface BlockProps {
    title: string,
    description: string,
    handleClick: MouseEventHandler<HTMLButtonElement>,
    btnText: string
}

const Block = ({title, description, handleClick, btnText}: BlockProps) => {
    return (
        <div className={styles.settings_block}>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p> 
            </div>
            <Button className={styles.btn} onClick={handleClick}>{btnText}</Button>
        </div>
    )
}






interface SocialProps {
    vk: boolean,
    google: boolean,
    telegram: boolean,
    facebook: boolean
}

const Social = ({vk, google, telegram, facebook}: SocialProps) => {
    const router = useRouter();
    const handleEntryFromVK = async () => {
        getVk().then((res: any) => router.push(res.data.url))
    }
    const handleEntryFromGoogle = async () => {
        getGoogle().then((res: any) => router.push(res.data.url))
    }

    return (
        <div className={styles.socials}>
            <div className={styles.title}>
                Для упрощенного входа привяжите аккаунт к профилю социальной сети:
            </div>
            <div className={csx(styles.social, styles.vk, {[styles.active]: vk})} onClick={handleEntryFromVK}>ВКонтакте</div>
            <div className={csx(styles.social, styles.telegram, {[styles.active]: telegram})}>Telegram</div>
            <div className={csx(styles.social, styles.facebook, {[styles.active]: facebook})}>Facebook</div>
            <div className={csx(styles.social, styles.google, {[styles.active]: google})} onClick={handleEntryFromGoogle}>Google</div>
        </div>
    )
}