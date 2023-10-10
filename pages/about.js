import Head from 'next/head'
import { Main } from 'components/main'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>About - Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main title={"about"}/>
    </>
  )
}
