import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BsArrowRight } from 'react-icons/bs'

const UsernameFormSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Tu user debe tener al menos 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Letras apenas'
    })
    .transform(username => username.toLowerCase()),
})

type UsernameFormData = zod.infer<typeof UsernameFormSchema>

export const UsernameForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UsernameFormData>({
    resolver: zodResolver(UsernameFormSchema)
  })

  const router = useRouter()

  async function handleUsernameForm(data: UsernameFormData) {
    const { username } = data
    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleUsernameForm)}
        className='mt-6 mb-2 p-4 flex flex-col justify-center gap-2 bg-violet-300 rounded border border-violet-600'
      >
        <div className='flex items-center gap-2'>
          <span>aude-booking/</span>
          <input
            type="text"
            placeholder='Tu username'
            className='flex-1 p-2 bg-violet-100 rounded focus:bg-white focus:outline-none focus:ring-violet-600 focus:ring-1 placeholder:font-extralight placeholder:italic'
            {...register('username')}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className='px-4 py-2 flex justify-center items-center gap-2 bg-violet-500 hover:bg-violet-700 transition-colors rounded text-white'
        >
          Crear
          <BsArrowRight />
        </button>
      </form>
      <span className='px-4'>
        {errors.username ? errors.username.message : 'Elige tu username'}
      </span>
    </>
  )
}