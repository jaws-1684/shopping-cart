import Media from '../components/Media'
import Main from '../components/Main'
import { useOutletContext } from 'react-router';

function categorize(items) {
  return items.filter((v, i, a) =>
        a.findIndex(({ category }) => v.category === category) === i
    );
}
function Home() {
    const items = useOutletContext()
    const categories = categorize(items)
    return(<> 
    <Media/>
    <Main categories={categories}/>
    </>)
}
export default Home