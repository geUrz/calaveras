import { Image } from 'semantic-ui-react'
import styles from './Price.module.css'

export function Price(props) {

  const {description} = props

  return (
    
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.price}>
          <div>
            <h1>Básico</h1>
            <h2>(Color y negro)</h2>
          </div>
          <div>
            <h1>...............</h1>
          </div>
          <div>
            <h1>$80</h1>
            <h2>MXN</h2>
          </div>
        </div>
        <div className={styles.price}>
          <div>
            <h1>Básico</h1>
            <h2>(Blanco)</h2>
          </div>
          <div>
            <h1>...............</h1>
          </div>
          <div>
            <h1>$100</h1>
            <h2>MXN</h2>
          </div>
        </div>
        <div className={styles.price}>
          <div>
            <h1>Restaurado y pintado</h1>
            <h2>(Color. negro y blanco)</h2>
          </div>
          <div>
            <h1>...............</h1>
          </div>
          <div>
            <h1>$200</h1>
            <h2>MXN</h2>
          </div>
        </div>
      </div>
    </div>

  )
}
