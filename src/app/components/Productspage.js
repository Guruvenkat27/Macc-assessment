"use client";

import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useSearch } from './Searching';
import Image from 'next/image';

const Productspage = () => {
  const { fetchProducts1, fetchProducts, loading } = useSearch();
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [products, setProducts] = useState([]);
  const [categoriess, setCategoriess] = useState([]);

  useEffect(() => {
   
    const storedProducts = JSON.parse(localStorage.getItem("product")) || [];
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(storedProducts);
    setCategoriess(storedCategories);
  }, []);

  const handleToggleCategories = () => {
    setShowCategories(prev => !prev);
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Loading products, please wait...</p>
      </div>
    );
  }

  return (
    <>
      <div className='flex justify-center gap-4 mt-7'>
        <div className='min-w-60'>
          <div className='flex items-center justify-between px-4 border-t border-b py-2'>
            Company <IoIosArrowDown />
          </div>
          <div className='flex items-center justify-between px-4 border-t border-b mt-4 py-2'>
            Prices <IoIosArrowDown />
          </div>
          <div className='flex items-center justify-between px-4 border-t border-b py-2 mt-4' onClick={handleToggleCategories}>
            Categories <IoIosArrowDown />
          </div>
          {showCategories && (
            <ul className='bg-white border mt-2'>
              {loadingCategories ? (
                <li>Loading categories...</li>
              ) : (
                categoriess.length > 0 ? (
                  categoriess.map((category, index) => (
                    <li key={index} className='p-2 hover:bg-gray-200 cursor-pointer' onClick={() => fetchProducts(category.name)}>
                      {category.name}
                    </li>
                  ))
                ) : (
                  <li>No categories available.</li>
                )
              )}
            </ul>
          )}
        </div>

        <div className='products-seconddiv flex items-center flex-col gap-4'>
          <div className='w-full px-[120px]'>
            <span>Home</span> / <span>Products</span>
          </div>
          <div className='w-full py-2 products-count flex items-center justify-between'>
            <span className='font-bold text-lg'>{products.length} Products</span>
            <div className='flex productssortbox items-center gap-8'>Sort <IoIosArrowDown /></div>
          </div>
          <div className='productboxes gap-16'>
            {products.length > 0 ? (
              products.map((item) => (
                <div key={item.asin} onClick={() => fetchProducts1(item.asin)}>
                  <div className='products-box flex flex-col gap-4 rounded-md items-center py-5 px-3'>
                    <div className='products-imgdiv'>
                      <Image src={item.product_photo} width={150} height={150} alt={item.product_title} />
                    </div>
                    <p className='overflow-hidden h-11 w-60 text-center'>{item.product_title}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productspage;
