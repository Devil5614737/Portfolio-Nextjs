import Image from 'next/image'
import React from 'react'

export const Skill = ({title,icon,color}) => {
  return (
    <div className="icon w-fit grid place-items-center mb-[4rem]">
    <div className={`skill rounded-full p-9  w-fit`} style={{background:color}}>
        <Image
        src={icon}
        width={40}
        height={40}
        objectFit='contain'
        alt='html icon'
        />
    </div>
    <p className='mt-2 text-[1.7rem]'>{title}</p>
    </div>
  )
}
