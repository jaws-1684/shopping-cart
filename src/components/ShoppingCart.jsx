import { ShoppingCart as Icon} from 'lucide-react';
import styles from "../styles/ShoppingCart.module.css"
import LinkTag from "./Link"
function ShoppingCart (props) {
    let size = 2
    return( <div className={styles.cart}>
                <LinkTag href="/cart"><Icon/></LinkTag>
                {size > 0 && <div className={styles.quantity}>{size}</div>}
            </div>)
}
export default ShoppingCart