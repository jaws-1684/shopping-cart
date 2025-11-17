import Main from '../components/Main'
import { useOutletContext } from 'react-router';
import ShopCard from "../components/ShopCard"
import Filter from '../components/Filter';
import styles from "../styles/Main.module.css"
import { useState } from 'react';

function Shop() {
    const [items] = useOutletContext()
    const [currentitems, setcurrentItems] = useState(items)
    const [title, setTitle] = useState("products")
    const options = [{
        id: "men",
        content: "Men's Clothing"
    },
    {
        id: "women",
        content: "Women's Clothing"
    },
    {
        id: "jewelery",
        content: "Jewelery"
    },
    {
        id: "electronics",
        content: "Electronics"
    }
    ]
    function handleCategoryChange(e) {
        const target = e.target
        const value = target.value
        if (value == "all" || value == "") {
            setcurrentItems(items)
            setTitle("products")
            return
        } 
        const newItems = items.filter(item => item.category === target.value)
        setcurrentItems(newItems)
        setTitle(value)
    }
    return(<Main>
        <h1 className={styles.main_header}>{title}</h1>
        <div className={styles.shop_wrapper}>
            <div className={styles.filter}><Filter onChange={handleCategoryChange} title="Categories" options={options}/></div>
            <div className={styles.products_wrapper}>
                {currentitems.map(cat => <ShopCard object={cat} key={cat.id}/>)}
            </div>
        </div>
    </Main>)
}
export default Shop