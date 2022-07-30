import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Footer from '../components/footer'
import Landing from '../components/landingpage'
import Navbar from '../components/navbar'
// import BG from '../components/image/nathan.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Landing/>

      {/* <Image className='w-full' src={BG} alt="bg" /> */}
      <div className='text-blue-600 font-extrabold'>ini Home</div>

      <Footer/>
    </div>
  )
}


