import styles from './home.module.css'
import SideNav from '../components/SideNav'

export default function Home() {
  return(
    <div className={`${styles.content} content`}>
      <SideNav />
      <p>content</p>
      <p>user</p>
    </div>
  )
}