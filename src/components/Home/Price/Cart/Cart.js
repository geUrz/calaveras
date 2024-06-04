import styles from './Cart.module.css'

export function Cart(props) {

  const {title, subtitle, description, price} = props

  return (

    <div className={styles.price}>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <h1>{price}</h1>
        <h2>MXN</h2>
      </div>
    </div>

  )
}
