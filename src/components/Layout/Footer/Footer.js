import Link from 'next/link'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

export function Footer() {

  return (
    
    <>
        
        <div className={styles.containerFooter}>
        <div>
        <div className={styles.containerUbicacion}>
          <div className={styles.boxVisited}>
            <h1>visítanos en:</h1>
          </div>
          <FaMapMarkerAlt />
          <h4>Calz. Cuauhtémoc 1086-local 3,</h4>
          <h4>Prohogar, 21240 Mexicali, B.C.</h4>
        </div>
        <div className={styles.containerSiguenos}>
          <div className={styles.titleSiguenos}>
            <h4>¡ Síguenos en nuestras redes sociales !</h4>
          </div>
          <div className={styles.boxSiguenos}>
            <Link target='_blank' href=''>
              <FaFacebook />
            </Link>
            <Link target='_blank' href=''>
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className={styles.copy}>
          <h4>&copy; 2024 CALAVERAS CLEANING SHOES</h4>
        </div>
        </div>
      </div>

    </>

  )
}
