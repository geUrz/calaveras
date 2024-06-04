import { Image } from 'semantic-ui-react'
import { FaBars, FaHeart, FaHome, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa'
import styles from './TopBar.module.css'


export function TopBar() {

  return (

    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Image src='/img/logo.webp' alt='Logo' />
      </div>
    </div>

  )
}
