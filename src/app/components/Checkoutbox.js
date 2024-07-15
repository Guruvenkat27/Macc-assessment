import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Checkoutbox = () => {
  const router=useRouter()
  const [customerData, setcustomerData] = useState({
    firstName: '',
    lastName: '',
    streetNo: '',
    address: '',
    state: '',
    pinCode: '',
    phoneNumber: ''
  });
  
  const [error, setError] = useState('');

  const changing = (e) => {
    const { name, value } = e.target;
    setcustomerData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    
  
    if (Object.values(customerData).some(field => field.trim() === '')) {
      setError('All fields are required.');
      return;
    }else{
      setError(''); 
      localStorage.setItem("customerdata",JSON.stringify(customerData))

router.push("/payment")
    }
    
    

  };

  return (
    <>
      <div className='flex justify-center gap-36 py-3 items-start'>
        <div className='grid gap-2'>
          <h2 className='font-bold text-3xl'>CHECKOUT</h2>
          <span className='font-bold text-sm'>Delivery Address</span>
          {error && <p className='text-red-600'>{error}</p>}
          <form className='flex flex-col gap-5 checkout-form' onSubmit={formSubmit}>
            <span className='flex gap-4'>
              <input 
                className='focus:outline-none border border-gray-400' 
                type='text' 
                name='firstName' 
                placeholder='Enter your first name'
                value={customerData.firstName} 
                onChange={changing} 
              />
              <input 
                className='focus:outline-none border border-gray-400' 
                type='text' 
                name='lastName' 
                placeholder='Enter your last name' 
                value={customerData.lastName} 
                onChange={changing} 
              />
            </span>
            <span className='border border-gray-400'>
              <input 
                className='focus:outline-none' 
                type='text' 
                name='streetNo' 
                placeholder='Enter your street no'
                value={customerData.streetNo} 
                onChange={changing} 
              />
            </span>
            <span className='border border-gray-400'>
              <input 
                className='focus:outline-none' 
                type='text' 
                name='address' 
                placeholder='Enter your Address' 
                value={customerData.address} 
                onChange={changing} 
              />
            </span>
            <span className='flex gap-4'>
              <input 
                className='focus:outline-none border border-gray-400' 
                type='text' 
                name='state' 
                placeholder='Enter state'
                value={customerData.state} 
                onChange={changing} 
              />
              <input 
                className='focus:outline-none border border-gray-400' 
                type='text' 
                name='pinCode' 
                placeholder='Pin code' 
                value={customerData.pinCode} 
                onChange={changing} 
              />
            </span>
            <span className='border border-gray-400'>
              <input 
                className='focus:outline-none' 
                type='text' 
                name='phoneNumber' 
                placeholder='Enter your phone number' 
                value={customerData.phoneNumber} 
                onChange={changing} 
              />
            </span>
            <div className='mt-8 flex justify-between px-7'>
              <span className='text-sm flex items-center gap-2'>
                <IoIosArrowBack />
                Go back to cart
              </span> 
              <button className='text-white bg-red-500 text-lg px-6 py-1 font-bold'>Save and Continue</button>
            </div>
          </form>
        </div>
        <div>
          <img src='/images/distance.png' width={520} alt="Delivery" />
        </div>
      </div>
    </>
  );
}

export default Checkoutbox;
