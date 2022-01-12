import classNames from "classnames"
import React from "react"
import styles from './style.module.scss'

interface TitleProps {
    children: React.ReactNode
    align?: "start" | "end" | "center"
}

export const Title = ({children, align = "start"}: TitleProps) => {
    return (
        <h1 className={classNames(styles.title, styles[align])} >
            {children}
        </h1>
    )
}