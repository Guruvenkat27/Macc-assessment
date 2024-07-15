
"use client"
import { CartProvider } from '@/app/components/Cartcontext'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Randomitemsdisplay from '@/app/components/Randomitemsdisplay'
import { SearchProvider } from '@/app/components/Searching'
import ProductDetails from '@/app/components/Singleitem'
import React from 'react'

const page = () => {
  return (
    <div>
<CartProvider>
<SearchProvider>
   <Navbar />
   <ProductDetails />
   <Randomitemsdisplay />
   <Footer />
   </SearchProvider>

</CartProvider>
    </div>
  )
}

export default page
