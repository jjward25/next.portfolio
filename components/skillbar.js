import styles from '../styles/Bizcard.module.scss';
import Image from 'next/image';

export default function Skillbar() {
return (

    <div className={styles['skill-icon-wrap']}>

        <p className={styles['skill-item-wrap']}>
          <div className={styles['services-skill-button']}>
          <Image src="/img-skill-sixsigma.png" alt='six-sigma' title='Lean/Six-Sigma' layout='fill'/></div>
          Six Sigma</p>

        <p className={styles['skill-item-wrap']}>
          <div className={styles['services-skill-button']}>
          <Image src="/img-skill-pmp.png" alt='pmp' title='PMP Project Managemnt Professional' layout='fill'/></div>
          Project Mgt Professional</p>

        <p className={styles['skill-item-wrap']}>
          <div className={styles['services-skill-button']}>
          <Image src="/img-skill-sql.png" alt='sql' title='SQL' layout='fill'/></div>
          SQL</p>

        <p className={styles['skill-item-wrap']}>
          <div className={styles['services-skill-button']}>
          <Image src="/img-skill-python.png" alt='python' title='Python' layout='fill'/></div>
          Python</p>

        <p className={styles['skill-item-wrap']}>
          <div className={styles['services-skill-button']}>
          <Image src="/img-skill-tableau.png" alt='Tableau' title='Tableau' layout='fill'/></div>
          Tableau</p>

    </div>
)};




