import styles from './style.module.scss'
import facebookIcon from '../../public/icons/facebook.svg'
import vkIcon from '../../public/icons/vk.svg'
import googleIcon from '../../public/icons/google.svg'
import telegramIcon from '../../public/icons/telegram.svg'
import { getGoogle, getVk } from '../../api/auth'
import { useRouter } from 'next/router'


export const Social = () => {
    const router = useRouter();
    const handleEntryFromVK = async () => {
        getVk().then((res: any) => router.push(res.data.url))
    }
    const handleEntryFromGoogle = async () => {
        getGoogle().then((res: any) => router.push(res.data.url))
    }
    const socialNetworks = [
        {
            icon: facebookIcon.src
        },
        {
            icon: telegramIcon.src
        },
        {
            icon: vkIcon.src,
            handleClick: handleEntryFromVK
        },
        {
            icon: googleIcon.src,
            handleClick: handleEntryFromGoogle
        }
    ]
    

    return (
        <div className={styles.socials}>
            {socialNetworks.map((val: any, ind: number) => {
                return (
                    <div key={ind} className={styles.item} onClick={val.handleClick}>
                        <img src={val.icon} />
                    </div>
                );
            })}
        </div>
    )
}