import React from 'react'
import Image from 'next/image'
const Proimg = () => {
  return (
    <div className='w-[98.9vw] h-[80vh]'>
      <Image src='/images/proimg.png' alt='proimg' height={100} width={100} className='w-[100%] h-[100%]' />
    </div>
  )
}

export default Proimg
