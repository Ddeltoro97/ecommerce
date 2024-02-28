
import styles from './ProductCard.module.css'

export default function ProductCard({product}){

    return(
        <div className={styles.product}>
            <img className={styles.image} src={product.image} alt="" />
            <div className={styles.infoHolder}>
                <h4>{product.name}</h4> 
                <p>STARS GO HERE</p>
                <p>${product.price}</p>
            </div>
        </div>
    )
}