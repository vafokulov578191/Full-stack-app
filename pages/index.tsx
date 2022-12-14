import Head from 'next/head'
import Home_Page from '../Layout/Home_Page'
import Layout from '../Layout/Layout'
import styles from '../styles/Home.module.css'



export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Home_Page />
      </Layout>
    </div>
  )
}
