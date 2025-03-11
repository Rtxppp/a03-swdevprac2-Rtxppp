import styles from './card.module.css'
import Image from 'next/image'

export default function Card(){
    return(
        <div className={styles.card}>
        <div className={styles.cardimg}>
            <Image src={'/image/card.png'} alt='Product Picture' fill={true} objectFit='cover'/>
        </div>
        <div className={styles.cardtext}>
            <h1>SHORT N' SWEET</h1>
            <h4>A stunning short getaway filled with unforgettable moments. </h4>
        </div>
    </div>
    )
}