import TopBar from "../../components/TopBar/TopBar"

import styles from './Home.module.css'


export default function Home(){

    return(
     <div className={styles.container}>
        <TopBar/>
        <h1>Este es el componente home</h1>
     </div>)
}