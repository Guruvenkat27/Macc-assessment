"use client";

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
 
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedProducts = localStorage.getItem("product");
            if (storedProducts) {
                setProducts(JSON.parse(storedProducts));
            }
        }
    }, []);

    const fetchProducts = async (value) => {
        setLoading(true);
        setError(null);

        const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${value}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'efb2ba6220msh1906057773d330bp1fd202jsn7b72e308bc9c',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            const fetchedProducts = result.data.products;

            localStorage.setItem("product", JSON.stringify(fetchedProducts));
            getRandomItems(fetchedProducts, 4);
            setProducts(fetchedProducts);
            router.push("/products");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getRandomItems = (array, numItems) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        const selectedItems = shuffled.slice(0, numItems);
        localStorage.setItem("randomitems", JSON.stringify(selectedItems));
    };

    const fetchProducts1 = async (value) => {
        setLoading(true);
        setError(null);

        const url = `https://real-time-amazon-data.p.rapidapi.com/product-offers?asin=${value}&country=US&limit=100&page=1`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'efb2ba6220msh1906057773d330bp1fd202jsn7b72e308bc9c',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            const { data } = result;
            localStorage.setItem("product12", JSON.stringify(data));

            const allProducts = JSON.parse(localStorage.getItem("product")) || [];
            getRandomItems(allProducts, 4);

            router.push(`/products/${data.asin}`);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchingCategories = async () => {
        const url = `https://real-time-amazon-data.p.rapidapi.com/product-category-list?country=IN`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'efb2ba6220msh1906057773d330bp1fd202jsn7b72e308bc9c',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            localStorage.setItem("categories", JSON.stringify(result.data));
        } catch (error) {
            console.error(error);
        }
    };

    const bestsellersData = async () => {
        const url = 'https://real-time-amazon-data.p.rapidapi.com/best-sellers?category=electronics&type=BEST_SELLERS&page=1&country=US';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'efb2ba6220msh1906057773d330bp1fd202jsn7b72e308bc9c',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            localStorage.setItem("productbest", JSON.stringify(result.data));
            router.push("/bestsellers");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SearchContext.Provider value={{ searchValue, fetchProducts1, bestsellersData, setSearchValue, fetchingCategories, fetchProducts, products, loading, error }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
