import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IvdaGeo</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>

      <main className={styles.main}>
      <h1 className="text-3xl font-bold md:underline">
      Hello world!
    </h1>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
