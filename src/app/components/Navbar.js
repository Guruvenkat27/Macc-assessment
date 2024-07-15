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
    const router=useRouter()
    const [isVisible, setIsVisible] = useState(false);
    const { searchValue, setSearchValue,bestsellersdata ,fetchProducts } = useSearch();
    
    const {itemCount}=useCart()

    const SearchInput = () => {
        setIsVisible(prev => !prev);
    };

    const handleKeyDown =  (event) => {
        if (event.key === 'Enter') {
            console.log('Searching for:', searchValue);
            
                 fetchProducts(searchValue);
             
                setSearchValue('');
                setIsVisible(false);
                
            
        }
    };

    const cartpage=()=>{
        router.push("/cart")
    }
    

const homeback=()=>{
    router.push("/home")
}
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
                    <IoIosSearch className='text-3xl' onClick={SearchInput} />
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
                    <span className='cursor-pointer' onClick={(phones)=>fetchProducts(phones)}>SHOP</span>
                    <span className='cursor-pointer'>ESSENTIALS</span>
                    <Image  className=" cursor-pointer"src='/images/maccicon.png ' alt='maccicon1' onClick={homeback} width={160} />
                    <span className=" cursor-pointer" onClick={bestsellersdata}>BEST SELLERS</span>
                    <span className=" cursor-pointer">ABOUT US</span>
                    <div className='flex items-center gap-7'>  
                        <CiUser className='text-2xl' />
                        <GoBell className='text-2xl'/>
                       <span className='relative' onClick={cartpage}> <LiaShoppingBagSolid className='text-2xl' /> <span className='absolute left-[60%] top-0 bg-red-600 rounded text-white text-xs px-1'>{itemCount}</span></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
