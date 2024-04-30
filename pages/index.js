import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/layout.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>merla.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <img className={styles.spin} src="/RTI-MERLA_fullCOLOR-5218-flat.png" alt="RTI"  />
        
      </main>

      <Footer />
    </div>
  )
}
