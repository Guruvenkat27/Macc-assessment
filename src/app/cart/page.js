
"use client"
import React from 'react'
import { CartProvider } from '../components/Cartcontext'
import { SearchProvider } from '../components/Searching'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cartdisplay from '../components/Cartdisplay'

const page = () => {
  return (
    <div>
      <CartProvider>

        <SearchProvider>

          <Navbar />
          <Cartdisplay />
          <Footer />
        </SearchProvider>
      </CartProvider>
    </div>
  )
}

export default page
