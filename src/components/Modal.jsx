import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';
export default function Modal({ children }) {
    const nav = useNavigate()
    function closeHandler() {
        nav("..")
    }
    return (
        <>
            <div className={styles.backdrop} onClick={closeHandler}/>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    )
} 