import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Categories.module.css";

export default function Categories({isOpen, renderCat, children}) {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        axios('http://localhost:3001/categories')
        .then(response => {
            setCategories(response.data)
        })
    }, []);

    console.log(categories)
    
  return (
    <div className={styles.container}>
        <div style={{width: isOpen ? "300px" : "0px"}} className={styles.categories}>
            <div className={styles.titleHolder}>
                <h3 className={styles.title}>{isOpen ? "Select Category" : ""}</h3>
                <h3 onClick={renderCat} style={{cursor: 'pointer', fontWeight: '100'}}>{isOpen ? "X" : ""}</h3>
            </div>
            {isOpen && categories.map(category =>{
                    return(
                        <h3>{category.name}</h3>
                    )
                })}
        </div>

        {isOpen && <div onClick={renderCat} styles={{display: isOpen ? "block" : "none"}} className={styles.blackScreen}>
        </div>}
        
        <div>
            <main>{children}</main>
        </div>
    </div>
  );
}
