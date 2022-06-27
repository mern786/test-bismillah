
import React from 'react'

// styles
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
        <div className={styles.center}>
          <img className={styles.logo} src='/logo.gif' />
        </div>
        <a href='http://localhost:3000/'>
          <img className={styles.QR} src='./qr.png' />
        </a>
    </footer>
  )
}
