import styles from "../styles/Nav.module.css"
import LinkTag from "./Link"
import { Barcode } from 'lucide-react';
import ShoppingCart from './ShoppingCart'
// ::reminder refactor a to Link_to when dealing with routes

function Nav() {
    return(<nav className={styles.nav}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <Barcode size={32}/>
                <p>SHOPPING CART</p>
            </div>
            <div className={styles.links}>
                <LinkTag href="/">Home</LinkTag>
                <LinkTag href="/shop">Shop</LinkTag>
            </div>
           <ShoppingCart className={styles.cart}/>
        </div>
    </nav>)
}

export default Nav