import { useState, React } from 'react';
import styles from '../styles/navbar.module.css'

export default function Navbar(){

    const [toggle, setToggle] = useState(false)

    function togglebutton() {
      if (toggle)
        setToggle(false)
      else
        setToggle(true)
    }
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.subcont}>
            <div className={styles.lines} onClick={togglebutton}>
              <div className={`${styles['line-1']} ${styles['common']} ${toggle ? styles.change : ''}`}></div>
              <div className={`${styles['line-2']} ${styles['common']} ${toggle ? styles.change : ''}`}></div>
              <div className={`${styles['line-3']} ${styles['common']} ${toggle ? styles.change : ''}`}></div>
            </div>
          </div>
  
          <div className={`${styles['links']} ${toggle ? styles.change : ''}`}>
            <div className={styles.logocont}>
              <a href='/'><img src=
                "/services.png" className={styles.pic}></img></a>
            </div>
            <div className={`${styles['links-container']}`}>
              <a href='/' className={styles.navele}>Home</a>
              <a href='/Login' className={styles.navele}>Login</a>
              <a href='/Signup' className={styles.navele}>Signup</a>
              <a href='/status' className={styles.navele}>Status</a>
              <a href='/bank/banklogin' className={styles.navele}>Bank Login</a>
            </div>
          </div>
        </div>
      </>
    );
}

