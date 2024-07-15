import React from 'react'
import Image from 'next/image'
const Homedisplay = () => {
  return (
    <div>
      <div className='bg-gray-200 flex items-start justify-center gap-72 px-32 py-9'>
<div className='  grid gap-2 py-10'>
<span className='font-bold  text-5xl leading-snug text-blue-900'>
    PROVIDING SERVICES <br/> AT YOUR DOOR
</span>
<p className='text-base opacity-75'>
<b >MAAC Essentials</b> has a important role in making <br/> supplies and services available to customers and their <br/> patients during this critical time. This includes services <br/> from various domains. Our aim is to Adi You. As much we <br/> can
</p>
<div className='mt-7'><button className='bg-red-600 p-1 text-sm px-6 text-white font-bold'>LEARN MORE</button></div>

</div>
<div >
<Image src='./images/coverimg1.png' alt='coverimg1'  className='rounded-lg'width={400}/>
</div>
      </div>
    </div>
  )
}

export default Homedisplay
