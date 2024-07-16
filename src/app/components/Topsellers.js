import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const Topsellers = () => {
  const [tosell, settopsell] = useState([]);
  const scrollRef = useRef(null);

  const topselldata = async () => {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1';
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
      localStorage.setItem("topselldata", JSON.stringify(data.seller_products));
      settopsell(data.seller_products || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
 
    topselldata();

    
    const savedData = localStorage.getItem("topselldata");
    if (savedData) {
      settopsell(JSON.parse(savedData));
    }
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='flex mt-10 pl-10 justify-between mb-8'>
        <div>
          <div className='flex items-center justify-between pr-10'>
            <h1 className='font-bold text-3xl px-20'>
              <span className='text-red-600'>MACC</span> TOP SELLINGS
            </h1>
            <div className='bg-gray-300 w-[6vw] flex items-center justify-center h-[4vh] text-xs opacity-70 cursor-pointer'>VIEW ALL</div>
          </div>
          <div className='relative flex items-center'>
            <button
              className='absolute toparrow left-0 z-10'
              onClick={() => handleScroll('left')}
            >
              <span>&lt;</span>
            </button>
            <div ref={scrollRef} className='flex px-8 overflow-x-auto w-[65vw] mt-11 topsellbox space-x-12 py-4'>
              {tosell.length > 0 ? (
                tosell.map(product => (
                  <div key={product.seller_id} className='flex-none p-2 topseelbo border w-[18vw]'>
                    <div className='flex flex-col gap-6 items-center rounded-md p-2'>
                      <Image src={product.product_photo} width={100} height={100} alt={product.product_title} className='w-[10vw] h-[31vh]' />
                      <p className='text-center font-semibold topselltitle'>{product.product_title}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <button
              className='absolute toparrow right-0 z-10'
              onClick={() => handleScroll('right')}
            >
              <span>&gt;</span>
            </button>
          </div>
        </div>
        <div>
          <Image src='/images/topsell.png' width={400} height={300} alt='Top Selling Products' />
        </div>
      </div>
    </>
  );
};

export default Topsellers;
