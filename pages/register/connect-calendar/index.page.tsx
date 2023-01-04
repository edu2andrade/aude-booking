
import { useForm } from 'react-hook-form'

import { Multistep } from "../components/Multistep"
import { Button } from '../../../components/Button'


// Routes only works with 'default'??
export default function ConnectCalendar() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  async function handleRegisterForm() {
    
  }

  return (
    <section className='h-screen px-24 flex flex-col justify-center items-center gap-4'>
      <header className='w-[600px]'>
        <h1 className='text-2xl font-bold leading-none tracking-tighter'>Conecta tu calendario</h1>
        <p className='mt-4 text-gray-600 text-lg leading-none'>
          Conecta tu calendario para que puedas gestionar y disponibilizar horários.
        </p>
        <Multistep size={4} currentStep={2} />
      </header>

      <main className='w-[600px] p-4 bg-violet-300 rounded border border-violet-400'>
        <div
          className='w-full mb-4 p-4 flex justify-between items-center rounded border border-violet-400'
        >
          <p>
            Google Calendar
          </p>
          <button
            className='px-4 py-2 flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 hover:text-white transition-colors rounded text-white font-semibold'
          >
            Conectar
          </button>
        </div>
        <Button
          title='Próximo paso'
          type='submit'
        />
      </main>
    </section>
  )
}