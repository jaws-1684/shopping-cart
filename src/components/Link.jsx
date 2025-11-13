import styles from "../styles/Link.module.css"
function LinkTag({href, children}) {
    return(<a href={href} className={styles.link}> 
        {children}
    </a>)
}
export default LinkTag