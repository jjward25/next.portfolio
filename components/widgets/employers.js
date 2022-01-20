import styles from '../../styles/Bizcard.module.scss';
import Link from 'next/link'
import Image from 'next/image';

export default function Employers() {
return (

  <div className={styles['bc-employers']}>

    <div className={styles['bc-work-img']}>
      <Image src="/work-schwab.png" layout = 'fill'/></div>

    <div className={styles['bc-work-img']}>
      <Image src="/work-tda.png" layout = 'fill' /></div>

    <div className={styles['bc-work-img']}>
      <Image src="/work-pmp.png" layout = 'fill' /></div>

  </div>
)};




