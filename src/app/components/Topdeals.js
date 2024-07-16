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
        'x-rapidapi-key': 'efb2ba6220msh1906057773d330bp1fd202jsn7b72e308bc9c', 
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
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  useEffect(() => {
    const topdeal = JSON.parse(localStorage.getItem("topdealdata")) || [];
    settopsell(topdeal.slice(8, 17)); 
  }, []);

  return (
    <>
      <div className='flex mt-10 justify-between mb-8'>
        <div>
          <Image src='/images/topdeal.png' placeholder = 'empty' width={400} height={300} alt='Top Selling Products' />
        </div>
        <div>
          <div className='flex items-center justify-between pr-32'>
            <h1 className='font-bold text-3xl px-15'>
              <span className='text-red-600'>MACC</span> TOP DEALS
            </h1>
            <div className='bg-gray-300 w-[6vw] flex items-center justify-center h-[4vh] text-xs opacity-70 cursor-pointer'>VIEW ALL</div>
          </div>
          <div className='relative flex items-center'>
            <button className='absolute toparrow left-[-80px] z-10' onClick={() => handleScroll('left')}>
              <span>&lt;</span>
            </button>
            <div ref={scrollRef} className='flex px-8 overflow-x-auto w-[65vw] mt-11 relative left-[-60px] topsellbox space-x-12 py-4 px-10'>
              {tosell.length > 0 ? (
                tosell.map(product => (
                  <div key={product.deal_id} className='flex-none p-2 topseelbo border w-[18vw]'>
                    <div className='flex flex-col gap-6 items-center rounded-md p-2'>
                      <Image src={product.deal_photo} width={100} height={100} alt={product.deal_title} className='w-[10vw] h-[31vh]' />
                      <p className='text-center font-semibold topselltitle'>{product.deal_title}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <button className='absolute toparrow right-[30px] z-10' onClick={() => handleScroll('right')}>
              <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topdeals;
