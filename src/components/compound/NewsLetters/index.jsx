import { AttachEmail } from '@mui/icons-material'
import React , {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styles from './index.module.scss'

const NewsLetter = () => {
    useEffect(() => {
        Aos.init({duration:1500});
      }, [])
  return (
    <div className={styles.Container} data-aos="fade-up">
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <AttachEmail />
                <span>Sign up to Newsletter</span>
            </div>
            <div className={styles.center}>
                ...and receive $25 coupon for first <br /> shopping.
            </div>
            <div className={styles.right}>
                <input type="text"  placeholder='Enter Your E-mail'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter