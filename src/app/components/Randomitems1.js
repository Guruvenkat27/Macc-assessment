

import React from 'react'
import { useSearch } from './Searching';

const Randomitems1 = () => {
  const { fetchProducts1}=useSearch()
    const randomdata=JSON.parse(localStorage.getItem("randomitems"));
console.log(randomdata)
  return (
    <div>
       <div className=' mt-20 mb-5'>
<h1 className='font-bold flex items-center justify-center text-3xl px-28'>Also you May Like</h1>
<div className=' flex items-center mt-7 justify-center gap-10' >
{
    randomdata.map((item)=>{
        return(
            <>
            
            <div className='products-box flex flex-col gap-4 rounded-md items-center py-5 px-3' onClick={()=>{fetchProducts1(item.asin)}}  key={item.asin}>
                  <div className='products-imgdiv'>
                    <img src={item.product_photo} width={150} alt={item.product_title} />
                  </div>
                  <p className='overflow-hidden h-11 w-60 text-center'>{item.product_title}</p>
                </div>
                
            
            
            
            </>
        )
    })
}

</div>
       </div>
    </div>
  )
}

export default Randomitems1
