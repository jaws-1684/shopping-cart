import styles from "../styles/Banner.module.css"

function Banner({children}) {
    return (<div 
        className={styles.banner}
        >
        {children}
    </div>)
}

export default Banner