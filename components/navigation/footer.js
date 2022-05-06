import styles from '/Users/Daps/Desktop/stc-app/styles/MainLayout.module.css'
import styles2 from '/Users/Daps/Desktop/stc-app/styles/Home.module.css'


export default function Footer() {
    return(
        <div className={styles2.container}>
        <footer className={styles.footer}>       
        <img src='/Users/Daps/Desktop/stc-app/public/sclogo.png'alt="STC Logo" className={styles.logo} />
        </footer>
        </div>
    )

}
