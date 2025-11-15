import Media from '../components/Media'
import Main from '../components/Main'
import { useOutletContext } from 'react-router';
import CategoryCard from "../components/CategoryCard"
import styles from "../styles/Main.module.css"

function categorize(items) {
  return items.filter((v, i, a) =>
        a.findIndex(({ category }) => v.category === category) === i
    );
}
function Home() {
    const [items] = useOutletContext()
    const categories = categorize(items)
    return(<> 
    <Media/>
    <Main>
        <h1 className={styles.main_header}>Categories</h1>
        <div className={styles.articles_wrapper}>
            {categories.map(cat => <CategoryCard object={cat} key={cat.id}/>)}
        </div>
    </Main>
    </>)
}
export default Home

  