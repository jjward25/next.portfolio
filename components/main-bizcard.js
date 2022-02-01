import styles from '../styles/Bizcard.module.scss';
import Image from 'next/image';
import Skillbar from './main-skillbar'


export default function Bizcard() {

return (
  <div className={styles['business-card']}>
    <div className={styles['bc-photo-wrap']}>
      <div className={styles['bc-gear-img']}>
        <Image src="/icon-gear-clear.png" layout='fill' alt="gear" priority={true} objectFit='contain'></Image>
      </div>
      <div className={styles['bc-photo-img']}>
        <Image src="/selfie-circle.png" layout='fill' alt="selfie" priority={true} objectFit='contain'></Image>
      </div>
    </div>
    
    <div className={styles['bc-blog-wrap']}>
      <div className={styles['bc-blog-title']}>Joe Ward</div>
      <div className={styles['bc-blog-subtitle']}><em>Operations Specialist</em></div>
      <li className={styles['bc-blog-link']}>Digital Transformation Posts</li>
      <li className={styles['bc-blog-link']}><a href="https://medium.com/my-data" title='data' target='_blank'>{`Data & Analytics Posts`}</a></li>
    </div>

    <div className={styles['service-summary']}>
      <div className={styles['service-tag']}>{`Digital Transformation`}</div>
      <div className={styles['service-tag']}>{`Data & Analytics`}</div>
      <div className={styles['service-tag']}>{`Operational Efficiency`}</div>
      <div className={styles['service-tag']}>{`Strategy`}</div>
      <div className={styles['service-tag']}>{`Change Management`}</div>
      <div className={styles['service-tag']}>{`Process Design`}</div>
      <div className={styles['service-tag']}>{`Tooling`}</div>
    </div>

    <div className={styles['personal-statement']}>
      {`From running with the bulls in Pamplona to homeless outreach in Penn Station, I’ve always chased new experiences and perspectives. I firmly believe time is the most valuable thing in the world and I plan to make the most of it.`}
    </div>
    <div className={styles['personal-statement']}>
      {`I began my career with a rotational program that exposed me to Lean, SQL, Tableau, formal project management practices, and how people react when they think you’re telling them how to do their job.`}
    </div>
    <div className={styles['personal-statement']}>
      {`I’ve since mapped and designed processes, identified KPIs, solved culture issues, and became a trusted partner for both information and executing improvements.`}
    </div>
    <div className={styles['personal-statement']}>
      {`I enjoy sitting at the cross-section of analytics and operations, finding unique solutions for unique problems, and helping all kinds of teams reach their maximum potential.`}
    </div>
    <Skillbar/>
  
  </div>
)};




