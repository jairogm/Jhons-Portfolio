import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jhon Garces Montes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my portfolio!" />
        <p className="description">
         This portfolio it's getting a new design, I'm still working on it :)
        </p>
      </main>

    </div>
  )
}
