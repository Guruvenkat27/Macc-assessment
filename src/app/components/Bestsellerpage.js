import React from 'react';
import { useSearch } from './Searching';
import Image from 'next/image';

const Bestsellerpage = () => {

    
    const { fetchProducts2 } = useSearch();
    const bestsellingdata = JSON.parse(localStorage.getItem("bestselldataa")) || { best_sellers: [] }; // Default to empty array

    const categories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Books' },
        { id: 3, name: 'Clothing' },
        { id: 4, name: 'Home & Kitchen' },
        { id: 5, name: 'Beauty' },
        { id: 6, name: 'Sports & Outdoors' },
        { id: 7, name: 'Toys & Games' },
        { id: 8, name: 'Automotive' },
        { id: 9, name: 'Health & Personal Care' },
        { id: 10, name: 'Pet Supplies' },
    ];

    return (
        <div>
            <h1 className='font-bold text-3xl mt-3 text-center'>
                <span className='text-red-500'>BEST</span> SELLING PRODUCTS
            </h1>
            <div className='flex mt-12'>
                <div className='w-[20vw] flex flex-col items-center'>
                    <h1 className='font-bold'>CATEGORIES</h1>
                    <ul className='grid gap-4 mt-6'>
                        {categories.map((item) => (
                            <li key={item.id} className='h-[5vh] flex categorylist items-center justify-center'>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='grid bestsellpage justify-center gap-8 w-[75vw]'>
                    {bestsellingdata.best_sellers.map((item) => (
                        <div key={item.asin} className='flex flex-col bestsingle items-center' onClick={() => fetchProducts2(item.asin)}>
                            <div className='h-[33vh] w-[100%]'>
                                <Image src={item.product_photo} className='w-[100%] h-[100%]' alt={item.product_title} />
                            </div>
                            <p className="mt-4 overflow-hidden px-3 h-[7vh]">{item.product_title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Bestsellerpage;
