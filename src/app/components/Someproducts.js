import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const Someproducts = () => {
    const scrollRef = useRef(null); 
    const [somedata, setSomedata] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem("topdealdata");
            if (storedData) {
                setSomedata(JSON.parse(storedData));
            }
        }
    }, []); 

    const somedataslice = somedata.slice(0, 7);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -310 : 310; 
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='mt-6 mb-6 flex flex-col items-center'>
                <h1 className='flex items-center justify-center text-3xl font-bold gap-2'>
                    <span className='text-red-600'>NEW</span> PRODUCTS
                </h1>
                <div className='relative'>
                    <button
                        className='absolute toparrow left-[-30px] z-20 top-[50%]'
                        onClick={() => handleScroll('left')}
                    >
                        <span>&lt;</span> 
                    </button>
                    <div ref={scrollRef} className='flex px-8 overflow-x-auto w-[88vw] mt-11 topsellbox space-x-12 py-4'>
                        {somedataslice.length > 0 ? (
                            somedataslice.map((item) => (
                                <div className='border py-5 px-2 rounded-md' key={item.deal_title}>
                                    <div className='w-[17.3vw] h-[32vh]'>
                                        <Image src={item.deal_photo} className='w-[100%] h-[100%]' width={100} height={100} alt='topsellimage' />
                                    </div>
                                    <p className='overflow-hidden h-[8vh] p-3'>{item.deal_title}</p>
                                </div>
                            ))
                        ) : (
                            <p>Loading....</p>
                        )}
                    </div>
                    <button
                        className='absolute toparrow right-[-30px] top-[50%]'
                        onClick={() => handleScroll('right')}
                    >
                        <span>&gt;</span> 
                    </button>
                </div>
            </div>
        </>
    );
};

export default Someproducts;
