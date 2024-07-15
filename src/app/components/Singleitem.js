"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from './Cartcontext';
import { IoIosArrowDown } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Image from 'next/image';
const ProductDetails = () => {
  const { productid } = useParams();
  const products123 = JSON.parse(localStorage.getItem("product12")) || [];
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(products123.product_photo);
  const [isAdded, setIsAdded] = useState(false);

  console.log("Product ID:", productid);
  console.log("All Products:", products123);

  if (!productid) {
    return <p>Loading...</p>;
  }

  if (!products123) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(products123);
    setIsAdded(true);

  };
  const cancelfunc=()=>{
    setIsAdded(false)
  }

  const handleImageClick = (image) => {
    setSelectedImage(image); 
  };

  return (
    <div>
      {isAdded && (
       <div className='bg-cyan-300 flex items-center justify-between pr-[10%]'>

<div className='flex  text-white items-center pl-[40%] justify-center h-[6vh]'>
          SUCCESSFULLY ADDED TO CART. <b className='cursor-pointer'>CHECK NOW</b>

        
        </div>
        <GiCancel className='text-white text-lg cursor-pointer ' onClick={cancelfunc}/>
       </div>
      )}
      <div className='flex justify-center mt-6 gap-10'>
        <div className='grid gap-3 justify-center overflow-y-auto imagescrolbox'>
          {Array.isArray(products123.product_photos) && products123.product_photos.length > 0 ? (
            products123.product_photos.map((item, index) => (
              <div className='rounded-md overflow-hidden' key={index} onClick={() => handleImageClick(item)}>
                <Image src={item} alt="Product" className="cursor-pointer" />
              </div>
            ))
          ) : (
            <p>No product photos available.</p>
          )}
        </div>
        <div className='w-96 singleimgdiv'>
          {selectedImage && (
            <Image src={selectedImage} className='singleimg' alt={products123.product_title} />
          )}
        </div>
        <div className='singleitems flex flex-col p-3 pt-10 px-5 gap-2'>
          <p className='overflow-hidden singletitle font-bold text-2xl'>{products123.product_title}</p>
          <div className='text-red-600 font-bold text-lg'>
            <b>Price: </b> $ {products123.product_price}
          </div>
          <div className='flex items-center mt-4 justify-center gap-5 singlebuttondiv'>
            <button className='bg-blue-800 text-white' onClick={handleAddToCart}>ADD TO CART</button>
            <button className='text-white'>Save for later</button>
          </div>
          <div className='sigledes mt-5 overflow-hidden'>{products123.product_description}</div>
          <div></div>
          <div className='border h-[6.5vh] flex items-center justify-between px-[18px] pl-[40%] border-gray-300'>RETURN POLICY  <IoIosArrowDown /> </div>
          <div className='border h-[6.5vh] flex items-center justify-between px-[18px] pl-[40%] border-gray-300'>CITIZEN POLICY <IoIosArrowDown   /></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
