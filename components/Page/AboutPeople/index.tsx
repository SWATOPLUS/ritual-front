import styles from './style.module.scss';
export const AboutPeople = ({user}: any) => {
    return (
        <div className={styles.con}>
            <h4 className={styles.epitaph}>— {user.facts}</h4>
            <p>
                {user.biography}
            </p>
        </div>
    )
}