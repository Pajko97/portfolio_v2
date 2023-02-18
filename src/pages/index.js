import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Pavle Janjusevic | Software Developer</title>
        <meta name="description" content="Software developer portfolio :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <h1>Pavle Janjusevic</h1>
        <h2>Software developer</h2>
      </main>
    </div>
  )
}
