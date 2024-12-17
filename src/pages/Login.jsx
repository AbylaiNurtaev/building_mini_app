import React from 'react'


function Login() {
  return (
    <div className='flex flex-col justify-start items-center w-[375px] h-[660px] bg-primary'
    style={{ 
      backgroundImage: "url('/images/backgrounds/Background (2).png')",
      backgroundSize: "cover",
     }}
    >
      <p className='text-gray mt-[80px]'>Email Adress</p>
    </div>
  )
}

export default Login
