import styles from "../styles/Nav.module.css"
import LinkTag from "./Link"
import { Barcode, ShoppingCart } from 'lucide-react';
// ::reminder refactor a to Link_to when dealing with routes

function Nav() {
    return(<nav className={styles.nav}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <Barcode size={32}/>
                <p>SHOPPING CART</p>
            </div>
            <div className={styles.links}>
                <LinkTag href="/home">Home</LinkTag>
                <LinkTag href="/shop">Shop</LinkTag>
            </div>
            <div className={styles.cart}>
                <LinkTag href="/cart"><ShoppingCart/></LinkTag>
            </div>
        </div>
    </nav>)
}

export default Nav