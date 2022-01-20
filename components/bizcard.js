import styles from '../styles/Bizcard.module.scss';
import Link from 'next/link'
import Image from 'next/image';
import Employers from './widgets/employers';
import Skillbar from '../components/widgets/skillbar'


export default function Bizcard() {
return (

  <div className={styles['business-card']}>
  
    <div className={styles['bc-photo-wrap']}>
      <Image src="/selfie-circle.png" layout='fill' alt="selfie" priority={true} objectFit='contain'></Image>
    </div>
    
    <div className={styles['bc-details']}>

      <div className={styles['bc-email']}>Joseph.Ward<br/>@Outlook.com</div>    
      <div className={styles['mobile-border-grid']}>
        <div className={styles['mobile-border-box']}></div>
        <div className={styles['mobile-border-images']}>
        <Employers/>
        </div>
      </div>

      
      <ul className={styles['service-summary']}>
        {`#Operational-Efficiency; #Digital-Transformation; #Analytics; #Strategy; #Tooling;`}
      </ul>
      <Skillbar/>
      

      <div className={styles['personal-statement']}>
        Digital Transformation is the new buzzword. 
        <br/>
        -<br/>
        Flexible and scalable solutions demand detailed knowledge of your operations.
        <br/>
        -<br/>
        I use traditional project management tools, modern analytics, and a broad range of experience to help all kinds of teams reach their maximum potential.
      </div>

      
      

    </div> 
  
  </div>
)};




