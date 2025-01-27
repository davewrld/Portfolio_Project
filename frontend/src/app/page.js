"use client";

import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import { useState, useEffect } from 'react';
import api from '@/utils/api';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="tex-2xl">Featured Products</h1>
        <ProductList products={products} />
      </div>   
      <div className="mt-24">
        <h1 className="tex-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList/>
      </div>
    </div>
  )
}

export default Home;