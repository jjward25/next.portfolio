import Head from 'next/head' 
import styles from '../styles/Home.module.scss'
import Menubar from '../components/menubar'
import Bizcard from '../components/bizcard'

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Ward.CV</title>
        <meta name="description" content="A holistic approach to Digital Transformation." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles['main']}>
        <div className={styles['mobile-wrap']}>
          <Menubar/>
          <Bizcard/>
        </div>
        <div className={styles['blog-wrap']}></div>
      </main>
    </div>
  )
}
