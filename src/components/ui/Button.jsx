import React from 'react'
import cn from 'classnames'

function Button({ className, children, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className={cn(
        'bg-buttonGradient h-[50px] rounded-[15px] font-montserrat text-[18px] text-white border-none mt-[183px]', 
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
