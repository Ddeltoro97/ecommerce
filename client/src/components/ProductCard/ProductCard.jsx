import {Rate} from "antd";

import styles from './ProductCard.module.css'

export default function ProductCard({product}){

    return(
        <div className={styles.product}>
            <div className={styles.imageHolder}>
                <img className={styles.image} src={product.image} alt="" />
            </div>
            <div className={styles.infoHolder}>
                <h4>{product.name}</h4> 
                {/* <p>{product.rate}</p> */}
                <Rate
                allowHalf
                allowClear={false}
                disabled
                defaultValue={product.rate}/>
                <p>${product.price}</p>
            </div>
        </div>
    )
}