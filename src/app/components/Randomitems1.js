"use client";

import React, { useEffect, useState } from 'react';
import { useSearch } from './Searching';
import Image from 'next/image';

const Randomitems1 = () => {
  const { fetchProducts1 } = useSearch();
  const [randomdata, setRandomData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("randomitems")) || [];
    setRandomData(data);
  }, []);

  return (
    <div className='mt-20 mb-5'>
      <h1 className='font-bold flex items-center justify-center text-3xl px-28'>Also You May Like</h1>
      <div className='flex items-center mt-7 justify-center gap-10'>
        {randomdata.length > 0 ? (
          randomdata.map((item) => (
            <div 
              className='products-box flex flex-col gap-4 rounded-md items-center py-5 px-3 cursor-pointer'
              onClick={() => fetchProducts1(item.asin)} 
              key={item.asin}
            >
              <div className='products-imgdiv'>
                <Image 
                  src={item.product_photo} 
                  width={150} 
                  height={150} 
                  alt={item.product_title} 
                />
              </div>
              <p className='overflow-hidden h-11 w-60 text-center'>{item.product_title}</p>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
}

export default Randomitems1;
