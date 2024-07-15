
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PaymentBox from '../components/PaymentBox'
import { CartProvider } from '../components/Cartcontext'
import { SearchProvider } from '../components/Searching'

const page = () => {
  return (
    <div>
    <CartProvider>
      <SearchProvider>
      <Navbar />
      <PaymentBox />
      <Footer />
      </SearchProvider>
    </CartProvider>
    </div>
  )
}

export default page
