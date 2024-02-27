import TopBar from "../../components/TopBar/TopBar"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';

import styles from './Home.module.css'


export default function Home(){

   const [promo, setPromo] = useState({})

   useEffect(() =>{
      axios(`http://localhost:3001/products/${14}`)
      .then(response =>{
         setPromo(response.data)
      });
   }, []);



    return(
     <div className={styles.container}>
        <div className={styles.promo}>
         <div>
            <h3>Best Seller 2023</h3>
            <h1>{promo.name}</h1>
            <Link to = {`/product/${promo.id}`}><button className={styles.button}>Buy Now</button></Link>
         </div>
         <img className={styles.promoImg} src={promo.image} alt="" />
        </div>
     </div>)
}