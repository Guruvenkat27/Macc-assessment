import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const Successful = () => {
    const router = useRouter();

    const homepage = () => {
        localStorage.removeItem('cartItems');
        router.push("/home");
    };

    return (
        <div className='fixed z-10 top-0 left-0 flex items-center justify-center successopacity w-full h-full'>
            <div className='bg-white w-[25vw]'>
                <div className='w-full h-[10vh]'>
                    <Image src='/images/shopping-mall.webp' alt='shopping mall' width={100} height={100} className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-3 items-center p-5'>
                    <h1 className='font-bold text-2xl'>Order Placed Successfully</h1>
                    <p className='text-sm text-center'>
                        Your Order Has Been Placed Successfully.<br />
                        We'll try to ship it to your doorstep as<br />
                        soon as we can. Cheers!
                    </p>
                    <div className='mt-4 mb-4'>
                        <button className='bg-blue-800 text-white w-[20vw] h-[5vh] rounded-md' onClick={homepage}>
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Successful;

