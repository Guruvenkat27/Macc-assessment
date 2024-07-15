
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from '../components/Cartcontext'
import { SearchProvider } from '../components/Searching'
import Bestsellerpage from '../components/Bestsellerpage'

const page = () => {
  return (
    <div>
     <CartProvider>

        <SearchProvider>

        <Navbar />
        <Bestsellerpage />
        <Footer />
        </SearchProvider>
     </CartProvider>
    </div>
  )
}

export default page
