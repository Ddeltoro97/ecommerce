import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';

import styles from './Products.module.css';

export default function Products({category, setCategory}){

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories)
    
    useEffect(() =>{

        if(category){
            axios.get(`http://localhost:3001/products?name=${category}`)
            .then(response => {
                setProducts(response.data)
            })
        } 
    }, [category]);

    console.log(products);


    return(

        <div className={styles.container}>
            {category  ?   
            <div className={styles.container}>
                <h2>{category}</h2>
                <div className={styles.productHolder}>
                    <div className={styles.secondHolder}>
                        {products.map(product =>{
                        return(
                            <Link to ={`/product/${product.id}`}>
                            <ProductCard
                            product={product}/>
                            </Link>
                            )
                    })}
                    </div>
            </div>
        </div> : 

        <div className={styles.categoryHolder}>
            <h2>Select Category</h2>
            <div className={styles.catHolder2}>
                {categories.map((category) =>{
                    return(
                        <div className={styles.category} onClick={() => setCategory(category.name)}>
                        <h2>{category.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>}
        </div>
       
    )
}