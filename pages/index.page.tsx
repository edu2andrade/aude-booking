import Head from 'next/head'
import HomePage from './home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aude Booking</title>
        <meta name="description" content="Sistema de Citas de Aude Peluquería" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}
