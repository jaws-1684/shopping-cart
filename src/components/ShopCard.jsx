import styles from "../styles/Card.module.css"
import { Link } from "react-router";
import { Price } from "../App";
function ShopCard({object}) {
    const {image, title, price} = object
    return(<article className={styles.shop_article_container}>
        <Link to={`/items/${object.id}`} className={styles.article}>
            <img src={image} alt={title + " image"} />
            <div className={styles.shop_card_keys}>
                <p style={{width: "70%"}}>{title}</p>
                <Price price={price}/>
            </div>
        </Link>
    </article>)
}
export default ShopCard