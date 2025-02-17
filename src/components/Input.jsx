import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = 'text',
  className = '',
  ...props
}, ref) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label className='block text-sm font-medium text-gray-700' htmlFor={id}>{label}</label>}
      <input type={type} id={id} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`} {...props} ref={ref} />
    </div>
  )
})
 

export default Input