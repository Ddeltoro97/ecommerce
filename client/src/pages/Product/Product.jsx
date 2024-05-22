import { useParams } from "react-router-dom"
import { useState } from "react"
import {Rate} from "antd";
import axios from "axios"

import styles from './Product.module.css'


export default function Product(){

    const {id} = useParams()
    const [product, setProduct] = useState({})

    useState(() =>{
        axios(`http://localhost:3001/products/${id}`)
        .then(response =>{
            setProduct(response.data)
        })
    }, [id])
    
    console.log(product)
    return(
        <div className={styles.container}>
            <div className={styles.nose}>
                <div className={styles.pc}>
                    <div>
                        <img src={product.image} alt="" className={styles.image}/>
                    </div>
                    <div className={styles.infoProduct}>
                        <h1>{product.name}</h1>

                        {product.rate ? 
                                <Rate
                                className={styles.stars}
                                allowHalf
                                allowClear={false}
                                disabled
                                defaultValue={product.rate}/>
                                : ""
                    }
                        <h2>${product.price}</h2>
                        <button className={styles.button}>Add to Cart</button>
                    </div>
                </div>
                <div className={styles.reviews}>
                    <h2>Customer Reviews</h2>
                </div>
            </div>
        </div>
    )
}