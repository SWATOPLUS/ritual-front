import styles from './style.module.scss'
import logo from '../../public/images/logo.png'
import Link from 'next/link';
import csx from 'classnames';

export const Logo = ({color = "white"}: any) => {
    return (
        <div className={csx(styles.logo, styles[color])}>
            <img src={logo.src} />
            <Link href="/">Ritual</Link>
        </div>
    )
}