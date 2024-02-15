import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faMagnifyingGlass, faList} from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

import styles from './TopBar.module.css'

export default function TopBar(){



    return(
        <div>
            <div className={styles.container}>
                <div className={styles.holder}>
                    <h3>Hello, user</h3>
                </div>
                <div className={styles.flex}>
                    <input type="text" />
                    <FontAwesomeIcon className={styles.glass} icon={faMagnifyingGlass}/>
                  
                </div>
                <div style={{width: '30px'}}>
                    <FontAwesomeIcon className={styles.cart} icon={faCartShopping}/>
                </div>
                
            </div>

            <div className={styles.container}>
                <div className={styles.holder}>
                    <h3 className={styles.categories}><FontAwesomeIcon icon={faList}/> Categories</h3>
                </div>
                <div className={styles.flex}>
                    <Link to = '/'><h3>Home</h3></Link>
                    <Link to = '/about'><h3>About</h3></Link>
                    <Link to = '/search'><h3>Products</h3></Link>
                    <Link to = '/'><h3>Featured</h3></Link>
               
                </div>
                <div style={{width: '30px'}}>
                   
                    
                </div>
            </div>
            
        </div>
    )
}