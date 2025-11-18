import { ShoppingCart as Icon} from 'lucide-react';
import styles from "../styles/ShoppingCart.module.css"
import LinkTag from "./Link"

function ShoppingCart ({cart}) {
    const size = cart ? Object.values(cart).reduce((value, acc) => acc += value, 0) : 0
    return( <div data-testid="cart"className={styles.cart}>
                <LinkTag href="/cart"><Icon/></LinkTag>
                {size > 0 && <div className={styles.quantity}>{size}</div>}
            </div>)
}
export default ShoppingCart