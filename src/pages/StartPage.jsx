import React from 'react'
import { useState } from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

function StartPage() {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()
  return (
    <div className='bg-primary flex flex-col justify-start items-center w-[375px] h-[660px]'>
        <p className='font-montserrat mt-[77px] text-white text-[18px] font-normal'>Добро пожаловать</p>
        {
            step == 1 &&
            <h1 className='font-montserrat font-black text-[38px] text-white mt-[7px]'>Lorem Ipsum 1</h1>
        }
        {
            step == 2 &&
            <h1 className='font-montserrat font-black text-[38px] text-white mt-[7px]'>Lorem Ipsum 2</h1>
        }
        {
            step == 3 &&
            <h1 className='font-montserrat font-black text-[38px] text-white mt-[7px]'>Lorem Ipsum 3</h1>
        }
        <p className='font-montserrat mt-[104px] text-white text-[18px] font-normal w-[327px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <Button onClick={step !== 4 ? () => setStep(prev => prev + 1) : navigate('/login')} className='w-[326px]'>{step !== 3 ? "Далее" : "Подписаться"}</Button>
        <p className='font-montserrat opacity-30 mt-2 text-[12px] text-white cursor-pointer'>Продолжить без бонуса</p>
    </div>
  )
}

export default StartPage
