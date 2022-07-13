import styles from './home.module.css';
import Components from '../components'

export default function Home() {
  const {NestedLayout} = Components();
  return(
    <NestedLayout>
      content
    </NestedLayout>
  )
}