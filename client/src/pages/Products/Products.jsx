import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

import styles from './Products.module.css';

export default function Products({category}){

    const [products, setProducts] = useState([]);

    
    useEffect(() =>{

        if(category){
            axios.get(`http://localhost:3001/products?name=${category}`)
            .then(response => {
                setProducts(response.data)
            })
        }

    }, [category]);

    console.log(products)
    console.log(category)

    return(

        <div className={styles.container}>
            {category  ?   
            <div className={styles.container}>
                <h2>{category}</h2>
                <div className={styles.productHolder}>
                {products.map(product =>{
                    return(
                        <ProductCard
                         product={product}/>
                        )
                })}
            </div>
        </div> : 

        <div className={styles.categoryHolder}>
            <h1>Select Category</h1>
        </div>}
        </div>
       
    )
}