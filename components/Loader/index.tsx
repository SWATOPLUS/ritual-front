import styles from './style.module.scss';

const Loader = () => {
    return (
        <div className={styles.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader