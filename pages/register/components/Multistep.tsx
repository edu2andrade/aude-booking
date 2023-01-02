interface MultistepsProps {
  size: number
  currentStep?: number
}

export const Multistep = ({ size, currentStep = 1 }: MultistepsProps) => {

  return (
    <div className='w-full py-4 flex flex-col gap-2'>
      <p className='font-bold'>
        Step {currentStep} of {size}
      </p>
      <div className='flex gap border'>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => (
          <div
            key={step}
            className={`
              w-full h-2 border rounded
              ${currentStep >= step ? 'bg-violet-600' : 'bg-violet-400'}
            `}
          />
        ))}
      </div>
    </div>
  )
}