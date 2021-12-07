import Contact from '../components/contactUs/index'
import Styles from '../styles/main/main.module.scss'

export default function Home() {
  return (
    <div className={Styles.container}>
      hello world
      <div>
        <Contact />
      </div>
    </div>
  )
}
