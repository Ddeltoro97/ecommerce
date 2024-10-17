
import styles from "./Modals.module.css";

export default function ConfirmCart({modal, setModal}){



    return(
        <div className={styles.container}>
            <div className={styles.confirmWindow}>
                <h2>The product has been added to cart</h2>  
                <button className={styles.button} onClick={setModal}>Ok</button>
            </div>
            <div className={styles.blackscreen}>
            </div>    
        </div>
    )
}