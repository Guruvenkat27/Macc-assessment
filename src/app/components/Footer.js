import React from 'react';
import { FaRegEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className='flex items-start justify-between px-20 py-11 relative bottom-0'>
        <div>
          <Image src='/images/maccicon.png' alt='maccicon' width={200} height={150} />
        </div>
        <div className='grid gap-2'>
          <span className='text-gray-700'>Home</span>
          <span className='text-gray-700'>Collection</span>
          <span className='text-gray-700'>Products</span>
        </div>
        <div className='grid gap-2'>
          <span className='text-gray-700'>About</span>
          <span className='text-gray-700'>Contact</span>
          <span className='text-gray-700'>FAQ</span>
        </div>
        <div className='grid gap-7 py-3 px-7'>
          <p className='w-18 text-gray-600'>
            Be the first to know our biggest and best <br /> sales. We&apos;ll never send more than one email a <br /> month
          </p>
          <div className='flex items-center border-b-2 px-3 justify-between'>
            <input type='email' placeholder='ENTER YOUR EMAIL' className='border-0 px-1 bg-transparent' />
            <FaRegEnvelope className='text-xl' />
          </div>
          <div className='flex gap-4'>
            <span className='bg-blue-900 text-white px-2 py-2 rounded-full'><FaTwitter /></span>
            <span className='bg-blue-900 text-white px-2 py-2 rounded-full'><FaFacebookF /></span>
            <span className='bg-blue-900 text-white px-2 py-2 rounded-full'><FaInstagram /></span>
            <span className='bg-blue-900 text-white px-2 py-2 rounded-full'><FaLinkedinIn /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
