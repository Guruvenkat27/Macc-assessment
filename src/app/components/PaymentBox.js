import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Sucecesful from './Sucecesful';
import Image from 'next/image';

const PaymentBox = () => {
  const [selectedPayment, setSelectedPayment] = useState('Debit/Credit Card');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [price, setPrice] = useState(null); 

  useEffect(() => {
   
    const storedPrice = localStorage.getItem("totalpriceitem");
    if (storedPrice) {
      setPrice(JSON.parse(storedPrice));
    }
  }, []);

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const validateCardDetails = () => {
    if (!cardHolderName || !cardNumber || !expiryDate || !cvv) {
      return 'Please fill in all fields.';
    }

    return '';
  };

  const handleProceedToPay = () => {
    const validationError = validateCardDetails();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    const paymentDetails = {
      selectedPayment,
      cardHolderName,
      cardNumber,
      expiryDate,
      cvv
    };
    
 
    localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));
    
    setIsSuccessful(true);
  };

  return (
    <div className='flex items-start justify-center gap-36 mt-5 mb-8'>
      {isSuccessful ? (
        <Sucecesful />
      ) : (
        <div className='grid gap-3'>
          <h1 className='font-bold text-3xl'>PAYMENT</h1>
          <div className='mt-4 border payment-inptbox h-36 flex flex-col justify-center gap-1'>
            {['Bitcoin', 'Apple Wallet', 'Paypal', 'Debit/Credit Card'].map(method => (
              <span key={method} className='px-5 border-gray-500 border-opacity-50 border-b flex items-center gap-3 py-1'>
                <input 
                  type='radio' 
                  value={method} 
                  checked={selectedPayment === method} 
                  onChange={handlePaymentChange} 
                />
                <label>{method}</label>
              </span>
            ))}
          </div>
          <h3 className='font-bold'>Card Details</h3>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          <div className='flex flex-col gap-3 paymentinps'>
            <input 
              className='px-4' 
              type='text' 
              placeholder="Enter Card Holder Name" 
              value={cardHolderName} 
              onChange={e => setCardHolderName(e.target.value)} 
            />
            <input 
              className='px-4' 
              type='text' 
              placeholder='Enter Card Number' 
              value={cardNumber} 
              onChange={e => setCardNumber(e.target.value)} 
            />
            <span className='flex gap-3'>
              <input 
                className='px-4' 
                type='text' 
                placeholder='Expiry Date (MM/YY)' 
                value={expiryDate} 
                onChange={e => setExpiryDate(e.target.value)} 
              />
              <input 
                className='px-4' 
                type='text' 
                placeholder='CVV'
                value={cvv} 
                onChange={e => setCvv(e.target.value)} 
              />
            </span>
            <div className='mt-8 flex justify-between w-[35vw]'>
              <span className='text-sm flex items-center gap-2'>
                <IoIosArrowBack />
                Go back to Checkout
              </span> 
              <button 
                className='text-white flex gap-2 items-center bg-red-500 text-lg px-6 py-1 font-bold' 
                onClick={handleProceedToPay}
              >
                Proceed To Pay <span className='text-base'>${price}</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <Image src='/images/payment.png' width={500} height={100} alt="Payment Illustration" />
      </div>
    </div>
  );
};

export default PaymentBox;
