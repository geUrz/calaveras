import { Cart } from './Cart'
import styles from './Price.module.css'

export function Price() {

  return (

    <div className={styles.section}>
      <div className={styles.container}>

        <Cart
          title='Básico'
          subtitle='(color y negro)'
          description='Lorem ipsum dolor sit amet consectetur adipiscing elit odio taciti tempor nisl arcu, purus a ut egestas eros laoreet nunc quis et vel.'
          price='$80'
        />

        <Cart
          title='Básico'
          subtitle='(blanco)'
          description='Lorem ipsum dolor sit amet consectetur adipiscing elit odio taciti tempor nisl arcu, purus a ut egestas eros laoreet nunc quis et vel.'
          price='$100'
        />

        <Cart
          title='Percudido'
          subtitle='(limpieza profunda)'
          description='Lorem ipsum dolor sit amet consectetur adipiscing elit odio taciti tempor nisl arcu, purus a ut egestas eros laoreet nunc quis et vel.'
          price='$150'
        />

<Cart
          title='Restaurado y pintado'
          subtitle='(color, negro y blanco)'
          description='Lorem ipsum dolor sit amet consectetur adipiscing elit odio taciti tempor nisl arcu, purus a ut egestas eros laoreet nunc quis et vel.'
          price='$200'
        />

      </div>
    </div>

  )
}
