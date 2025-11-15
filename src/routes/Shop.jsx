import Main from '../components/Main'
import { useOutletContext } from 'react-router';
import ShopCard from "../components/ShopCard"
import styles from "../styles/Main.module.css"

function Shop() {
    const items = useOutletContext()
    return(<><Main>
        <h1 className={styles.main_header}>All products</h1>
        <div className={styles.shop_wrapper}>
            <div className={styles.filter}>Link1</div>
            <div className={styles.products_wrapper}>
                {items.map(cat => <ShopCard object={cat} key={cat.id}/>)}
            </div>
        </div>
    </Main></>)
}
export default Shop