import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import styles from "./Categories.module.css";

export default function Categories({isOpen, renderCat, setCategory, children}) {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
   

    useEffect(() =>{
     dispatch(getCategories())
    }, []);

    const navCategory = (category) =>{
        setCategory(category);
        renderCat();
    }

    
  return (
    <div className={styles.container}>
        <div style={{width: isOpen ? "300px" : "0px"}} className={styles.categories}>
            <div className={styles.titleHolder}>
                <h3 className={styles.title}>{isOpen ? "Select Category" : ""}</h3>
                <h3 onClick={renderCat} style={{cursor: 'pointer', fontWeight: '100'}}>{isOpen ? "X" : ""}</h3>
            </div>
            <div>
            {isOpen && categories.map(category =>{
                    return(
                        <Link to = '/products'>
                        <div onClick={() => navCategory(category.name)} className={styles.classHolder}>
                            <h3>{category.name}</h3>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        </Link>
                        
                    )
                })}
            </div>
          
        </div>

        {isOpen && <div onClick={renderCat} styles={{display: isOpen ? "block" : "none"}} className={styles.blackScreen}>
        </div>}
        
        <div>
            <main>{children}</main>
        </div>
    </div>
  );
}
