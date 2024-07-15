"use client"

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Productspage from '../components/Productspage'
import { SearchProvider } from '../components/Searching'
import { CartProvider } from '../components/Cartcontext'
import Proimg from '../components/Proimg'



const page = () => {

  

  return (
    <div>
   
 <CartProvider>
 <SearchProvider>

<Navbar  />
<Proimg />
   <Productspage />
   <Footer />
</SearchProvider>

 </CartProvider>
    
    </div>
  )
}

export default page


