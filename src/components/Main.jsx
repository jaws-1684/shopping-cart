import { useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import styles from "../styles/Main.module.css"

function Main ({categories}) {
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