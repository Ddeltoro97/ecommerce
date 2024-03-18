import styles from './Search.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/actions';
import { useEffect } from 'react';

export default function Search(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() =>{
        dispatch(getProducts())
    }, [dispatch]);

    return(
        <div className={styles.container}>
            {products.map(product => 
                <div>
                    <h1>{product.name}</h1>
                </div>)}
        </div>
        
    )
}