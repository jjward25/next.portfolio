import Head from 'next/head' 
import styles from '../styles/Home.module.scss'
import Menubar from '../components/main-menubar'
import Bizcard from '../components/main-bizcard'
import Blog from '../components/blog'

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
        <div className={styles['mobile-container']}>
          <Menubar/>
          <Bizcard/>
        </div>
        <div className={styles['blog-container']}>
          <Blog/>
        </div>
      </main>
    </div>
  )
}
