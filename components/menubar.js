import styles from '../styles/Menubar.module.scss';
import Link from 'next/link'
import Image from 'next/image';

export default function Menubar() {
return (

        <div className={styles['menubar']}>

            <div className={styles['menubar-title']}>
                Ward.CV
            </div>
            
            <button className={styles['menubar-menu']}>
                MENU
            </button>

        </div>
)};




