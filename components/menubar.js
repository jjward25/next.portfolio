import styles from '../styles/Menubar.module.scss';
import Image from 'next/image';

export default function Menubar() {

    const text = 'Joseph.Ward@Outlook.com'  
    const copy = async () => {
      await navigator.clipboard.writeText(text);
      alert('Text copied');
    }

return (
            <div className={styles['menubar-menu']}>   
                
                    <p className={styles['bc-link']}>
                        <a href="https://www.linkedin.com/in/joe-ward1/" title="LinkedIn" alt="LinkedIn" target="_blank" className={styles['bc-work-icon']}>
                        <Image src="/icon-linkedin-blue.png" alt="LinkedIn" layout="fill"></Image></a>
                    LinkedIn</p>

                    <p className={styles['bc-link']} >
                        <a href="https://github.com/jjward25" title="Github" alt="Github" target="_blank" className={styles['bc-work-icon']}>
                        <Image src="/icon-github-clear.png" alt="Github" layout="fill"></Image></a>
                    Github</p>
                    
                    <p className={styles['bc-link']} >
                        <a href="https://public-docs2.s3.amazonaws.com/Joseph+Ward.pdf" title="Resume" alt="Resume" target="_blank" className={styles['bc-work-icon']}>
                        <Image src="/icon-cv-clear.png" alt="Resume" layout="fill"></Image></a>
                    Resume</p>

                    <p className={styles['bc-link']} id="email" onClick={copy} >
                        <a alt="Email" target="_blank" className={styles['bc-work-icon']}>
                        <Image src="/icon-email.png" alt="Email Me" layout="fill"></Image></a>
                    E-Mail</p>   
                             
            </div>
)};




