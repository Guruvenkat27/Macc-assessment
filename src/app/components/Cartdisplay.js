import React, { useEffect, useState } from 'react';
import { useCart } from './Cartcontext';
import { useRouter } from 'next/navigation';

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const [isMounted, setIsMounted] = useState(false);
const router=useRouter()
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            const priceString = item.product_price || '0'; // Default to '0' if undefined
            const price = parseFloat(priceString.replace('$', '').trim()); // Remove '$' and convert to float
            return total + (isNaN(price) ? 0 : price); // Ensure price is valid
        }, 0).toFixed(2); // Format to 2 decimal places
    };

    if (!isMounted) return null;


    const buynow=()=>{
        if(cart != []){
            const total=calculateTotalPrice()
            localStorage.setItem("totalpriceitem",JSON.stringify(total))
            router.push("/checkout")
        }
    }

    return (
        <div className='flex items-center gap-4 flex-col mt-7'>
            <h2 className='text-3xl flex items-center justify-center font-bold'>
                <span className='text-red-500'>Shopping</span> Cart
            </h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className='w-[80vw] mt-3 flex items-center gap-4 flex-col'>
                        {cart.map((item) => (
                            <li key={item.asin} className='border rounded-md py-2 px-2 gap-6 pr-6 flex items-center'>
                                <div className='w-[9vw] h-[20vh] rounded-md border'>
                                    <img src={item.product_photo} className='w-[100%] h-[100%]' alt={item.product_title} />
                                </div>
                                <p className='w-[37vw]'>{item.product_title}</p>
                                <span>${item.product_price.replace('$', '')}</span> {/* Show price without dollar sign */}
                                <button className='bg-red-500 rounded-md w-[8vw] py-1 text-white font-bold' onClick={() => removeFromCart(item.asin)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center font-bold justify-end w-[55vw]'>
                        Total Price: ${calculateTotalPrice()}
                    </div>
                    <div className='flex items-center justify-end w-[62vw]'><button className='font-bold bg-red-500  text-white w-[15vw] h-[6vh]' onClick={buynow}>BUY NOW</button></div>
                </>
            )}
        </div>
    );
};

export default Cart;
