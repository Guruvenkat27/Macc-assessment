import React, { useEffect, useState, useRef } from 'react';

const Topsellers = () => {
  const [tosell, settopsell] = useState([]);
  const scrollRef = useRef(null); // Create a ref to the scroll container

  const topselldata = async () => {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/seller-products?seller_id=A02211013Q5HP3OMSZC7W&country=US&page=1';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '01dfc806e7msh16a30045dd89d1ap1cd712jsna65b553bcf96', // Replace with your actual API key
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const { data } = result; // Destructure data from result
      localStorage.setItem("topselldata", JSON.stringify(data.seller_products));
      settopsell(data.seller_products || []); // Update state with seller_products or an empty array
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

  const topsell = JSON.parse(localStorage.getItem("topselldata")) || [];

  return (
    <>
      <div className='flex mt-10 pl-10 justify-between mb-8'>
        <div>
         <div className='flex items-center justify-between pr-10'> <h1 className='font-bold text-3xl px-20'>
            <span className='text-red-600'>MACC</span> TOP SELLINGS
          </h1><div className='bg-gray-300 w-[6vw] flex items-center justify-center h-[4vh] text-xs opacity-70 cursor-pointer' >VIEW ALL</div></div>
          <div className='relative flex items-center'>
            <button
              className='absolute toparrow left-0 z-10'
              onClick={() => handleScroll('left')}
            >
              <span>&lt;</span> 
            </button>
            <div ref={scrollRef} className='flex px-8 overflow-x-auto w-[65vw] mt-11 topsellbox space-x-12 py-4'>
              {topsell.length > 0 ? (
                topsell.map(product => (
                  <div key={product.seller_id} className='flex-none p-2 topseelbo  border w-[18vw]'>
                    <div className=' flex flex-col gap-6 items-center rounded-md p-2'>
                   < div>  <img src={product.product_photo} alt={product.title} className='w-[10vw] h-[31vh]' /></div>
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
          <img src='/images/topsell.png' width={400} alt='Top Selling Products' />
        </div>
      </div>
    </>
  );
};

export default Topsellers;
