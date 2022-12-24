import Head from 'next/head'
import { Hanken_Grotesk } from '@next/font/google'
import { HomePage } from './home'

/* font-family it's not working in Chrome */
const hGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Aude Booking</title>
        <meta name="description" content="Sistema de Citas de Aude Peluquería" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${hGrotesk.className} h-screen`}>
        <HomePage />
      </main>
    </>
  )
}
