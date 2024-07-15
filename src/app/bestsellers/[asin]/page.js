
"use client"
import { CartProvider } from '@/app/components/Cartcontext'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import Productdetails1 from '@/app/components/Productdetails1'
import Randomitems1 from '@/app/components/Randomitems1'

import { SearchProvider } from '@/app/components/Searching'

import React from 'react'

const page = () => {
  return (
    <div>
<CartProvider>
<SearchProvider>
   <Navbar />
   <Productdetails1 />
   <Randomitems1 />
   <Footer />
   </SearchProvider>

</CartProvider>
    </div>
  )
}

export default page
