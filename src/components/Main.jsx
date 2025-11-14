import { useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import styles from "../styles/Main.module.css"

function Main () {
    const [products, setProducts] = useState([])
    const categories = products.filter((v, i, a) =>
        a.findIndex(({ category }) => v.category === category) === i
    );

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return(<main className={styles.main}>
        <div className={styles.main_wrapper}>
            <h1 className={styles.main_header}>Categories</h1>
            <div className={styles.articles_wrapper}>
                {categories.map(cat => <CategoryCard object={cat} key={cat.id}/>)}
            </div>
        </div>
    </main>)
}
export default Main