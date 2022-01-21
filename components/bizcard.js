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

      <div className={styles['bc-link-container']}>
        <button className={styles['bc-link']}>E-Mail</button>
        <button className={styles['bc-link']}><a href="https://medium.com/cultural-commentary" alt="Medium" target="_blank">Blog</a></button>
        <button className={styles['bc-link']}><a href="https://github.com/jjward25" alt="Github" target="_blank">Github</a></button>
        <button className={styles['bc-link']}>Portfolio</button>
        <button className={styles['bc-link']}><a href="https://www.linkedin.com/in/joe-ward1/" alt="LinkedIn" target="_blank">LinkedIn</a></button>
      </div>
        <Employers/>

      <div className={styles['service-summary']}>
        <div className={styles['service-tag']}>{`#Operational-Efficiency;`}</div>
        <div className={styles['service-tag']}>{`#Digital-Transformation;`}</div>
        <div className={styles['service-tag']}>{`#Analytics;`}</div>
        <div className={styles['service-tag']}>{`#Strategy;`}</div>
        <div className={styles['service-tag']}>{`#Tooling;`}</div>
      </div>

        <Skillbar/>
      
      <div className={styles['personal-statement']}>
       {`I use traditional modern tools, trusted methods, and a broad range of experience to help all kinds of teams reach their maximum potential.`}
      </div>
      <div className={styles['personal-statement']}>
       {`For modern companies, being flexible and focused is key. The Digital Transformation trend is about identifying and focusing on your core functions.  What do you do that creates the most value for your clients?`}
      </div>
      <div className={styles['personal-statement']}>
       {`With Lean/Six Sigma tools I will map out your operations, identify KPIs, reporting needs, tooling, and more.`}
      </div>
      <div className={styles['personal-statement']}>
       {`This operational mapping enables a culture of change driven by employees, as they describe their processes and problems and help prioritize solutions.`}
      </div>
      <div className={styles['personal-statement']}>
       {`At the same time these maps must be reviewed to see what we do well, and what we're better off finding a partner for.  This is the future of business, narrowly focuses operations filling a niche and expanding strategically to new partners and related products.`}
      </div>

    </div> 
  
  </div>
)};




