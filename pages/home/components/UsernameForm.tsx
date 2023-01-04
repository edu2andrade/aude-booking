import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../../components/Button'

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
        className='mt-6 mb-2 p-4 flex flex-col justify-center gap-2 bg-violet-300 rounded border border-violet-400'
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
        <Button
          title='Crear'
          type='submit'
          disabled={isSubmitting}
        />
      </form>
      <span className='px-4'>
        {errors.username ? errors.username.message : 'Elige tu username'}
      </span>
    </>
  )
}