import csx from 'classnames';
import React from 'react';
import styles from './style.module.scss';




export const DefaultInput = ({ 
    placeholder = '', 
    title = '',
    register = null,
    disabled = false,
    password = false,
    className = '',
    as = 'input',
    type = 'text'
}: any) => {

    return (
        <>
            <div className={styles.field}>
                {
                    React.createElement(as, {
                        ...register,
                        op: password ? "password": null,
                        className: csx( className, styles.field_input),
                        autoComplete: "off",
                        disabled,
                        type,
                        placeholder
                    })
                }
                <span>{title}</span>

            </div>
        </>
    )
}


// React.createElement('select', {
//     ...register,
//     op: password ? "password": null,
//     className: csx( className, styles.field_input),
//     autoComplete: "off",
//     disabled: disabled,
//     placeholder: placeholder,
// }, data.map((val: any, ind: number)=> {
//     return (
//         <option value={ind} key={ind}>
//             <span><img src={pathFromServer(val.image)}/></span>
//             {val.name}
//         </option>
//     )
// }))