import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface TestimonialProps {
  image: string | StaticImageData
  title: string
  description: string
  isMiddle: boolean
}

const TestimonialCard = ({ image, title, description, isMiddle }: TestimonialProps) => {
  return (
    <div className={`w-[430px] h-[300px] ${isMiddle ? 'bg-white' : 'bg-[#8ECCB963]'} flex flex-col items-center gap-4 mt-4`}>
      <div className='flex justify-center mt-2'>
        <Image src={image} alt={title} width={100} height={100} />
      </div>
      <h2 className='text-[20px] font-semibold'>{title}</h2>
      <p className='text-[18px]'>{description}</p>
    </div>
  )
}

export default TestimonialCard
