import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
  faCartShopping,
  faMagnifyingGlass,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import Categories from "../Categories/Categories";

import styles from "./TopBar.module.css";

export default function TopBar({isOpen, renderCat}) {
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    axios("http://localhost:3001/products")
    .then((response) => {
      setFeatured(response.data);
    });
  }, []);

  let random = Math.floor(Math.random() * 38);


  return (
    <div style={{ position: "fixed" }}>
      <div className={styles.container}>
        <div className={styles.holder}>
          <h3>Hello, user</h3>
        </div>
        <div className={styles.flex}>
          <input className={styles.searchbar} type="text" />
          <FontAwesomeIcon className={styles.glass} icon={faMagnifyingGlass} />
        </div>
        <div style={{ width: "50px" }}>
          <FontAwesomeIcon className={styles.cart} icon={faCartShopping} />
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
          <Link to="/search">
            <h3>Products</h3>
          </Link>
          <Link onClick to={`/product/${random}`}>
            <h3>Featured</h3>
          </Link>
        </div>
        <div style={{ width: "50px" }}></div>
      </div>
    </div>
  );
}
