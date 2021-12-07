import Contact from '../components/contactUs/index'
import Styles from '../styles/main/main.module.scss'
import Image from 'next/image'
import logo from "../public/assets/desk.jpg"
export default function Home() {
  return (
    <div className={Styles.container}>

      <Image
        className={Styles.image}
        src={logo}
        alt="Picture of the author"
        height={600}
        width={700}
      />

      <div className={Styles.right}>
        <Contact />
      </div>
    </div>
  )
}
