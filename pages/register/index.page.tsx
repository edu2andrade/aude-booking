import { Multistep } from "./components/Multistep"

export const Register = () => {
  return (
    <section className='h-screen px-24 flex flex-col justify-center items-center gap-20'>
      <div className='w-[600px]'>
        <h1 className='text-2xl font-bold leading-none tracking-tighter'>Bienvenido(a) a Aude Booking</h1>
        <p className='mt-4 text-gray-600 text-lg leading-none'>Rellena con tus informaciones para completar tu perfil. Recuerda que siempre puedes editarlas más tarde.</p>
        <Multistep size={4} currentStep={1} />
      </div>
    </section>
  )
}