import styles from './Search.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/actions';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Search({searchString}){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const categories = useSelector((state) => state.categories);

    useEffect(() =>{
        dispatch(getProducts())
    }, [dispatch]);


    let productsToRender = products.filter((product) =>{
        return(
            product.name.toLowerCase().includes(searchString.toLowerCase())
        )
    })

    const [filter, setFilter] = useState({
        order: "id",
        filter: ""
    })

    const handleOrder = (event) =>{
        event.preventDefault();
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        })
    }

    // console.log(products)

    productsToRender = productsToRender.filter((product) =>{
        return(
            product.CategoryId.includes(filter.filter)
        )
    })

    if(filter.order == 'id'){
        productsToRender = productsToRender.sort((a, b) => a.id - b.id)
    }

    if(filter.order == 'lowest'){
        productsToRender = productsToRender.sort((a, b) => a.price - b.price)
    }

    if(filter.order == 'highest'){
        productsToRender = productsToRender.sort((b, a) => a.price - b.price)
    }

    if(filter.order == 'aToZ'){
        productsToRender = productsToRender.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB){
                return -1;
            }

            if(nameA > nameB){
                return 1;
            }
            
            return 0;
        })
    }

    if(filter.order == 'zToA'){
        productsToRender = productsToRender.sort((b, a) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB){
                return -1;
            }

            if(nameA > nameB){
                return 1;
            }
            
            return 0;
        })
    }

    if(filter.order == 'top'){
        productsToRender = productsToRender.sort((b, a) => a.rate - b.rate);
    }
    

    return(
        <div className={styles.container}>
            <div>
                <select name="order" className={styles.select} onChange={handleOrder}>
                    <option value="id">--Order--</option>
                    <option value="lowest">Price (lowest to highest)</option>
                    <option value="highest">Price (highest to lowest)</option>
                    <option value='aToZ'>A to Z</option>
                    <option value='zToA'>Z to A</option>
                    <option value='top'>Top Rated</option>
                </select>
                <select name="filter" className={styles.select} onChange={handleOrder}>
                    <option value="">--Filter--</option>
                    {categories.map((category) =>{
                        return(
                            <option value={category.id}>{category.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className={styles.secondHolder}>
                {productsToRender.map(product => 
                    <div>
                        <Link to = {`/product/${product.id}`}>
                        <ProductCard
                        product={product}/>   
                        </Link>
                    </div>)}
            </div>
           {productsToRender.length == 0 && 
           <h2>Sorry this search did not bring any results</h2>
           }
        </div>
        
    )
}