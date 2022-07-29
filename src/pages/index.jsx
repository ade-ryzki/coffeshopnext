import styles from '../../styles/Home.module.css'
import Footer from '../components/footer'
import Landing from '../components/landingpage'
import Navbar from '../components/navbar'


export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Landing/>
      <div className='text-blue-600 font-extrabold'>ini Home</div>

      <Footer/>
    </div>
  )
}


