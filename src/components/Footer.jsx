import styles from "../styles/Footer.module.css"

function Footer() {
    return(<footer className={styles.footer}>
        <div className={styles.footer_wrapper}>
            <h1>Contacts</h1>
            <a className={styles.link} href="https://github.com/jaws-1684">Github</a>
        </div>
         <div className={styles.footer_bottom}><p>© 2025, Shopping Cart Powered by React</p></div>
    </footer>)
}
export default Footer