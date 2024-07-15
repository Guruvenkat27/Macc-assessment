"use client"
import { CartProvider } from "../components/Cartcontext";
import Footer from "../components/Footer";
import Homedisplay from "../components/Homedisplay";
import Navbar from "../components/Navbar";
import { SearchProvider } from "../components/Searching";
import Someproducts from "../components/Someproducts";
import Topdeals from "../components/Topdeals";
import Topsellers from "../components/Topsellers";


export default function Home() {
  return (
  
       <>
       
    <CartProvider>
    <SearchProvider>
           <Navbar />
          <Homedisplay /> 
          <Someproducts />
           <Topdeals />
          <Topsellers />
        
          <Footer />
        </SearchProvider>
    </CartProvider>
     
       
       </>
  );
}
