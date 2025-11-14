import styles from "../styles/Link.module.css"
import { Link } from "react-router";
function LinkTag({href, children}) {
    return(<Link to={href} className={styles.link}> 
        {children}
    </Link>)
}
export default LinkTag