import Image from "next/image"
import { UsernameForm } from "./components/UsernameForm"
import calendarImg from '/public/calendar.png'

export const HomePage = () => {
  return (
    <section className='h-screen px-24 flex justify-center items-center gap-20'>
      <div>
        <h1 className='text-7xl font-bold leading-none tracking-tighter'>Aude Booking</h1>
        <p className='mt-4 text-gray-600 text-2xl leading-none'>Conecta tu calendário y disponibiliza horários para citas.</p>
        <UsernameForm />
      </div>
      <div>
        <Image
          src={calendarImg}
          alt='Calendar Image'
          priority
        />
      </div>
    </section>
  )
}