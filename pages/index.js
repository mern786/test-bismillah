
// components
import Chart from "../components/Chart/Chart";
import Footer from "../components/Footer/Footer";
import Title from "../components/Title/Title";

// styles
import styles from '../styles/global.module.css'


export default function Home() {
  return (
    <div className={styles.app}>
      <Title />
      <Chart />
      <Footer />
    </div>
  )
}
