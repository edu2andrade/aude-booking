import { ButtonHTMLAttributes } from "react"
import { BsArrowRight } from "react-icons/bs"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const Button = ({title, ...rest}: ButtonProps) => {
  return (
    <button
    className='w-full px-4 py-2 flex justify-center items-center gap-2 bg-violet-500 hover:bg-violet-700 transition-colors rounded text-white font-semibold'
      {...rest}
    >
      {title}
      <BsArrowRight />
    </button>
  )
}