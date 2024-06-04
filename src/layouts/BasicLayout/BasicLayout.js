import { TopBar, Footer, Whatsapp } from '@/components/Layout'
import classNames from 'classnames'
import styles from './BasicLayout.module.css'


export function BasicLayout(props) {

  const {
    children,
    noFooter,
  } = props

  return (
    <>
      <TopBar/>
        <div>
          {children}

          <div className={styles.wallpaper}></div>

        </div>
      <Whatsapp />
      <Footer noFooter={noFooter}/>
    </>
  )
}
