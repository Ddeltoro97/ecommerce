import { useParams } from "react-router-dom"

import styles from './Product.module.css'


export default function Product(){
    const {id} = useParams()

    return(
        <div className={styles.container}>
            <div className={styles.nose}>
                <h1>Este es el componente Product {id}</h1>
            </div>
            
        </div>
    )
}