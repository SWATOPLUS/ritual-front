import classNames from "classnames"
import { MouseEventHandler } from "react"
import styles from './style.module.scss'


interface Chackbox {
    active: boolean,
    text?: string,
    className?: string,
    onClick: MouseEventHandler<HTMLSpanElement>
}

export const Checkbox = (props: Chackbox) => {
    return (
        <div className={styles.point_component}>
            <span {...props} className={classNames( styles.point, {[styles.active]: props.active}, props?.className )} />
            {props.text}
        </div>
    )
}