import Main from '../components/Main'
import { useOutletContext, useParams } from 'react-router';
import ShopCard from "../components/ShopCard"
import Filter from '../components/Filter';
import styles from "../styles/Main.module.css"
import { useEffect, useState } from 'react';
import LinkTag from "../components/Link.jsx"

function Shop(props) {
    const [items] = props.data || useOutletContext()
    const [currentitems, setcurrentItems] = useState(items)
    const [title, setTitle] = useState("products")
    const { scope } = props.scope || useParams()
    useEffect(() => {
        if (scope && scope.length > 0) {
            const id = options.filter(o => o.category === scope)[0].id
            filterBy(id)
        }
        return  () => {
            setcurrentItems(items)
            setTitle("products")
        } 
    }, [scope])
  
    const options = [{
        id: 1,
        name: "men",
        category: "men's clothing"
    },
    {
        id: 2,
        name: "women",
        category: "women's clothing"
    },
    {
        id: 3,
        name: "jewelery",
        category: "jewelery"
    },
    {   id: 4,
        name: "electronics",
        category: "electronics"
    }
    ]
    function filterBy (idx) {
        if (idx == 0) {
            setcurrentItems(items)
            setTitle("products")
            return
        }
        const [opt] = options.filter(o => o.id === Number(idx))
        const cat = opt.category
        const newItems = items.filter(item => item.category === cat)
        setcurrentItems(newItems)
          setTitle(cat)
    }
    function handleCategoryChange(e) {
        const target = e.target
        const value = target.value
        filterBy(value)
    }
    return(<Main>
        <h1 data-testid="header" className={styles.main_header}>{title}</h1>
        <div className={styles.shop_wrapper}>
            {scope && <div  className={styles.all_products}><LinkTag href="/shop">All Products</LinkTag></div>}
            {!scope && <div className={styles.filter}><Filter onChange={handleCategoryChange} title="Categories" options={options}/></div>}
            <div className={styles.products_wrapper}>
                {currentitems.map(cat => <ShopCard object={cat} key={cat.id}/>)}
            </div>
        </div>
    </Main>)
}
export default Shop