import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
const Topdeals = () => {
  const [tosell, settopsell] = useState([]);
  const scrollRef = useRef(null);

  const topselldata = async () => {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/deals-v2?country=US&min_product_star_rating=ALL&price_range=ALL&discount_range=ALL';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '01dfc806e7msh16a30045dd89d1ap1cd712jsna65b553bcf96',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };
    
    

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const { data } = result; 
      localStorage.setItem("topdealdata", JSON.stringify(data.deals));
      settopsell(data.deals || []); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    topselldata();
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200; // Adjust the scroll amount as needed
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

   const topdeal = JSON.parse(localStorage.getItem("topdealdata")) || [];
console.log(topdeal)
const topdealslice=topdeal.slice(0,7)
  return (
    <>
      <div className='flex mt-10 justify-between mb-8'>
      <div>
          <Image src='/images/topdeal.png' width={400} alt='Top Selling Products' />
        </div>
        <div>
        <div className='flex items-center justify-between  pr-32'>  <h1 className='font-bold text-3xl px-15'>
            <span className='text-red-600'>MACC</span> TOP DEALS
          </h1><div className='bg-gray-300 w-[6vw] flex items-center justify-center h-[4vh] text-xs opacity-70 cursor-pointer'>VIEW ALL</div></div>
          <div className='relative flex items-center'>
            <button
              className='absolute toparrow left-[-80px] z-10'
              onClick={() => handleScroll('left')}
            >
              <span>&lt;</span> 
            </button>
            <div ref={scrollRef} className='flex px-8 overflow-x-auto w-[65vw] mt-11 relative left-[-60px] topsellbox space-x-12 py-4 px-10'>
            {topdealslice.length > 0 ? (
                topdealslice.map(product => (
                  <div key={product.deal_id} className='flex-none p-2 topseelbo  border w-[18vw]'>
                    <div className=' flex flex-col gap-6 items-center rounded-md p-2'>
                   < div>  <Image src={product.deal_photo} alt={product.title} className='w-[10vw] h-[31vh]' /></div> 
                       <p className='text-center font-semibold topselltitle'>{product.deal_title}</p> 
                    </div>
                  
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <button
              className='absolute toparrow right-[30px] z-10'
              onClick={() => handleScroll('right')}
            >
              <span>&gt;</span> 
            </button>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Topdeals;
