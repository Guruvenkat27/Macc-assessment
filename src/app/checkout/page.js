
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Checkoutbox from '../components/Checkoutbox'
import { CartProvider } from '../components/Cartcontext'
import { SearchProvider } from '../components/Searching'

const page = () => {
  return (
    <div>
    <CartProvider>

      <SearchProvider>
      <Navbar />
      <Checkoutbox />
      <Footer />
      </SearchProvider>
    </CartProvider>
    </div>
  )
}

export default page
