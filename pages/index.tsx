import { Box } from '@mui/material'
import Head from 'next/head'
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
        <Box width={'100%'} height={'100vh'}></Box>
      </Layout>
    </div>
  )
}
