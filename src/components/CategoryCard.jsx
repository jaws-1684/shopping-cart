import styles from "../styles/Card.module.css"
import { ArrowRight } from 'lucide-react';

function CategoryCard({object}) {
    const {image, category} = object
    return(<article className={styles.article_container}>
        <a href="" className={styles.article}>
            <img src={image} alt={category + " image"} />
            <div className={styles.keys}>
                <h1 className={styles.article_header}>{category}</h1>
                <ArrowRight strokeWidth={3}/>
            </div>
        </a>
    </article>)
}
export default CategoryCard