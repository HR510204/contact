import Contact from '../components/contactUs/index'
import Styles from '../styles/main/main.module.scss'
import Image from 'next/image'
import logo from "../public/assets/desk.jpg"
import useWindowDimensions from "../components/useWindowDimensions";

export default function Home() {

  const { height, width } = useWindowDimensions();
  const result = width <= 1160 ? "responsive" : null

  return (
    <div className={Styles.container}>
      <Image
        className={Styles.image}
        src={logo}
        alt="Picture of the author"
        width={650} layout={result}
      />
      <div className={Styles.right}>
        <Contact />
      </div>
    </div>
  )
}
