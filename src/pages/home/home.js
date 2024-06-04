import { BasicLayout } from '@/layouts'
import { Price } from '@/components/Home/Price'
import { TopBar } from '@/components/Layout'
import styles from './home.module.css'

export default function Home() {
  return (
    
    <BasicLayout noFooter={false}>

      <TopBar />

      <Price />
      
    </BasicLayout>

  )
}
