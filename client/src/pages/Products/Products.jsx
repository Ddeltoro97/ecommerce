import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        } else{
            axios.get('http://localhost:3001/categories')
            .then(response =>{
                console.log(response.data)
            })
        }

    }, [category]);


    return(

        <div className={styles.container}>
            {category  ?   
            <div className={styles.container}>
                <h2>{category}</h2>
                <div className={styles.productHolder}>
                {products.map(product =>{
                    return(
                        <Link to ={`/product/${product.id}`}>
                        <ProductCard
                         product={product}/>
                         </Link>
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