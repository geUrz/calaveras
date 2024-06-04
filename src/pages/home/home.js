import { Price } from '@/components/Home/Price'
import { BasicLayout } from '@/layouts'
import styles from './home.module.css'
import { TitleHead } from '@/components/Home/TitleHead'

export default function Home() {
  return (
    
    <BasicLayout>

      <div className={styles.section}>

        <TitleHead />

        <Price />

      </div>
      
    </BasicLayout>

  )
}
