import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks'
import { FaCartPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useCart } from '@/hooks'
import { Button } from "semantic-ui-react"
import styles from './Cart.module.css'

export function Cart(props) {

  const {product} = props
  const productId = product.id

  const { user } = useAuth()

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const {addCart} = useCart()

  const addCartWrapper = () => {
    setLoading(true)
    addCart(productId)

    setTimeout(() => {
      setLoading(false)
    }, 500)

  }

  return (
    <div className={styles.boxCart}>
      {user ? (
        <>
          <Button primary size='small' onClick={addCartWrapper} loading={loading}>
            Agregar al carrito
              <FaCartPlus /> 
          </Button>
        </>
      ) : (
        <>
          <Button primary size='small' onClick={() => router.push('/join/signin')}>
            Agregar al carrito
            <FaCartPlus />
          </Button>
        </>
      )}
    </div>
  )
}
