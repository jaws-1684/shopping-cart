import styles from "../styles/Card.module.css"

function ShopCard({object}) {
    const {image, title, price} = object
    return(<article className={styles.article_container}>
        <a href="" className={styles.article}>
            <img src={image} alt={title + " image"} />
            <div className={styles.shop_card_keys}>
                <p style={{width: "70%"}}>{title}</p>
                <p>${price} USD</p>
            </div>
        </a>
    </article>)
}
export default ShopCard