import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.css'
import { useState, useEffect } from 'react';
import { removeCart } from "../../redux/actions";


export default function Cart(){

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart);

    const handleDelete = (item) =>{
        dispatch(removeCart(item));
    }


    console.log(items);
    return(
        <div className={styles.container}>
            <h1>Cart</h1>
            {items.length === 0 ?
            <h1>No items to display</h1> : ""}
            <div className={styles.nose}>
                {items?.map((item) =>{
                    return(
                        <div className={styles.holdItem}>
                            <img src={item.image} alt="" />
                            <div>
                                <h2>{item.name}</h2>
                                <h3>{item.price}$</h3>
                            </div>
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </div>
                    )
                })}
            </div>
            {items.length &&
            <button className={styles.checkout}>Checkout</button>}
        </div>
    )
}
