import csx from 'classnames'
import React, { ReactNode, useState } from 'react'
import styles from './style.module.scss'

interface BreadcrumbProps {
    children: ReactNode,
    onChange?: Function,
    defaultItem?: number
} 

const Breadcrumb = ({children, onChange = ()=>{}, defaultItem}: BreadcrumbProps) => {
    const [activeEl, setActiveEl] = useState<number | undefined>(defaultItem);
    const handleClick = (i:number) => { onChange(i); setActiveEl(i); }

    return (
        <div className={styles.breadcrumb}>
            {React.Children.map(children, (child: any, i: number)=> (
                React.cloneElement(child,{
                    onClick: () => { handleClick(i) },
                    isActive: activeEl == i
                })
            ))}
        </div>
    )
}

interface BreadcrumbItemProps {
    children: ReactNode,
    isActive?: boolean,
    onClick?: Function
} 

Breadcrumb.Item = ({ children, isActive = false, onClick = () =>{}}: BreadcrumbItemProps) => {
    return (
        <div 
            onClick={()=>onClick()}
            className={csx(styles.item, {[styles.active]: isActive})} >
            <h2>
                {children}
            </h2>
        </div>
    )
}

export default Breadcrumb