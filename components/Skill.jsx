import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

export const Skill = ({title,icon,color}) => {
  return (
    <motion.div
    whileInView={{
      x: [0, 0],
      y: [0, 0],
  scale:[.5,1],
      opacity: [0, 1],
    }}
    transition={{ duration: 0.5, type: "spring" }}
     className="icon w-fit grid place-items-center mb-[4rem]">
    <div className={`skill rounded-full p-9  w-fit`} style={{background:color}}>
        <Image
        src={icon}
        width={40}
        height={40}
        objectFit='contain'
        alt='icon of user skill'
        />
    </div>
    <p className='mt-2 text-[1.7rem]'>{title}</p>
    </motion.div>
  )
}
