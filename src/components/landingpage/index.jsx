import styles from '../../../styles/Home.module.css'
import BG from '../../components/image/nathan.png'
import Image from "next/image";

const Landing =()=>{
    return(
        <div className={styles}>
            <Image src={BG} alt="bg" />
        </div>
    )
}
export default Landing