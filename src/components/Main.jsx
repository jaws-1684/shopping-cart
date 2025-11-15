import styles from "../styles/Main.module.css"

function Main ({children, title}) {
    return(<main className={styles.main}>
        <div className={styles.main_wrapper}>
          {children}
        </div>
    </main>)
}
export default Main