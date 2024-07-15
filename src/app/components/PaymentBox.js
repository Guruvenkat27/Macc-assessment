import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Sucecesful from './Sucecesful';

const PaymentBox = () => {
  const [selectedPayment, setSelectedPayment] = useState('Debit/Credit Card');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleProceedToPay = () => {
 
    if (!cardHolderName || !cardNumber || !expiryDate || !cvv) {
      setErrorMessage('Please fill in all fields.');
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

  const price = JSON.parse(localStorage.getItem("totalpriceitem"));

  return (
    <div className='flex items-start justify-center gap-36 mt-5 mb-8'>
      {isSuccessful ? (
        <div><Sucecesful /></div>
      ) : (
        <div className='grid gap-3'>
          <h1 className='font-bold text-3xl'>PAYMENT</h1>
          <div className='mt-4 border payment-inptbox h-36 flex flex-col justify-center gap-1'>
            <span className='px-5 border-gray-500 border-opacity-50 border-b flex items-center gap-3 py-1'>
              <input type='radio' value='Bitcoin' checked={selectedPayment === 'Bitcoin'} onChange={handlePaymentChange} />
              <label>Bitcoin</label>
            </span>
            <span className='px-5 border-gray-500 border-opacity-50 border-b flex items-center gap-3 py-1'>
              <input type='radio' value='Apple Wallet' checked={selectedPayment === 'Apple Wallet'} onChange={handlePaymentChange} />
              <label>Apple Wallet</label>
            </span>
            <span className='px-5 border-gray-500 border-opacity-50 border-b flex items-center gap-3 py-1'>
              <input type='radio' value='Paypal' checked={selectedPayment === 'Paypal'} onChange={handlePaymentChange} />
              <label>Paypal</label>
            </span>
            <span className='px-5 flex items-center gap-3'>
              <input type='radio' value='Debit/Credit Card' checked={selectedPayment === 'Debit/Credit Card'} onChange={handlePaymentChange} />
              <label>Debit/Credit Card</label>
            </span>
          </div>
          <h3 className='font-bold'>Card Details</h3>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>} {/* Error message display */}
          <div className='flex flex-col gap-3 paymentinps'>
            <input  className='px-4'  type='text' 
              placeholder="Enter Card Holder Name" 
              value={cardHolderName} 
              onChange={e => setCardHolderName(e.target.value)} 
            />
            <input  className='px-4' type='text' 
              placeholder='Enter Card Number' 
              value={cardNumber} 
              onChange={e => setCardNumber(e.target.value)} 
            />
            <span className='flex gap-3'>
              <input className='px-4' 
                type='text' 
                placeholder='Expiry Date' 
                value={expiryDate} 
                onChange={e => setExpiryDate(e.target.value)} 
              />
              <input className='px-4' 
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
        <img src='/images/payment.png' width={500} alt="Payment Illustration" />
      </div>
    </div>
  );
};

export default PaymentBox;
