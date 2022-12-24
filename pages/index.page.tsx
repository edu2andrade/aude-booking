import Head from 'next/head'
import { Hanken_Grotesk } from '@next/font/google'

const hGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
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
      <main className={hGrotesk.className}>
        <h1 className='text-3xl font-bold '>Hello World</h1>
        <p>This font weight should be 400</p>
      </main>
    </>
  )
}
