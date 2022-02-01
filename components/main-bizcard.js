import styles from '../styles/Bizcard.module.scss';
import Image from 'next/image';
import Skillbar from './main-skillbar'
import { Menu, Transition } from '@headlessui/react'



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
      {`I began my career with a rotational program that exposed me to Lean, SQL, Tableau, formal project management practices, and how people react when they think you’re telling them how to do their job.`}
    </div>
    <div className={styles['personal-statement']}>
      {`I’ve since mapped and designed processes, identified KPIs, solved culture issues, and became a trusted partner for both information and executing improvements.`}
    </div>
    <div className={styles['personal-statement']}>
      {`I enjoy sitting at the cross-section of analytics and operations, finding unique solutions for unique problems, and helping all kinds of teams reach their maximum potential, quickly.`}
    </div>
    <div className={styles['personal-statement']}>
      {`From running with the bulls in Pamplona to homeless outreach in Penn Station, I’ve always chased new experiences and perspectives. I firmly believe time is the most valuable thing in the world and I plan to make the most of it.`}
    </div>
    <Skillbar/>

    <div className={styles['bc-blog-menu-wrap']}><Menu><Menu.Button className={styles['bc-blog-button']}>Blog Menu</Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>Overview</li></Menu.Item>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>Core Functions</li></Menu.Item>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>{`Processes & Tools`}</li></Menu.Item>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>People Management</li></Menu.Item>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>{`Partnerships & Strategy`}</li></Menu.Item>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>Data Management</li></Menu.Item>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>All Links</li></Menu.Item>
          <Menu.Item className={styles['bc-blog-link']}>
            <li>Other</li></Menu.Item>
        </Menu.Items>
        </Transition>
      </Menu></div>

      <div className={styles['mobile-blog-container']}>

      </div>
  
  </div>
)};




