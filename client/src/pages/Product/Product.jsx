import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import ConfirmCart from "../../components/Modals/ConfirmCart";
import {Rate} from "antd";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import styles from './Product.module.css'
import { addCart } from "../../redux/actions";


export default function Product(){

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart);

    const {id} = useParams()
    const [product, setProduct] = useState({})

    const[modal,setModal] = useState(true);

    const toggleModal = () =>{
        setModal(!modal);
    }

    useState(() =>{
        axios(`http://localhost:3001/products/${id}`)
        .then(response =>{
            setProduct(response.data)
        })
    }, [id])

    const handleAdd = () =>{
        dispatch(addCart(product));
        toggleModal()
    }
    
    console.log(modal)
    return(
        <div className={styles.container}>
            {modal && 
                   <ConfirmCart
                   modal={modal}
                   setModal={toggleModal}/>
            }
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
                        <button onClick={handleAdd} className={styles.button}>Add to Cart</button>

                    </div>
                </div>
                <div className={styles.reviews}>
                    <h2>Customer Reviews</h2>
                </div>
            </div>
           {modal && 
           <div onClick={toggleModal} className={styles.blackScreen}></div>
           }
        </div>
    )
}