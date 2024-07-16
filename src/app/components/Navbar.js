"use client";
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoBell } from "react-icons/go";
import { useSearch } from './Searching';
import { useRouter } from 'next/navigation';
import { useCart } from './Cartcontext';
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const { searchValue, setSearchValue, bestsellersdata, fetchProducts } = useSearch();
    const { itemCount } = useCart();

    const toggleSearchInput = () => {
        setIsVisible(prev => !prev);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('Searching for:', searchValue);
            fetchProducts(searchValue);
            setSearchValue('');
            setIsVisible(false);
        }
    };

    const goToCart = () => {
        router.push("/cart");
    };

    const goToHome = () => {
        router.push("/home");
    };

    const handleBestSellersClick = () => {
        bestsellersdata(); 
    };

    return (
        <>
            <nav className='first-nav'>
                <ul>
                    <li>Return</li>
                    <li>Help</li>
                    <li>Register / Sign in</li>
                </ul>
            </nav>
            <div className='second-nav-div'>
                <div className='flex items-center gap-2 searchdiv w-60 h-12'>
                    <IoIosSearch className='text-3xl cursor-pointer' onClick={toggleSearchInput} aria-label="Search" />
                    {isVisible && (
                        <input 
                            type='search' 
                            placeholder='Search...' 
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} 
                            onKeyDown={handleKeyDown} 
                            className='border p-2 searchclar rounded w-48' 
                        />
                    )}
                </div>
                <div className='second-nav-div-inner'>
                    <span className='cursor-pointer' onClick={() => fetchProducts('phones')}>SHOP</span>
                    <span className='cursor-pointer'>ESSENTIALS</span>
                    <Image 
                        className="cursor-pointer" 
                        src='/images/maccicon.png' 
                        alt='Maccicon' 
                        onClick={goToHome} 
                        width={160} 
                        height={100} 
                    />
                    <span className="cursor-pointer" onClick={handleBestSellersClick}>BEST SELLERS</span>
                    <span className="cursor-pointer">ABOUT US</span>
                    <div className='flex items-center gap-7'>  
                        <CiUser className='text-2xl cursor-pointer' aria-label="User Account" />
                        <GoBell className='text-2xl cursor-pointer' aria-label="Notifications" />
                        <span className='relative' onClick={goToCart}>
                            <LiaShoppingBagSolid className='text-2xl cursor-pointer' aria-label="Shopping Cart" />
                            <span className='absolute left-[60%] top-0 bg-red-600 rounded text-white text-xs px-1'>{itemCount}</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
