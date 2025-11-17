import styles from "../styles/Card.module.css"
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router";

function CategoryCard({object}) {
    const {image, category} = object
    return(<article className={styles.article_container}>
        <Link to={`/products/${category}`} className={styles.article}>
            <img src={image} alt={category + " image"} />
            <div className={styles.keys}>
                <h1 className={styles.article_header}>{category}</h1>
                <ArrowRight strokeWidth={3}/>
            </div>
        </Link>
    </article>)
}
export default CategoryCard