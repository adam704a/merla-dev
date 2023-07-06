import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MERLA.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="merla.dev" />
      </main>

      <Footer />
    </div>
  )
}
