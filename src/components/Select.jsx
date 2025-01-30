import React, {useID} from 'react'

const Select = ({
  options,
  label,
  className = '',
  ...props
   
}, ref) => {
  const id = useID()
  return (
    <div className='w-full'>
      {label && <label className='block text-sm font-medium text-gray-700' htmlFor={id}>{label}</label>}
      <select id={id} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`} {...props} ref={ref}>
        {options?.map((option) => {
          return (
            <option key={option} value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)