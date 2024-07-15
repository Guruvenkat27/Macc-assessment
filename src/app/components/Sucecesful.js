import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
const Sucecesful = () => {


    const router=useRouter()
    const homepage=()=>{
        localStorage.removeItem('cartItems');
        router.push("/home")
    }
  return (
    <div className='fixed z-10 top-0 left-0 flex items-center justify-center successopacity w-[100vw] h-[100vh]'>
      <div className='bg-white w-[25vw]'>
        <div className='w-[100%] h[10vh]'>

<Image src='/images/shopping-mall.webp' className='w[100%] h-[100%]' />

            </div>
            <div className='flex flex-col gap-3 items-center p-5'>

                <h1 className='font-bold text-2xl'>Order Placed Successfully</h1>
           <p className='text-sm text-center'>Your Order Has Been Placed Succeefull<br/>
           
           We'll Try to Ship it To Your Door Step As<br/>
           Soon We Can Cheers
           </p>
           
           <div className='mt-4 mb-4'><button className='bg-blue-800 text-white w-[20vw] h-[5vh] rounded-md' onClick={homepage}>CONTINUE SHOPPING</button></div>
            </div>



      </div>
    </div>
  )
}

export default Sucecesful
