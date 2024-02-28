import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import styles from './Product.module.css'


export default function Product(){

    const {id} = useParams()

    useState(() =>{
        axios(`http://localhost:3001/products/${id}`)
        .then(response =>{
            console.log(response.data)
        })
    }, [id])
    

    return(
        <div className={styles.container}>
            <div className={styles.nose}>
                <h1>Este es el componente Product {id}</h1>
            </div>
            
        </div>
    )
}