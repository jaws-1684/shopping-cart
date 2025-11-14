import styles from "../styles/Card.module.css"
import { ArrowRight } from 'lucide-react';

function CategoryCard({object}) {
    const {image, category} = object
    return(<article className={styles.article}>
        <img src={image} alt={category + " image"} />
        <a href="">
            <h1>{category}</h1>
           <ArrowRight strokeWidth={3}/>
        </a>
    </article>)
}
export default CategoryCard