import { useEffect } from "react"
import { useRouter } from "next/router"

import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BsArrowRight } from "react-icons/bs"
import { Multistep } from "./components/Multistep"
import { api } from "../../lib/axios"
import { AxiosError } from "axios"

const RegisterFormSchema = zod.object({
  name: zod
    .string()
    .min(3, { message: 'Tu nombre debe tener al menos 3 letras' }),
  username: zod
    .string()
    .min(3, { message: 'Tu user debe tener al menos 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Letras apenas'
    })
    .transform(username => username.toLowerCase()),
})

type UsernameFormData = zod.infer<typeof RegisterFormSchema>

// Routes only works with 'default'!!
export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<UsernameFormData>({
    resolver: zodResolver(RegisterFormSchema)
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegisterForm(data: UsernameFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        return alert(error.response.data.message)
      }
      console.error(error)
    }
  }

  return (
    <section className='h-screen px-24 flex flex-col justify-center items-center gap-20'>
      <div className='w-[600px]'>
        <h1 className='text-2xl font-bold leading-none tracking-tighter'>Bienvenido(a) a Aude Booking</h1>
        <p className='mt-4 text-gray-600 text-lg leading-none'>Rellena con tus informaciones para completar tu perfil. Recuerda que siempre puedes editarlas más tarde.</p>
        <Multistep size={4} currentStep={1} />
        <form
          onSubmit={handleSubmit(handleRegisterForm)}
          className='mt-6 mb-2 p-4 flex flex-col justify-center gap-2 bg-violet-300 rounded border border-violet-600'
        >
          <div className='flex items-center gap-2'>
            <span>cal.com/</span>
            <input
              type="text"
              placeholder='Tu username'
              className='flex-1 p-2 bg-violet-100 rounded focus:bg-white focus:outline-none focus:ring-violet-600 focus:ring-1 placeholder:font-extralight placeholder:italic'
              {...register('username')}
            />
          </div>
          {errors.username && (
            <span className='text-sm text-red-600 italic'>
              {errors.username.message}
            </span>
          )}
          <input
              type="text"
              placeholder='Tu nombre completo'
              className='flex-1 p-2 bg-violet-100 rounded focus:bg-white focus:outline-none focus:ring-violet-600 focus:ring-1 placeholder:font-extralight placeholder:italic'
              {...register('name')}
            />
            {errors.name && (
            <span className='text-sm text-red-600 italic'>
              {errors.name.message}
            </span>
          )}
          <button
            type="submit"
            className='px-4 py-2 flex justify-center items-center gap-2 bg-violet-500 hover:bg-violet-700 transition-colors rounded text-white'
          >
            Próximo paso
            <BsArrowRight />
          </button>
        </form>
      </div>
    </section>
  )
}