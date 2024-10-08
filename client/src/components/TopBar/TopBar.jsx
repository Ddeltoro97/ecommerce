import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
  faCartShopping,
  faMagnifyingGlass,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./TopBar.module.css";


export default function TopBar({isOpen, renderCat, setCategory, name, handleName, searchString, handleSearch}) {
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    axios("http://localhost:3001/products")
    .then((response) => {
      setFeatured(response.data);
    });
  }, []);

  let random = Math.floor(Math.random() * 38);

  // console.log('name', name)
  // console.log('searchString', searchString);
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.holder}>
          <h3>Hello, user</h3>
        </div>
        <div className={styles.flex}>
          <input className={styles.searchbar} type="text" onChange={handleName} />
          <Link to = '/search'><FontAwesomeIcon className={styles.glass} onClick={handleSearch} icon={faMagnifyingGlass} /></Link>    
        </div>
        <div style={{ width: "50px" }}>
          <Link to = '/cart'><FontAwesomeIcon className={styles.cart} icon={faCartShopping} /></Link>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.holder}>
          <h3 onClick={renderCat} className={styles.categories}>
            <FontAwesomeIcon icon={faList} /> Categories
          </h3>
        </div>
        <div className={styles.flex}>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/about">
            <h3>About</h3>
          </Link>
          <Link onClick={() => setCategory("")} to="/products">
            <h3>Products</h3>
          </Link>
          <Link to={`/product/${random}`}>
            <h3>Featured</h3>
          </Link>
        </div>
        <div style={{ width: "50px" }}></div>
      </div>
    </div>
  );
}
